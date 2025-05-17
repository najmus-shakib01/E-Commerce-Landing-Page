import './FlashSale.css';
import freshSellProduct from '../../data/FlashSale/flashSale';

const FlashSale = () => {
    console.log(freshSellProduct);
    return (
        <div className="bg-top">
            <div className="container pt-2">
                <h3>FlashSale</h3>
                <div className="d-flex flex-wrap align-items-center flashsale-container pt-2">
                    {
                        freshSellProduct.map((data) => (

                            <div key={data.id} className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                                <img src={data.src} className="img-fluid" alt={data.alt} />
                                <p className='card-title'>{data.title}</p>
                                <p className='card-price'>{data.price}</p>
                                <small className='card-text'>
                                    <strike className='text-muted'>{data.discount}</strike>
                                    {data.discountPercentage}
                                </small>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FlashSale;