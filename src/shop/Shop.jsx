import React from 'react';

import { ProductForm } from './ProductForm';
import { ShopList } from './ShopList';

export class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                { name: 'product 5', description: 'product1 description', price: 100 },
                { name: 'product 2', description: 'product2 description', price: 200 },
                { name: 'product 3', description: 'product3 description', price: 300 },
            ],
            order: 'desc'
        };
    }

    sortList() {
        let sorted, order;
        if (this.state.order === 'desc') {
            sorted = this.state.products.sort((itemA, itemB) => itemA.price <= itemB.price);
            order = 'asc';
        } else {
            sorted = this.state.products.sort((itemA, itemB) => itemA.price >= itemB.price);
            order = 'desc';
        }
        this.setState({['order']: order});
        this.setState({ ['products']: sorted });
    }

    newProduct(product) {
        this.setState({ products: [...this.state.products, product] });
    }

    render() {
        return (
            <div className="app" className="row">
                <ProductForm newProduct={ ::this.newProduct } />
                <ShopList products={this.state.products} sortList={ ::this.sortList }/>
            </div>
        );
    }
}
