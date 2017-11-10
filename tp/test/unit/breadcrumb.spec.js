const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {
    const component = renderer.create(<Breadcrumb breadcrumbList={[]} query="auto" />);
    const response = {
        results: ['iphone', 'iphone 6']
    };

    it('Suggest renders without results', () => {
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('Suggest renders with results [change state]', () => {
        const instance = component.getInstance();
        instance.setState({
            results: ['iphone', 'iphone2']
        });
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('Suggest renders with results [componentWillReceiveProps]', () => {
        const instance = component.getInstance();
        window.fetch = jest.fn().mockImplementation(
            () => Promise.resolve({ json: () => Promise.resolve(response) })
        );
        instance.componentWillReceiveProps({ query: 'iph' });
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});