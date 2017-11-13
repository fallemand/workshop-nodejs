// tests de snapshots

const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../views/Suggest');

describe('Suggest (Snapshot)', () => {

    const component = renderer.create(<Suggest query="iph" />);

    it('Suggest rendering without results', () => {
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    })

    // it('Suggest rendering with results [change state]', () => {
    //     const instance = component.getInstance();
    //     instance.setState({
    //         results: ['iphone', 'iphone2']
    //     });

    //     const json = component.toJSON();
    //     expect(json).toMatchSnapshot();
    // })

    it('Suggest rendering with results [componentWillReceiveProps]'), () => {
        const instance = component.getInstance();
        const response = {
            results: ['iphone', 'iphone6']
        }

        window.fetch = jest.fn().mockImplementation(
            () => Promise.resolve( {json: () => Promise.resolve(response)} )
        );

        instance.componentWillReceiveProps({query: 'iph'});

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    }

});