const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  const component = renderer.create(<Suggest query="iph"/>);

  it('Suggest renders without results', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Suggest renders results', () => {
    const instance = component.getInstance();
    instance.setState({ results: [
      "iphone",
      "iphone 6",
      "iphone 7",
    ]});
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
