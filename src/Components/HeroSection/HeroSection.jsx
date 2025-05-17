import './HeroSection.css';
import heroSectionButton from '../../data/HeroSection/heroSectionButton';
import heroSectionImg from '../../data/HeroSection/heroSectionImg';

const HeroSection = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {
                        heroSectionButton.map(data =>
                            <button key={data.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={data.id} aria-label={`Slide ${data.id + 1}`}></button>
                        )
                    }
                </div>
                <div className="carousel-inner pt-2">
                    <div className="carousel-item active">
                        <img src="./image/slider2.jpg" height='200px' className="d-block w-100 img-fluid" alt="slider1" />
                    </div>
                    {
                        heroSectionImg.map((data) => (
                            <div className="carousel-item" key={data.id}>
                                <img src={data.src} className="d-block w-100 img-fluid" alt={data.alt} />
                            </div>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;