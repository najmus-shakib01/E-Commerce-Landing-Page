import './Footers.css';
import footerItems from '../../data/Footers/footersItems';
import footersIcons from '../../data/Footers/footersIcons';

const Footers = () => {
    return (
        <div>
            <footer className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-start">
                            <h5><b>About Us</b></h5>
                            <p>
                                We provide the best services to our customers. Follow us on social
                                media to stay updated.
                            </p>
                        </div>

                        <div className="col-md-4 text-center">
                            <h5><b>Quick Links</b></h5>
                            <ul className="list-unstyled">
                                {
                                    footerItems.map((data) =>
                                        <li key={data.id}><a className="text-light text-decoration-none">{data.text}</a></li>
                                    )
                                }
                            </ul>
                        </div>

                        <div className="col-md-4 text-center text-md-end">
                            <h5><b>Follow Us</b></h5>
                            {
                                footersIcons.map((data) =>
                                    <a key={data.id} href={data.link} target='_blank' className="text-light me-2"><i className={data.icon}></i></a>
                                )
                            }
                        </div>
                    </div>

                    <hr className="my-3 text-light" />

                    <div className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved. Developed With <a className='text-light' target='_blank' style={{ textDecoration: 'none' }} href="https://najmus-shakib-sand.vercel.app/"><b>Nazmus Sahkib</b></a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footers;