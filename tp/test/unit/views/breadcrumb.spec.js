const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {
    const category = [
    {
      "id": "MLA1000",
      "name": "Electrónica, Audio y Video"
    },
    {
      "id": "MLA409810",
      "name": "Audio"
    },
    {
      "id": "MLA3697",
      "name": "Auriculares"
    },
    {
      "id": "MLA10585",
      "name": "Con Vincha"
    },
    {
      "id": "MLA73506",
      "name": "Sennheiser"
    }
  ];

    it('Breadcrumb with query', () => {
        const component = renderer.create(<Breadcrumb query="iph" category={category} />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('Breadcrumb without query', () => {
        const component = renderer.create(<Breadcrumb category={category} />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

});
