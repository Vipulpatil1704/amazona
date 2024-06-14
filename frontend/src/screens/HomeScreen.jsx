import React, { useEffect, useReducer, useState } from 'react'
// import data from '../data'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Product from '../components/Product'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
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
            <Helmet>
                <title>Amazona</title>
            </Helmet>
            <h1>Featured Products</h1>
            {/* Featured products are items that you highlight on your website or in your store. They may be new products, bestsellers, or items that you want to promote for a specific reason. For example, if you're running a sale, you may feature the products that are on sale */}
            <div className="products">
                {
                    loading ? <LoadingBox/> : error ? <MessageBox variant="danger">{error}</MessageBox> : <Row>
                        {
                            products && products.map((product) => (<Col sm={6} md={4} lg={3}>
                               <Product key={product.slug} product={product}/>
                            </Col>
                            ))
                        }
                    </Row>
                }
            </div>
        </div>
    )
}
