import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
//import Product from './Product';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value)=>{
            const {id, company, img, info, price, title, inCart} = 
            value.detailProduct;

            return (
                <div className="container">
                  <div className="mx-auto text-center text-dark my-5"><h1>{title}</h1></div>
                  
                  <div className="row">
                    <div className="col-6 mx-auto my-3 "><img src={img} className="img-fluid" alt="product"/></div>
                    
                    <div className="col-6 mx-auto my-3">
                      <h2>Proizvod: {title}</h2>
                      <h4 className="text-muted mt-3 mb-2">
                        Model : {company}
                      </h4>
                      <h4 className="text-dark">
                        <strong>
                          Cijena: {price}<span>Kn</span>
                        </strong>
                      </h4>
                      <p className="font-weight-bold mt-3 mb-0">
                          O proizvodu:
                      </p>
                      <p className="text-muted">
                        {info}
                      </p>
                      <div>
                        <Link to="/">
                          <ButtonContainer>
                            Nazad
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "U košarici":"Dodaj u košaricu"}
                          </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </div>
            );

          }
        }
      </ProductConsumer>
    )
  }
}