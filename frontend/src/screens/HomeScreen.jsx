import React, { useEffect, useReducer, useState } from 'react'
// import data from '../data'
import { Link } from 'react-router-dom'
import axios from 'axios'
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}
export default function HomeScreen() {
    // const [products,setProducts]=useState([]);
    const [{ loading, error, products }, dispatch] = useReducer(reducer, { loading: true, error: '', products: [] });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            }
            catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
            // setProducts(result.data);
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1>Featured Products</h1>
            {/* Featured products are items that you highlight on your website or in your store. They may be new products, bestsellers, or items that you want to promote for a specific reason. For example, if you're running a sale, you may feature the products that are on sale */}
            <div className="products">
                {
                    loading ? <div>Loading..</div> : error ? <div>{error}</div> :
                        products && products.map((product) => (<div key={product.slug} className="product">
                            <Link to={`/product/${product.slug}`}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <div className="product-info">
                                <Link to={`/product/${product.slug}`}>
                                    <p>
                                        {product.name}
                                    </p>
                                </Link>
                                <p><strong>${product.price}</strong></p>
                                <button type="">Add to Cart</button>
                            </div>
                        </div>))
                }
            </div>
        </div>
    )
}
