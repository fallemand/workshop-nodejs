const React = require('react');
const renderer = require('react-test-renderer');
const Suggest = require('../../../views/components/Suggest');

describe('Suggest test using snapshots', () => {
  const component = renderer.create(<Suggest query="macb" />);
  const response = {
    data: {
      results: ['macbook', 'macbook pro']
    },
  };

  afterEach(() => {
    const instance = component.getInstance();

    // Clean results.
    instance.setState({
      results: [],
    });
  });

  test('Renders empty', () => {
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  test('Renders with results (setState)', () => {
    const instance = component.getInstance();

    instance.setState(response.data)

    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  test('Renders with results (componentWillReceiveProps)', () => {
    // Mock fetch implementation.
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({ json: () => Promise.resolve(response) })
    );

    expect.assertions(1);

    const instance = component.getInstance();

    return instance.componentWillReceiveProps({ query: 'macb' })
      .then(() => {
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
      });
  });
});
