import './AppHeader.scss'

function AppHeader () {
    return (
        <header>
            <div className="logo">
                <h1>Lang<span className='two'>2</span>Eng</h1>
            </div>
            <div className="description">
                <p>Get any languages translated to english with Lang2Eng seamlessly and for free!</p>
            </div>
        </header>
    );
}

export default AppHeader;