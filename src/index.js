// Code Goes Here
import React, {Component} from "react"
import PropTypes from "prop-types"

class Order extends Component{
    render(){
        return (
            <div clasName="order">
                <ul>
                    <li>{this.props.cone ? "Cone" : "Cup"}</li>
                    <li> {this.props.size}</li>
                    <li> {this.props.scoops.length} scoops: {this.props.scoops.join(", ")}</li>
                    <li> Order by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}</li>
                </ul>
            </div>


        )
    }
}
Order.defaultProps = {
    cone: true,
    size: 'regular'
}
Order.protoTypes = {
    cone: PropTypes.bool,
    size: PropTypes.string,
    scoops:PropTypes.arrayOf(PropTypes.string).isRequired,
    orerInfo: ProtoTypes.object.shape({
        customerName: PropTypes.string.isRequired,
        orderedAt: PropTypes.number.isRequired
    }).isRequired
}
