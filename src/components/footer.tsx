const Footer = () => {
    return (
        <footer className="w-full py-6 px-10 flex items-center justify-between border-t border-ring/10">
            <div className="flex items-center gap-3">
                <img src="/VPay_logo_White.svg" alt="Vithanage Group Logo" className="w-8 h-8 invert dark:invert-0" />
                <span className="text-xl font-bold text-foreground">Vithanage Group</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-foreground/60">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Refund Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms and Conditions</a>
            </div>
        </footer>
    );
};

export default Footer;
