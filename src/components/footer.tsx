import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-ring/10 bg-background">
            <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/VPay_logo_White.svg" alt="Vithanage Group Logo" className="w-8 h-8" />
                    <span className="text-lg md:text-xl font-bold text-foreground">Vithanage Group</span>
                </Link>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs md:text-sm text-foreground/60 text-center">
                <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link to="/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</Link>
                <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms and Conditions</Link>
            </div>
        </footer>
    );
};

export default Footer;
