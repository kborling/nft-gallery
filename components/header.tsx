import layoutStyles from '../styles/layout.module.scss'

export default function Header() {
    return (
        <header className="header header-fixed unselectable header-animated">
            <div className="header-brand">
                <div className="nav-item no-hover">
                    <h6 className="title">NFTs For Beginners</h6>
                </div>
                <div className="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
            </div>
            <div className="header-nav" id="header-menu">
                <div className="nav-left">
                    <div className="nav-item text-center"> <a href="#"> <span className="icon"> <i className="fab fa-wrapper fa-twitter" aria-hidden="true"></i> </span> </a> </div>
                </div>
                <div className="nav-right">
                    <div className="nav-item">
                        <a href="#">What Are NFTs?</a>
                        <a href="#gallery">NFT Gallery</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
