import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="w-full h-17 bg-background flex items-center pl-15 pr-15 justify-between">
            <Link to="/">
                <img src="/VPay_logo_White.svg" className="w-10 h-10" alt="Logo" />
            </Link>
            <div className="flex flex-row items-center">
                <Link to="/about">
                    <h1 className="text-l text-foreground ml-5 cursor-pointer">About Us</h1>
                </Link>
                <h1 className="text-l text-foreground ml-5 cursor-pointer">Pricing</h1>
                <h1 className="text-l text-foreground ml-5 cursor-pointer">AI Development</h1>
                <h1 className="text-l text-foreground ml-5 cursor-pointer">Leadership</h1>
                <Link to="/contact">
                    <button className="text-l text-background ml-5 cursor-pointer w-30 h-10 bg-foreground rounded-3xl">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;