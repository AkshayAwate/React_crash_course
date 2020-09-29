import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Product() {
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    const [Product, setProduct] = useState(null);
    let content = null;

    useEffect(()=>{
         axios.get(url)
        .then(response =>{
           setProduct(response.data);
        })

    }, [url])
    if(Product){
        console.log('product', Product);
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
            {Product.name}
            </h1>
            <div>
                <img
                    src={Product.images[0].imageUrl}
                    alt={Product.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {Product.price}
            </div>
            <div>
                {Product.description}
            </div>
        </div>
        

    }
    return (
        <div>
            {content}
        </div>
    )
   
    
}

export default Product
