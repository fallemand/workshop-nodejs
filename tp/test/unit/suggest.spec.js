const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../views/components/Suggest');
const suggestMock = require('../../mocks/suggest.json');

describe('Suggest (Snapshot)', () => {


  it('should not render any items', () => {
    const suggest = renderer.create(
      <Suggest />
    ).toJSON();
    expect(suggest).toMatchSnapshot();
  });

  it('should render suggested items when query is not empty', () => {
    const suggest = renderer.create(
      <Suggest />
    );

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(suggestMock)}));

    let suggestInstance = suggest.getInstance();
    return suggestInstance.componentWillReceiveProps({query: suggestMock.q}).then(() => {
      expect(suggest.toJSON()).toMatchSnapshot();
    });
  });
});
