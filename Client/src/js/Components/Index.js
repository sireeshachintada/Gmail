var React = require('react');
var {render} = require('react-dom');
var {Link} = require('react-router');
var IndexComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <ul>
            <li><Link to ="/Navbar" activeClassName="active">Navbar</Link></li>
            <li><Link to ="/Inbox" activeClassName="active">Inbox</Link></li>
            <li><Link to ="/Sent" activeClassName="active">Sent</Link></li>
          </ul>
        </div>
        <div>{this.props.children}</div>
      </div>
  );
}
});
module.exports = IndexComponent;
