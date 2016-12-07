var React= require("react");
var {Link} = require('react-router');
var NavBarComponent=React.createClass({
 render:function(){
   return(
    <div>
    	<nav className="navbar navbar-default navbar-inverse navbar-collapse my_nav">
      		<div className="container-fluid">
          			<div className="navbar-header">
            				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              					<span className="sr-only">Toggle navigation</span>
              					<span className="icon-bar"></span>
              					<span className="icon-bar"></span>
              					<span className="icon-bar"></span>
            				</button>
          			</div>
          			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            				<ul className="nav navbar-nav navbar-collapse">

              					<li className="dropdown">
                					  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">sireesha Chintada <span className="caret"></span></a>
                					  <ul className="dropdown-menu">
                    						<li><a href="#">MyAccount</a></li>
                    						<li role="separator" className="divider"></li>
                    						<li><a href="#">Signout</a></li>
                				    </ul>
            					  </li>
            				</ul>



            				<form className="navbar-form navbar-left">
              					<div className="form-group">
                					  <input type="text" className="form-control" placeholder="Search"/>
                					  <button type="button" className="btn btn-default "><span className="glyphicon glyphicon-search"></span></button>
              					</div>
            				</form>

            				<ul>
                    <li><a href="#"><span class="glyphicon glyphicon-film"></span> Save</a></li>
              					<li className="collapse navbar-collapse navbar-right " id="logo">
              						<img src="../images/gmail.png" alt="Smiley face"/>
              					</li>
            				</ul>
          		  </div>
        		</div>
      	</nav>
    </div>
         )
   }
})
module.exports=NavBarComponent;
