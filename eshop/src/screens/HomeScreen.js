import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'
import Main from '../components/Main'
import { useState, useEffect } from 'react'
import { async } from 'regenerator-runtime'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProsucts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProsucts()
  }, [])

  return (
    <>
      <h1 className="mt-4">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            {/* <h3>{product.name}</h3> */}
            <Product product={product} />
            {/* Sending product as props in Product component */}
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
