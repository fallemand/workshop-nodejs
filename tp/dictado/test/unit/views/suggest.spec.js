const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  it('Suggest renders', () => {
    const component = renderer.create(<Suggest query="iph" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
