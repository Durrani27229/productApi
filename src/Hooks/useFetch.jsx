import React from 'react'
import { useEffect , useState } from 'react'


function useFetch(url) {
  
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
      setProduct(data);
      console.log(product);
      
      }
      catch(error){
        setError(true);
      }
      finally{
        setLoading(false);
      }
      
    }
    getData();
  },[])
  
  return [loading, error, product]
}

export default useFetch
