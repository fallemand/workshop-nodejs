const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../views/components/Suggest');

describe('Suggest (Snapshot)', () => {
  const component = renderer.create(<Suggest query="iph" />);

  it('Suggest renders without results', () => {
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Suggest renders with results [Change State]', () => {
    const instance = component.getInstance();

    instance.setState({
      results: ['iphone', 'iphone 2', 'iphone 3'],
    });

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Suggest renders with results [componentWillReceiveProps]', () => {
    const instance = component.getInstance();
    const response = {
      results: ['iphone', 'iphone 5'],
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => {
          Promise.resolve(response);
        },
      })
    );

    instance.componentWillReceiveProps({ query: 'iph' });

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
