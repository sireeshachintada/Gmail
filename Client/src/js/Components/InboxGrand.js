// Printing Inbox items and sent items in a table
var React = require('react');
var viewComponent = require('./view_mail.js');
var RowComponent = React.createClass({
  // click_and_view: function(){
  //   this.setState({
  //          isSelected: true
  //      })
  // },


  render: function() {
    // var subject = this.props.subject;
    // var reply_to = this.props.msgFrom;
    // var id = this.props.id;
    return (
      <tr>
        <td>{this.props.msgFrom}</td>
        <td><a href="#compose-modal" data-toggle="modal">{this.props.subject}</a>
        <viewComponent reply_to={this.props.msgFrom} subject={this.props.subject}/>
        </td>
        <td>{this.props.date}</td>
        <td><button className="btn-primary pull-right">save</button></td>
      </tr>
    );
  }
});
module.exports = RowComponent;
