// Printing Inbox items and sent items in a table
var React = require('react');
var RowComponent = React.createClass({
  render: function(){
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.subject}</td>
        <td>{this.props.msgFrom}</td>
      </tr>
    );
  }
});
module.exports = RowComponent;
