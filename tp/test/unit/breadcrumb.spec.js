const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../views/components/Breadcrumb.jsx');
const categoryMock = require('../../mocks/category.json');
const searchMock = require('../../mocks/search.json');


describe('Breadcrumb (Snapshot)', () => {

  it('should render search query string at the end of the breadcrumb when query and path_from_root attribute are provided', () => {
    const tree = renderer.create(
      <Breadcrumb path_from_root={categoryMock.path_from_root} query={searchMock.query}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should only render the home link when no props are provided', () => {
    const tree = renderer.create(
      <Breadcrumb/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render breadcrumbs to final category when only path_from_root is provided', () => {
    const tree = renderer.create(
      <Breadcrumb path_from_root={categoryMock.path_from_root}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render search query string after home link when path_from_root is null', () => {
    const tree = renderer.create(
      <Breadcrumb path_from_root={[]} query={searchMock.query}/>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});
