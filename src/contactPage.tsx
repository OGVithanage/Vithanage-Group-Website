import Footer from "./components/footer";

const ContactPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-background">
            <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-10">
                <div className="max-w-4xl w-full bg-red-900 rounded-3xl p-10 md:p-20 flex flex-col items-center text-center text-white shadow-2xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-8">Contact Us</h1>
                    <p className="text-xl md:text-3xl font-medium mb-4">Let's talk</p>
                    <a 
                        href="tel:0472264926" 
                        className="text-3xl md:text-5xl font-bold hover:text-white/80 transition-colors break-all"
                    >
                        0472264926
                    </a>
                    <div className="mt-8 md:mt-12 w-20 md:w-24 h-1 bg-white/30 rounded-full"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
