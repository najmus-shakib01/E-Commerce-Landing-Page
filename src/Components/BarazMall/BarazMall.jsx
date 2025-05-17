import './BarazMall.css';
import barazMallProduct from '../../data/BarazMall/barazMall';


const BarazMall = () => {
    return (
        <div className="bg-top">
            <div className="container pt-2">
                <h3>DarazMall</h3>
                <div className="d-flex flex-wrap align-items-center flashsale-container pt-2">
                    {
                        barazMallProduct.map((data) =>
                            <div key={data.id} className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                                <img src={data.src} className="img-fluid" alt={data.alt} />
                                <p className='card-title'>{data.title}</p>
                                <p className='card-price'>{data.price}</p>
                                <small className='card-text'><strike className='text-muted'>{data.discount}</strike>{data.discountPercentage}</small>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='pt-4 text-center'>
                <button className='btn btn-outline-info w-25 p-2'>Load More</button>
                <br />
                <br />
            </div>
        </div>
    );
};

export default BarazMall;