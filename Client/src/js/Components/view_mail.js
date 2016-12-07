// Printing Inbox items and sent items in a table
var React = require('react');
var viewComponent = React.createClass({

  // click_and_view: function(){
  //   var subject = this.props.subject;
  //   var reply_to = this.props.msgFrom;
  //   var id = this.props.id;
  //   $.ajax({
  //    url: 'http://localhost:8081/myMessage',
  //    dataType: 'json',
  //    type: 'POST',
  //    data:  {from: reply_to, subject: subject},
  //
  //    success: function(data)
  //    {
  //      console.error('received data');
  //    }.bind(this),
  //      error: function(xhr, status, err) {
  //      console.error(err.toString());
  //    }.bind(this)
  //
  // });
  // },
  render: function() {

    return (
      <div>
      <div className="modal fade" id="view_my_mail" tabIndex="-1" role="dialog">
       <div className="modal-dialog modal-lg">
         <div className="modal-content">
           <div className="modal-i">
             <button type="button" className="close" data-dismiss="modal">
               <span aria-hidden="true">X</span>
             </button>
             <h4 className="modal-title">Compose</h4>
           </div>
           <form name="sireeshaaaaaaaaaa_Form">
             <div className="modal-body">
			          <div className="form-group">
                  <input type="text" className="form-control" value={this.props.reply_to} id="reply-to" disabled />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" value={this.props.reply_to} id="subject" disabled />
                </div>
			</div>
             <div className="modal-footer">
               <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
               <button type="submit" id="send-button" onClick={this.click_and_view} className="btn btn-primary ">Send</button>
             </div>
           </form>
         </div>
       </div>
     </div>
	 </div>
    );
  }
});
module.exports = viewComponent;
