import React from 'react';
import { Product } from './Product';

import './product.css';

export class ShopList extends React.Component {

    sortList(param) {
        console.warn('param: ', param);
        this.props.sortList();
    }

    render() {
        return (
            <div className="product-list col-sm-6">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th onClick={::this.sortList.bind(this, 'orderByName') }>name</th>
                            <th onClick={::this.sortList.bind(this, 'orderByDescription') }>description</th>
                            <th onClick={::this.sortList.bind(this, 'orderByPrice') }>price</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.products.map(item => <Product key={item.name} product={ item }/>) }
                    </tbody>
                </table>
            </div>
        );
    }
}