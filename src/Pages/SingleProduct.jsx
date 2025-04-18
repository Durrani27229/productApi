import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../config/redux/reducer/cartSlice';

const SingleProduct = () => {
     const dispatch = useDispatch();
    const params = useParams()
    const [loading, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`)

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (error) {
        return <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <h1 className='text-danger'>Error occurred</h1>
        </div>
    }

    return (
        <>
  


        <div className="container py-5">
            <div className="row row-cols-1 row-cols-lg-2 g-5">
                {/* Product Image */}
                <div className="d-flex justify-content-center">
                    <img
                        src={data.images[0]}
                        alt={data.title}
                        className="img-fluid w-75 h-auto border rounded-lg shadow"
                    />
                </div>
                {/* Product Details */}
                <div>
                    <h1 className="display-4 text-dark">
                        {data.title}
                    </h1>
                    {/* Price and Discount */}
                    <div className="d-flex align-items-center mb-3">
                        <span className="fs-3 fw-bold text-success">${data.price}</span>
                        <span className="text-muted text-decoration-line-through ms-3 fs-6">${(data.price / (100 - data.discountPercentage) * 100).toFixed(2)}</span>
                        <span className="text-success ms-2 fs-6">-{data.discountPercentage}% Off</span>
                    </div>
                    {/* Rating and Reviews */}
                    <div className="d-flex align-items-center mb-3">
                        <span className="text-warning">⭐⭐⭐⭐⭐</span>
                        <span className="ms-2 text-muted">{data.rating} ({data.reviews.length} Reviews)</span>
                    </div>
                    {/* Description */}
                    <p className="text-muted mb-3">
                        {data.description}
                    </p>
                    {/* Availability */}
                    <div className="text-muted mb-3">
                        <p><strong>Availability:</strong> {data.availabilityStatus} ({data.stock} left)</p>
                        <p><strong>Minimum Order Quantity:</strong> 24</p>
                    </div>
                    {/* Shipping Information */}
                    <p className="text-muted mb-3">
                        <strong>Shipping:</strong> Ships in 1 month
                    </p>
                    {/* Warranty */}
                    <p className="text-muted mb-3">
                        <strong>Warranty:</strong> {data.warrantyInformation}
                    </p>
                    {/* Return Policy */}
                    <p className="text-muted mb-3">
                        <strong>Return Policy:</strong> {data.returnPolicy}
                    </p>
                    {/* Barcode & QR Code */}
                    <div className="mb-3">
                        <img
                            src="https://assets.dummyjson.com/public/qr-code.png"
                            alt="QR Code"
                            className="img-fluid w-25 border rounded"
                        />
                        <p className="text-muted mt-2">
                            <strong>Barcode:</strong> {data.sku}
                        </p>
                    </div>
                    {/* Add to Cart Button */}
                    <button
  className="btn btn-primary w-100 py-3 fw-semibold"
  onClick={() =>
    dispatch(
      addToCart({
        title: data.title,
        description: data.description,
        image: data.images[0],
        id: data.id,
        price: data.price,
      })
    )
  }
>
  Add to Cart
</button>
                </div>
            </div>
        </div>
        </>

    )
}

export default SingleProduct
