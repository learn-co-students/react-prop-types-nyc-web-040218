import React from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

class Order extends React.Component {
  render() {
  return (
    <div className="order">
      <ul>
        <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
        <li>{this.props.size}</li>
        <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
        <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
      </ul>
    </div>
  );
}
}

// Order.defaultProps = {
//   isCone: true,
//   size: "regular",
// };

ReactDOM.render(
  <Order />,
  document.getElementById("root")
);
