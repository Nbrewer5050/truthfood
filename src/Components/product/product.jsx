import React, { Component } from 'react';
import QuantityPicker from './../quantityPicker/quantityPicker';
import "./product.css";

class Product extends Component {
    state = {
        Quantity: 1
    }

    render() { 
        return ( 
         
        
            <div className="product">
                

                <div className="img">
                <img alt="randomImg" src={"/products/" + this.props.data.image}></img>
                </div>


        <h4>{this.props.data.title}</h4>

             <h3>Product Decription</h3>
                <h4>Lorem, ipsum dolor sit amet consectetur um, rem, consequatur nostrum velit uidem consectetur quos!</h4> 


                <div>
                <h5>total: ${this.props.data.price * this.state.quantity}</h5>
                <h6>Price: ${this.props.data.price}</h6>
                </div>

                <div>
                <QuantityPicker minimun={this.props.data.minimun || 1} onValueChange={ (qnty) => this.handleQuantityChange(qnty)} ></QuantityPicker>
                <button className="btn btn-sm btn-info"><i className="fas fa-shopping-cart"></i></button>

            </div>

        </div>
        )
    }
        
        
    handleQuantityChange = (quantity) => {
        console.log("Qnty change", quantity);
        this.setState({quantity: quantity})
    };

}
 
export default Product;