const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../views/components/Suggest');

describe('Suggest (snapshots)', () => {
  const component = renderer.create(<Suggest query="iph" />);

  it('Suggest renders without results', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })

  it('Suggest renders with results [change state]', () => {
    const instance = component.getInstance();
    instance.setState({
      results:['iphone, iphone2']
    })
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })

});
