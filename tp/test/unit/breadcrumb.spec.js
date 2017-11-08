const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../views/components/Breadcrumb');

describe('Breadcrumb (Snapshot)', () => {
  const catArray = [
    { id: 'cat1', name: 'cat 1' },
    { id: 'cat2', name: 'cat 2' },
    { id: 'cat3', name: 'cat 3' },
    { id: 'cat4', name: 'cat 4' },
  ];
  
  it('Breadcrumb renders without results', () => {

    const component = renderer.create(<Breadcrumb categories="" query="" />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Breadcrumb renders with results', () => {
    const component = renderer.create(<Breadcrumb categories={catArray} query="" />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
