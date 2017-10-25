const React = require('react');
const PropTypes = require('prop-types');
const LayoutTasks = require('./LayoutTasks');

class IndexTasks extends React.Component {
  render() {
    const {
      tasks
    } = this.props;

    return (
      <LayoutTasks {...this.props}>
        <div>
          <ul>
            {
              tasks.map((task) =>
                <li>
                  {task}
                </li>
              )
            }
          </ul>
        </div>
      </LayoutTasks>

      // Example without nice things!
      // <LayoutTasks
      //   title={this.props.title}
      //   subtitle={this.props.subtitle}
      //   shouldDisplaySubtitle={this.props.shouldDisplaySubtitle}
      // >
      //   <div>
      //     <ul>
      //       {
      //         this.props.tasks.map((task) =>
      //           <li>
      //             {task}
      //           </li>
      //         )
      //       }
      //     </ul>
      //   </div>
      // </LayoutTasks>
    );
  }
}

IndexTasks.defaultProps = {
  tasks: []
};

IndexTasks.propTypes = {
  tasks: PropTypes.array
};

module.exports = IndexTasks;
