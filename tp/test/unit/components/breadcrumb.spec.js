const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('../../../views/components/Breadcrumb');

describe('Breadcrumb test using snapshots', () => {
  const response = {
    data: {
      categories: ['Computación', 'Apple', 'Macbook'],
    },
  };

  it('Render categories', () => {
    const component = renderer.create(<Breadcrumb categories={response.data.categories} />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('Render categories with query', () => {
    const component = renderer.create(<Breadcrumb categories={response.data.categories} query="macb" />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
