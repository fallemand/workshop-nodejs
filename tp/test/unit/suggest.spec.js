// tests de snapshots
// El snapshot se comitea como parte del codigo, se guarda y se compara cuando vuelven a hacer cambios. Si cambia va a tirar un error.
// son parte del código, se tienen que revisar en los PR: es lo que esperás que ese componente haga.

const React = require('react');
// para poder compilar un componente y crear el snapshot se usa esta dependencia.
const renderer = require('react-test-renderer');
const Suggest = require('../../views/Suggest');

describe('Suggest (Snapshot)', () => {
    // compila el componente
    const component = renderer.create(<Suggest query="iph" />);

    it('Suggest rendering without results', () => {
        // transformamos el componente en json
        const json = component.toJSON();
        // esperamos q este json sea igual al snapshot que tenemos guardado
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