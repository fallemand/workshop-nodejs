const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {
  const component = renderer.create(<Breadcrumb query="item" breadcrumbList={["cat1","cat2","cat3"]}/>);

  it('Breadcrumb renders', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
