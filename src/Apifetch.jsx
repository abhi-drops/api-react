import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Apifetch.css';

const Apifetch = () => {


    const [product, setProduct] = useState([])
    const base_url = 'https://dummyjson.com/products'

    const fetchData = async () => {
        const result = await fetch(base_url)
            .then(result => result.json())
            .then(products => setProduct(products.products))
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(product);

    return (



        <div className='card bg-white'>
           <div>
            <h3 className='text-center vw-100 py-3 pt-5'>Our Products</h3>
          </div>

            {
                product.map(item => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='imgg' variant="top" src={item.thumbnail} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button variant="danger">Buy Now</Button>
                        </Card.Body>
                    </Card>
                ))
            }

        </div>
    )
}

export default Apifetch
