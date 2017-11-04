const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {
  it('Breadcrumb renders item', () => {
    const component = renderer.create(<Breadcrumb category={[{'id': '1', 'name': 'Celulares y Telefonía'}, {'id': '2','name': 'Celulares'}, {'id': '3', 'name': 'Iphone'}]} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Breadcrumb renders search', () => {
    const component = renderer.create(<Breadcrumb category={[{'id': '1', 'name': 'Celulares y Telefonía'}, {'id': '2', 'name': 'Celulares'}, {'id': '3', 'name': 'Iphone'}]} query="iphone 7" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
