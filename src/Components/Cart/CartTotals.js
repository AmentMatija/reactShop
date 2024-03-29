import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'

export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                    
                    <Link to="/">
                        <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>clearCart()}>
                            Ukloni sve
                        </button>
                    </Link>
                   
                    <h5>Iznos:<strong>{cartSubTotal} Kn</strong></h5>

                    <h5>Porez:<strong>{cartTax} Kn</strong></h5>
                    
                    <h5>Za platiti:<strong>{cartTotal} Kn</strong></h5>

                    <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
