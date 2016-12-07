var React = require('react');

var RowComponent = React.createClass({
  render: function() {
    return (

      <tr>
        <td>{this.props.my_sidebar.name}</td>
      </tr>
    );
  }
});
module.exports = RowComponent;
