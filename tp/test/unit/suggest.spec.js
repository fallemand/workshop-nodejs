const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  const component = renderer.create(<Suggest query="iph" />);
  const suggestedResponse = {
    results: ['iphone', 'iphone 2', 'iphone 3'],
  };

  afterEach(() => {
    const instance = component.getInstance();
    instance.setState({
      results: [],
    });
  });

  test('Suggest renders without results', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('Suggest renders with results [Change State]', () => {
    const instance = component.getInstance();
    instance.setState(suggestedResponse);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('Suggest renders with results [componentWillReceiveProps]', () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(suggestedResponse) }));
    // Tell jest to expect something asyncronous
    expect.assertions(1);
    const instance = component.getInstance();
    return instance.componentWillReceiveProps({ query: 'iph' }).then(() => {
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
