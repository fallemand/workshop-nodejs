const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  const component = renderer.create(<Suggest query="iph"/>);
  const suggestResponse = {
    "results": [
      "iphone 6",
      "iphone 7",
      "iphone 5",
    ],
  };

  it('Suggest renders without results', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Suggest renders resultssuggestResponse [change state]', () => {
    const instance = component.getInstance();
    instance.setState(suggestResponse);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Suggest renders results [call componentWillReceiveProps]', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(suggestResponse)}));
    const instance = component.getInstance();
    instance.componentWillReceiveProps({query: 'iph'});
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
