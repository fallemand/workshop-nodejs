const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  it('Suggest renders', () => {

    const suggestResponse = {
      "query": "iphone",
      "results": [
        "iphone",
        "iphone 6",
        "iphone 7",
      ]
    };

    // Mock window.fetch
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(suggestResponse)
      })
    );

    const component = renderer.create(<Suggest query="iph"/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
