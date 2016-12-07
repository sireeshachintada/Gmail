var React = require('react');
var {render} = require('react-dom');
var {Router, Route, browserHistory} = require('react-router');
var Inbox_Sireesha = require('./components/InboxComponent');
var Sent_Sireesha = require('./components/SentComponent');
var Draft_Sireesha = require('./components/DraftComponent');
var Gmail_Sireesha = require('./components/GmailBox');


render((<Router history={browserHistory}>
<Route path="/" component={Gmail_Sireesha}>
<Route path="/Inbox" component={Inbox_Sireesha}/>
<Route path="/Sent" component={Sent_Sireesha}/>
<Route path="/Drafts" component={Draft_Sireesha}/>
</Route>
</Router>), document.getElementById('app'));
