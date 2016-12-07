var React = require('react');
var RowComponent = require('./RowComponent.js');
var TableComponent = React.createClass({

  render: function() {
    var rows = [];
      this.props.my_sidebar.forEach(function(my_sidebar) {
        if(my_sidebar.name=="INBOX" || my_sidebar.name=="DRAFT" ||my_sidebar.name=="SENT" || my_sidebar.name=="TRASH" || my_sidebar.name=="IMPORTANT"){
       rows.push(<RowComponent my_sidebar={my_sidebar} key={my_sidebar.name}/>);
     }
    });

    return (
      <table className="my-info">
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
module.exports = TableComponent;
