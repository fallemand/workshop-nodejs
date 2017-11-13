const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
    const component = renderer.create(<Suggest query="iph" />);

    afterEach(() => {
        const instance = component.getInstance();
        instance.setState({
            results: []
        });
    });

    it('Suggest renders without results', () => {
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('Suggest renders with results [change state]', () => {
        const instance = component.getInstance();
        instance.setState({
            results: ['iphone', 'iphone 2', 'iphone 3']
        })
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('Suggest renders with results [componentWillReceiveProps]', () => {
        const instance = component.getInstance();
        const response = {
            results: ['iphone 5', 'iphone 6', 'iphone 7']
        };

        window.fetch = jest.fn().mockImplementation(
            () => Promise.resolve({json: () => Promise.resolve(response)})
        );

        expect.assertions(1);
        return instance.componentWillReceiveProps(response).then(() => {
            const json = component.toJSON();
            expect(json).toMatchSnapshot();
        });
    });
});
