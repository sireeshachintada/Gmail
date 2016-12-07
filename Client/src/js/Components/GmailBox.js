var React = require('react');
var ReactDOM = require('react-dom');
var {Link} = require('react-router');

// Importing all components
//var TableComponent = require('./TableComponent.js');
var ChildComponent = require('./ChildComponent.js');
var InboxComponent = require('./InboxComponent.js');
var SentComponent = require('./SentComponent.js');
var DraftComponent = require('./DraftComponent.js');
var NavBarComponent = require('./NavBarComponent.js');
var ComposeComponent = require('./ComposeComponentGrand.js');

var GmailBox = React.createClass({
  getInitialState: function() {
    return {my_sidebar: [], my_inbox_messages: [], inbox_decrypt: [], sent_decrypt: [], draft_decrypt: [], sent_items: [], draft_Items: []};
  },

// Function to retrieve details
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var VALIDURL    =   'https://www.googleapis.com/oauth2/v4/token?access_token=';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send';
   var CLIENTID    =   '1032650510431-sdhpv0rpd3mhg37gctlmb71q25hl2vtm.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {
       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.my_sidebar();
  //  this.displayInbox();
  //  this.sent_items();
 },

// Sidebar to display Labels - Inbox, Sent, Draft, Important, Trash
 my_sidebar: function()
   {
       var accessToken = localStorage.getItem('gToken');
       $.ajax({
        url: 'https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/labels?key={AIzaSyDuLKGcvgIijavCQbsIBj1JohabFb-ZpJQ}',
        dataType: 'json',
        type: 'GET',
        beforeSend: function (request)
        {
          request.setRequestHeader("Authorization", "Bearer "+accessToken);
        },
        success: function(my_sidebar)
        {
          this.setState({my_sidebar:my_sidebar.labels});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err.toString());
        }.bind(this)
     });
   },

// Function to retrieve sent items
   sent_items:function(){
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/messages?labelIds=SENT&maxResults=10&key={AIzaSyDuLKGcvgIijavCQbsIBj1JohabFb-ZpJQ}',
     dataType: 'json',
     type: 'GET',
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
     success: function(sent_items)
     {
       var just_data = sent_items.messages
       for(var i in just_data){
         var id = just_data[i].id;
         this.displaySentMessages(id);
       }
       this.setState({sent_items:this.state.sent_decrypt});
       this.state.sent_decrypt=[];

     }.bind(this),
     async: false,
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)
   });
   },

// Function to retrieve inbox ID s and thread IDs
displayInbox: function(){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/messages?labelIds=INBOX&maxResults=10&key={AIzaSyDuLKGcvgIijavCQbsIBj1JohabFb-ZpJQ}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(my_inbox_messages)
   {
     var just_data = my_inbox_messages.messages
       for(var i in just_data){
         var id = just_data[i].id;
         this.displayInboxMessages(id);
       }
     this.setState({my_inbox_messages:this.state.inbox_decrypt});
     this.state.inbox_decrypt=[];
   }.bind(this),
   async: false,
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)
});
},

// display drafts
draft_Items: function(){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/drafts?maxResults=10&key={AIzaSyDuLKGcvgIijavCQbsIBj1JohabFb-ZpJQ}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(draft_Items)
   {
     var just_data = draft_Items.drafts
       for(var i in just_data){
         var id = just_data[i].id;
         this.displayDraftMessages(id);
       }
     this.setState({draft_Items:this.state.draft_decrypt});
     console.log(draft_Items);
     this.state.draft_decrypt=[];
   }.bind(this),
   async: false,
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)
});
},

displayDraftMessages: function(msg_id){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
    //https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/drafts/1348679953659583682?key={YOUR_API_KEY}
   url: 'https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/drafts/'+msg_id+'?key={AIzaSyDuLKGcvgIijavCQbsIBj1JohabFb-ZpJQ}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(draft_Items)
   {
     console.log("printing draft msg");
     console.log(draft_Items);
     this.state.draft_decrypt.push(draft_Items);
   }.bind(this),
     error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)

});
},
// Function to get inbox mails using ID as key
displayInboxMessages: function(msg_id){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/messages/'+msg_id+'?key={AIzaSyDuLKGcvgIijavCQbsIBj1JohabFb-ZpJQ}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(inbox)
   {
     this.state.inbox_decrypt.push(inbox);
   }.bind(this),
     error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)

});
},


displaySentMessages: function(msg_id){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/sireeshachintada%40gmail.com/messages/'+msg_id+'?key={AIzaSyDuLKGcvgIijavCQbsIBj1JohabFb-ZpJQ}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(inbox)
   {
     this.state.sent_decrypt.push(inbox);
   }.bind(this),
     error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)

});
},
render: function(){
 return(
   <div>
        <NavBarComponent/>
       <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">Login</button>

        <nav className="navbar navbar-inverse sidebar my-info" role="navigation">
<a href="#compose-modal"
  data-toggle="modal"
  id="compose-button"
  className="btn btn-compose ">Compose</a>
    <ComposeComponent/>
    <InboxComponent my_inbox_messages={this.state.my_inbox_messages}/>
    <SentComponent sent_items={this.state.sent_items}/>
    <DraftComponent draft_Items={this.state.draft_Items}/>
<div className="container-fluid mynav">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>
  </div>
  <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
    <ul className="nav navbar-nav">
    <li className="active"><Link to ="/Inbox" className="nav-link" onClick={this.displayInbox}>Inbox <span className="pull-right hidden-xs showopacity glyphicon glyphicon-piggy-bank"></span></Link></li>
    <li><Link to ="/Sent" className="nav-link" onClick={this.sent_items}>Sent <span className="pull-right hidden-xs showopacity glyphicon glyphicon-send"></span></Link></li>
    <li><Link to ="/Drafts" className="nav-link" onClick={this.draft_Items}>Draft <span className="pull-right hidden-xs showopacity glyphicon glyphicon-level-up"></span></Link></li>
    </ul>
  </div>
</div>
</nav>

        <div>{this.props.children}</div>
   </div>
 );
}
});
module.exports = GmailBox;
