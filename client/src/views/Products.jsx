import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductTable from '../components/ProductTable';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

    const Products = () => {
        const { cat } = useParams()
        const [products, setProducts] = useState([]);

    useEffect(() => {
        if(cat){
            axios.get(`${API_URL}/api/products/${cat}`)
            .then((res) =>{
                setProducts([...res.data])
            })
        }
        else{
            axios.get(`${API_URL}/api/product`)
            .then((res) =>{
                setProducts([...res.data])
            })
        }
    }, [cat]);

    return (
        <div>
            <Navbar />
            <ProductTable products={products} />
        </div>
    )
}

export default Products