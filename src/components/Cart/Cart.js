import React, { Component } from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';


export default class Cart extends Component {
    render() { 
        return ( 
            <>
                <ProductConsumer>
                    {(value) =>{
                        const {cart} =value;
                        if(cart.length>0)
                        {
                            return (<>
                                        <Title name="welcome to " title="cart" />
                                        <CartColumn />
                                        <CartList value={value} />
                                        <CartTotals value={value} history={this.props.history} />
                                </>
                            );
                        }
                        else
                        {
                            return (<EmptyCart />);
                        }
                    }}
                </ProductConsumer>
              
            </>
            
         );
    }
}
 
 