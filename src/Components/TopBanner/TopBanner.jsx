import './TopBanner.css';
import topBannerImgAncorText from '../../data/TopBanner/topBanner';

const TopBanner = () => {
    console.log(topBannerImgAncorText);
    return (
        <div className="bg-top">
            <div className="container text-center pt-4">
                <img src="./image/top1.png" className="img-fluid top-img" alt="top" />
                <div className="row pt-4">
                    {
                        topBannerImgAncorText.map((data) =>
                            <div key={data.id} style={{ borderRadius: "10px" }} className="col bg-white m-2 py-2">
                                <img src={data.src} width="50" className="img-fluid" alt={data.alt} />
                                <a className="text-dark text-decoration-none ps-2">{data.text}</a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TopBanner;