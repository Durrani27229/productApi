import React from 'react'
import useFetch from '../Hooks/useFetch'
import ProductCard from '../Component/Card'

function Product() {
  const [loading, error, product] = useFetch('https://dummyjson.com/products')

  return (

    <>
      {loading && <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>}
      {error && <div className='d-flex justify-content-center  align-items-center fs-5 mt-5 font-bold'>
            <h1 className='text-red-300'>Error occured</h1>
        </div>}
     <div className='container'>
     <div className='row'>
     {product && product.products.map((item,index) => {
        return (
          <div key={index} className="cart col-lg-3 col-md-4 col-sm-6 col-12 mb-4 mt-4 " >
            <ProductCard key={index} title={item.title} description={item.description} image={item.images[0]} id={item.id} />
          </div>
        )
      })}
     </div>

     </div>
    </>
  )
}

export default Product
