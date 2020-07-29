import React from 'react';
import {Link} from 'react-router-dom';


function CartTotals({value}) {
    
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
    
        return ( 
            <>
                <div className="container">
                <div className="row">
                    
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right" >
                            <Link to="/">
                                <button className="btn btn-outline-danger  text-uppercase mb-3 px-5 " type="button" onClick={()=>clearCart()} >
                                    clear cart
                                </button>
                            </Link>
                            
                            <h5 className="text-title">
                                Subtotal : <span>
                                    <strong>Rs. {cartSubTotal}</strong>
                                </span>
                            </h5>
                            <h5 className="text-title">
                                Tax : <span>
                                    <strong>Rs. {cartTax}</strong>
                                </span>
                            </h5>
                            <h5 className="text-title">
                                Total : <span>
                                    <strong>Rs. {cartTotal}</strong>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>

            </>
         );
    
}
 
export default CartTotals;