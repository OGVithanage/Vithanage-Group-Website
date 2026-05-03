import Footer from "./components/footer";

const ContactPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col bg-background">
            <main className="flex-1 flex flex-col items-center justify-center p-10">
                <div className="max-w-4xl w-full bg-red-900 rounded-3xl p-20 flex flex-col items-center text-center text-white shadow-2xl">
                    <h1 className="text-6xl font-extrabold mb-8">Contact Us</h1>
                    <p className="text-3xl font-medium mb-4">Let's talk</p>
                    <a 
                        href="tel:0472264926" 
                        className="text-5xl font-bold hover:text-white/80 transition-colors"
                    >
                        0472264926
                    </a>
                    <div className="mt-12 w-24 h-1 bg-white/30 rounded-full"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
