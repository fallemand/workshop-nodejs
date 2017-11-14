const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  const component = renderer.create(<Suggest query="iph"/>);
  const instance = component.getInstance();
  const suggestResponse = {
    "results": [
      "iphone 6",
      "iphone 7",
      "iphone 5",
    ],
  };

  afterEach(() => {
    // Clean component state
    instance.setState({
      results: []
    });
  });

  test('Suggest renders resultssuggestResponse [change state]', () => {
    instance.setState(suggestResponse);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('Suggest renders without results', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('Suggest renders results [call componentWillReceiveProps]', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(suggestResponse)}));
    expect.assertions(1);
    return instance.componentWillReceiveProps({query: 'iph'}).then(() => {
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
