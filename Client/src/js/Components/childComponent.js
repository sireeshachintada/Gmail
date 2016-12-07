var React = require('react');
var {render} = require('react-dom');
var ComposeComponent = require('./ComposeComponentGrand.js');
var ChildComponent = React.createClass({
  render: function(){
    return(
      <div>
    <nav className="navbar navbar-inverse sidebar my-info" role="navigation">

		<div className="container-fluid mynav">
			<div className="navbar-header">
			  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			  </button>
        <a href="#compose-modal"
    			data-toggle="modal"
    			id="compose-button"
    			className="navbar-brand">Compose</a>
            <ComposeComponent/>
			</div>
			<div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
			  <ul className="nav navbar-nav">
				<li className="active"><a href="#">Inbox <span className="pull-right hidden-xs showopacity glyphicon glyphicon-piggy-bank"></span></a></li>
				<li ><a href="#">Sent <span className="pull-right hidden-xs showopacity glyphicon glyphicon-send"></span></a></li>
				<li ><a href="#">Drafts <span className="pull-right hidden-xs showopacity glyphicon glyphicon-level-up"></span></a></li>
				<li ><a href="#">Important <span className="pull-right hidden-xs showopacity glyphicon glyphicon-tag"></span></a></li>
				<li ><a href="#">Trash <span className="pull-right hidden-xs showopacity glyphicon glyphicon-trash"></span></a></li>
			  </ul>
			</div>
		</div>
	</nav>
</div>
  );
  }
})
module.exports = ChildComponent;
