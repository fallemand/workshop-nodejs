const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {

    const mockedCategory = [ 
        { id: 'MLA3937', name: 'Joyas y Relojes' },
        { id: 'MLA1431', name: 'Joyas' },
        { id: 'MLA1438', name: 'Anillos' },
        { id: 'MLA23107', name: 'Acero' },
        { id: 'MLA26164', name: 'Otras Piedras' } 
    ];
  
    test('Breadcrumb renders without results', () => {
        const component = renderer.create(<Breadcrumb category="" query="anil"/>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
      });

      test('Breadcrumb renders with results', () => {
        const component = renderer.create(<Breadcrumb category={mockedCategory} query="anil"/>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
      });
  
  });