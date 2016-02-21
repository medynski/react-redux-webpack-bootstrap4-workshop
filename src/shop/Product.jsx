import React from "react";

export class Product extends React.Component {
    render() {
        return (
            <tr>
                <td>{ this.props.product.name }</td>
                <td>{ this.props.product.description }</td>
                <td>{ this.props.product.price }</td>
            </tr>
        );
    }
}