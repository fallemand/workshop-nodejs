const React = require('react');
const renderer = require('react-test-renderer');
const SearchItem = require('../../views/components/SearchItem');
const SearchMock = require('../../mocks/search.json');

describe("SearchItem (snapshot)", () => {
  it("should render an item correctly when item data is provided", () => {
    const item = renderer.create(<SearchItem {...SearchMock.results[0]} />).toJSON();
    expect(item).toMatchSnapshot();
  })
});
