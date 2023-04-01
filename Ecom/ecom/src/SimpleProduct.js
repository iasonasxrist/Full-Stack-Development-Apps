import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductContext } from './context/productContext';
import PageNavigation from './components/PageNavigation';
import MyImage from './components/MyImage';
import { Container } from './styles/Container';
import FormatPrice from './helper/formatPrice';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import Star from './components/Star'
import AddToCart from './components/AddToCart';

const SimpleProduct = () => {
    const { id } = useParams();
    console.log("id", id)
    const API = 'https://api.pujakaitem.com/api/products';
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()


    const { id: alias, name, company, price, description, category, stock, stars, reviews, image } = singleProduct;
    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, []);

    if (isSingleLoading) {
        return <div className='page-loading'>Loading.......</div>
    }

    return (
        <Wrapper>
            <PageNavigation title={name} />
            <Container className="container">
                <div className='grid grid-two-column'>
                    <div className="product_images">
                        <MyImage imgs={image} />
                    </div>

                    <div className='product-data'>
                        <h2>{name}</h2>

                        <p>{stars}</p>
                        <Star stars={stars} reviews={reviews} />
                        <p>{reviews} reviews</p>
                        <p className='product-data-price'>
                            EUR:
                            <del>
                                <FormatPrice price={price + 150000} />
                            </del>
                        </p>
                        <p className='product-data-price product-data-real-price'>
                            Deal of the Day :  <FormatPrice price={price} />
                        </p>
                        <p>{description}</p>

                        <div className='product-data-warranty'>
                            <div className='product-warranty-data'>
                                <TbTruckDelivery className='warranty-icon' />
                                <p>Free Delivery</p>
                            </div>

                            <div className='product-warranty-data'>
                                <TbReplace className='warranty-icon' />
                                <p>30 Days Replacement</p>
                            </div>

                            <div className='product-warranty-data'>
                                <TbTruckDelivery className='warranty-icon' />
                                <p>Thapa Delivered</p>
                            </div>
                            <div className='product-warranty-data'>
                                <MdSecurity className='warranty-icon' />
                                <p>2 Year Warranty</p>
                            </div>
                        </div>
                        <div className='product-data-info'>
                            <p>
                                Available:
                                <span> {stock > 0 ? "In Stock" : "Not Available"} </span>
                            </p>
                            <p>
                                ID : <span>{id}</span>
                            </p>
                            <p>
                                Brand: <span>{company}</span>
                            </p>

                        </div>
                        <hr />
                        {stock > 0 && <AddToCart product={singleProduct} />}
                    </div>
                </div>
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.section`
    .container {
        padding: 9rem 0;
    }

    .product_images {
        display:flex;
        align-items: center;

    }
    .product-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 2rem;
    
    .product-data-warranty{

        width:100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;

        .product-warranty-data{
            text-align: center;
        }
        .warranty-icon{
            width: 4rem;
            height: 4rem;
            background-color: rgba(220,220,220,0.5);
            border-radius: 50%;
            padding: 0.6rem;
        }
    }
        .product-data-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-size: 1.8rem;

            span {
                font-weight: bold;
            }
        }
        hr {
            max-width: 100%;
            width: 90%;
            border: 0.1rem solid #000;
            color: red;
        }
        .page_loading {
            font-size: 3.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
}
`
export default SimpleProduct