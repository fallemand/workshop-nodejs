const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  const component = renderer.create(<Suggest query="iph" />);
  const response = {
    results: ['iphone', 'iphone 6']
  };
  window.fetch = jest.fn().mockImplementation(
    () => Promise.resolve({json: () => Promise.resolve(response)})
  );

  afterEach(() => {
    const instance = component.getInstance();
    instance.setState({
      results: []
    });
  });

  it('Suggest renders without results', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Suggest renders with results [change state]', () => {
    const instance = component.getInstance();
    instance.setState({
      results: ['iphone', 'iphone2']
    });
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Suggest renders with results [componentwillReceiveProps]', () => {
    const instance = component.getInstance();
    expect.assertions(1);
    instance.componentWillReceiveProps({query: 'iph'}).then(() => {
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });

  });


});
