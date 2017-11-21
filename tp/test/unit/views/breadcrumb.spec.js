const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {
  const category = [
    {
      id: "MLA5726",
      name: "Electrodomésticos y Aires Ac."
    },
    {
      id: "MLA10225",
      name: "Electrodomésticos de Cocina"
    },
    {
      id: "MLA10068",
      name: "Tostadoras"
    }
  ]


  it('Render with query and category', () => {
    const component = renderer.create(<Breadcrumb query="iph" category={category} />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });


  it('Render with query only', () => {
    const component = renderer.create(<Breadcrumb query="iph" />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});
