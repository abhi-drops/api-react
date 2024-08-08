import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <div>
            <MDBCarousel showControls interval={3000}>
                <MDBCarouselItem itemId={1} interval={1000}>
                    <img src='https://img.freepik.com/free-vector/online-shopping-poster-with-realistic-alarm-clock-product-cart-gifts-phone-vector-illustration_548887-250.jpg?w=1380&t=st=1723052311~exp=1723052911~hmac=b32796032fc6aab96fa5cc4a17c9b7c35e131659bd32e81c048c96ce394302cf' className='img' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src='https://img.freepik.com/free-vector/mega-sale-promotion-banner-with-3d-cart-with-gift-platform-shopping-bags-balloons-vector-illustration_548887-172.jpg?w=1380&t=st=1723052440~exp=1723053040~hmac=f50bd4fa9fd0855249a9f2a75bca2aab6fc784ef27e51c0bba1a88f8d98665d3' className='img' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src='https://img.freepik.com/free-vector/concept-online-shopping-social-media-app-smartphone-with-shopping-bag-cart-gift-suitable-promotion-digital-stores-web-ad-vector-illustration_548887-122.jpg?t=st=1723052586~exp=1723056186~hmac=3b16329476de2496064ecedddc8d452b7ee066006ca46a00c7e23ef9a7496b44&w=1380' className='img' alt='...' />
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    )
}

export default Carousel
