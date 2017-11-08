// const React = require('react');
// const renderer = require('react-test-renderer');
// const Breadcrumb = require('../../../views/components/Breadcrumb');
//
// describe('Breadcrumb (Snapshot)', () => {
//
//   const category = {
//
//     category: [
//     {
//       id: "MLA5726",
//       name: "Electrodomésticos y Aires Ac."
//     },
//     {
//       id: "MLA10225",
//       name: "Electrodomésticos de Cocina"
//     },
//     {
//       id: "MLA10068",
//       name: "Tostadoras"
//     }
//   ]
//   }
//
//
//   it('Render with query', () => {
//     const component = renderer.create(<Breadcrumb query="iph" category={this.category} />);
//
//     const json = component.toJSON();
//     expect(json).toMatchSnapshot();
//   });
//
//
//   it('Render without query', () => {
//     const component = renderer.create(<Breadcrumb />);
//
//     const json = component.toJSON();
//     expect(json).toMatchSnapshot();
//   });
//
// });
