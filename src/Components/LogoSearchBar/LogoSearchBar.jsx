import './LogoSearchBar.css';

const LogoSearchBar = () => {
    return (
        <div className="container-fluid search-container container pt-2 d-flex align-items-center">
            <img className='img-fluid' width='120' src="./image/web-icon.png" alt="logo search bar" />
            <input type="text" className='search-bar' placeholder='Search In Product'/>
            <button>Search</button>
        </div>
    );
};

export default LogoSearchBar;