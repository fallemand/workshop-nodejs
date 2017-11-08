const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
    // Metodo de testeo, útil para componentes
    const component = renderer.create(<Suggest query="iph" />);
    const response = {suggested_queries: [
        {q: 'iphone'},
        {q: 'iphone 5'},
        {q: 'iphone 6'}
    ]};

    afterEach(() => {
        const instance = component.getInstance();
        instance.setState(() => {
            results: []
        });
    });

    test('Suggest render without results',()=> {
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    test('Suggest render with results [change state]',()=> {
        const instance = component.getInstance();
        instance.setState({
            suggested_queries: [{ q: 'iphone', q: 'iphone 6'}]
        });
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    test('Suggest render with results [componentWillReceiveProps]',()=> {
        const instance = component.getInstance();
        window.fetch = jest.fn().mockImplementation(
            () => Promise.resolve({json: () => Promise.resolve({
                suggested_queries: [{ q: 'iphone', q: 'iphone 6'}]
            })})
        );
        expect.assertions(1);
        return instance.componentWillReceiveProps({query: 'iph'}).then(() => {
            const json = component.toJSON();
            expect(json).toMatchSnapshot();
        });
    });
});