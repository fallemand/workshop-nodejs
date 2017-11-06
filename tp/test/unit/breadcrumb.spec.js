const React = require('react');
const renderer = require('react-test-renderer');
const Breadcrumb = require('./views/components/Breadcrumb.jsx');

describe('Breadcrumb (Snapshot)', () => {
  const component = renderer.create(<Breadcrumb />);

  it('Should only render home link', () => {

  });
});
