const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {
  const component = renderer.create(<Breadcrumb />);

  it('Breadcrumb with query', () => {
    const breadcrumb = ['Celulares y Telefonos', 'Iphone'];
    const query = "iphone";

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })

  it('Breadcrumb without query', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
