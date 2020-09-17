import React from 'react'
import './Home.css'

import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home_img"
                src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo-square.png"
                alt="">
            </img>

            
            {/*Products*/}

            <div className="home_row">
                <Product
                    id={12321341}
                    title="The Leon startup"
                    price={11.96}
                    rating={5}
                    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                >
                </Product>

                <Product
                    id={12321341}
                    title="The Leon startup"
                    price={11.96}
                    rating={5}
                    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                >
                </Product>

            </div>



            <div className="home_row">
                <Product
                    id={12321341}
                    title="The Leon startup"
                    price={11.96}
                    rating={5}
                    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                >
                </Product>

                <Product
                    id={12321341}
                    title="The Leon startup"
                    price={11.96}
                    rating={5}
                    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                >
                </Product>

                <Product
                    id={12321341}
                    title="The Leon startup"
                    price={11.96}
                    rating={5}
                    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                >
                </Product>
            </div>


        </div>
    )
}

export default Home
