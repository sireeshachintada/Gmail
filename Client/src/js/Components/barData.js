
var ProductRow = React.createClass({
  render: function() {

	var name = this.props.label.type ?
      this.props.label.name :
      <span style={{color: 'red'}}>
        {this.props.label.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.labels.forEach(function(label) {
       rows.push(<ProductRow label={label} key={label.name} />);
    });
    return (
      <table>
	     <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {myLabelsData: []};
  },

  render: function() {
    return (
      <div>
        <ProductTable labels={this.props.labels} />
      </div>
    );
  }
});

var myLabelsData = [];

ReactDOM.render(
  <FilterableProductTable labels={myLabelsData} />,
  document.getElementById('container')
);
