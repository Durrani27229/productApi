import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../config/redux/reducer/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="lead">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cartItems.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'contain' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-truncate">{item.description}</p>
                      <p className="mb-1"><strong>Price:</strong> ${item.price}</p>
                      <p className="mb-1"><strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    <div className="d-flex align-items-center my-2">
                      <button
                        className="btn btn-outline-primary btn-sm me-2"
                        onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-primary btn-sm ms-2"
                        onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn fs-6 fw-semibold rounded btn-danger py-2 btn-sm mt-2"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                     Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
            <button className="btn btn-success mt-2 px-4 py-2 fw-semibold">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
