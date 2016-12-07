// Retrieve Inbox mails
var React = require('react');
var RowComponent = require('./InboxGrand.js');
var InboxComponent = React.createClass({
  render: function() {
    var rows = [];
    var subject,msgFrom,date;
    this.props.my_inbox_messages.forEach(function(message) {
          for(var i=0;i < message.payload.headers.length;i++){
          if(message.payload.headers[i].name == "Subject"){
            subject = message.payload.headers[i].value;
          }
          if(message.payload.headers[i].name == "From"){
            msgFrom = message.payload.headers[i].value;
            var fields = msgFrom.split(/</);
            msgFrom = fields[0];
          }
         if(message.payload.headers[i].name == "Date"){
            date = message.payload.headers[i].value;
          }
        }
    rows.push(<RowComponent msgFrom={msgFrom} subject={subject} date={date} key={message.id} />);
    });
    return (

      <aside>
      <table className="table table-inbox table-hover">
        <tbody>{rows}</tbody>
      </table>
      </aside>

    );
  }
});
module.exports = InboxComponent;
