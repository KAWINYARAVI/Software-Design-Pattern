import React from "react";
import { Link } from "react-router-dom";
import "./Portal.css"; // Ensure this CSS file is correctly linked

const Portal = () => {
  // Sample cart state (Replace this with your actual Redux state or props)
  const state = [
    { id: 1, title: "Product 1", price: 30, qty: 2, image: "image-url" },
    { id: 2, title: "Product 2", price: 50, qty: 1, image: "image-url" }
  ];

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="empty-cart-message">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark continue-shopping-btn">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header item-list-header">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id} className="item-row">
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="cart-item-image"
                          />
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <p><strong>{item.title}</strong></p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="item-controls">
                            <button className="btn px-3">
                              <i className="fas fa-minus"></i>
                            </button>
                            <p className="mx-5">{item.qty}</p>
                            <button className="btn px-3">
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <p className="text-start text-md-center item-price">
                            <strong>{item.qty} x ${item.price}</strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 order-summary-card">
                <div className="card-header order-summary-header">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item order-summary-item">
                      Products ({totalItems}) <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item order-summary-item">
                      Shipping <span>${shipping}</span>
                    </li>
                    <li className="list-group-item order-summary-total">
                      <div><strong>Total amount</strong></div>
                      <span><strong>${Math.round(subtotal + shipping)}</strong></span>
                    </li>
                  </ul>
                  <Link to="/checkout" className="btn btn-dark checkout-btn">
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="portal">
      <h1 className="text-center">Cart</h1>
      <hr />
      {state.length > 0 ? <ShowCart /> : <EmptyCart />}
    </div>
  );
};

export default Portal;