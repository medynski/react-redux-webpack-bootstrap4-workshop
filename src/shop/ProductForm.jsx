import React from "react";

export class ProductForm extends React.Component {
    static propTypes = {
        newProduct: React.PropTypes.func.isRequired
    };

    handleChange({ target }) {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

        let item = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price
        };
        this.props.newProduct(item);

        e.target.querySelectorAll('*[name="name"]')[0].value = '';
        e.target.querySelectorAll('*[name="description"]')[0].value = '';
        e.target.querySelectorAll('*[name="price"]')[0].value = '';
    }

    render() {
        return (
            <form className="col-sm-6" onSubmit={ ::this.handleSubmit }>
                <div className="input-group">
                    <span className="input-group-addon">Name</span>
                    <input type="text" className="form-control" name="name" onChange={ ::this.handleChange } />
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Description</span>
                    <input type="text" className="form-control" name="description" onChange={ ::this.handleChange } />
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Price</span>
                    <input type="text" className="form-control" name="price" onChange={ ::this.handleChange } />
                </div>
                <hr/>
                <div className="input-group">
                    <button className="btn btn-primary" type="submit">Add new product</button>
                </div>
            </form>
        );
    }
}