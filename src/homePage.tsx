import { useState, useRef } from "react";
import Aurora from "./components/Aurora/Aurora";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import gsap from "gsap";

function HomePage() {
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);

    const products = [
        {
            title: "Website Building",
            price: "Starting at 20,000/=",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            details: "Our website building service includes modern design, responsive layout, SEO optimization, and a user-friendly CMS. We focus on creating a digital presence that converts visitors into customers."
        },
        {
            title: "Mobile App Development",
            price: "Starting at 50,000/=",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
            details: "We build native and cross-platform mobile applications that provide seamless user experiences. From initial concept to App Store deployment, we handle the entire lifecycle."
        },
        {
            title: "Cloud Hosting",
            price: "Starting at 2,000/= per month",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            details: "Experience lightning-fast speeds and unparalleled reliability with our managed cloud hosting. We provide 24/7 monitoring, automatic backups, and scalable resources."
        }
    ];

    const handleProductClick = (index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        setSelectedProduct(index);

        // Initial setup for modal
        gsap.set(modalRef.current, {
            display: "flex",
            opacity: 1,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            borderRadius: "1.5rem",
        });

        gsap.set(modalContentRef.current, { opacity: 0 });

        // Animation to full screen
        gsap.to(modalRef.current, {
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 0,
            duration: 0.6,
            ease: "expo.out",
            onComplete: () => {
                gsap.to(modalContentRef.current, { opacity: 1, duration: 0.3 });
            }
        });
    };

    const handleClose = () => {
        if (selectedProduct === null) return;
        const card = cardRefs.current[selectedProduct];
        if (!card) return;

        const rect = card.getBoundingClientRect();

        gsap.to(modalContentRef.current, { opacity: 0, duration: 0.2 });
        gsap.to(modalRef.current, {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            borderRadius: "1.5rem",
            duration: 0.5,
            ease: "expo.inOut",
            onComplete: () => {
                gsap.set(modalRef.current, { display: "none" });
                setSelectedProduct(null);
            }
        });
    };

    return (
        <div className="relative bg-background">
            {/* Sticky Hero Section */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-10 px-10 pb-28">
                <div className="w-full h-full bg-red-900 rounded-3xl overflow-hidden relative flex items-center justify-center">
                    <div className="absolute inset-0">
                        <Aurora
                            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                            blend={0.5}
                            amplitude={1.0}
                            speed={0.5}
                        />
                    </div>
                    <div className="relative z-10 w-[55%]">
                        <h1 className="text-white text-5xl font-extrabold text-center leading-tight">
                            The Solution for your largest IT Dream, Powered by AI.
                        </h1>
                        <div className="flex items-center justify-center mt-10">
                            <Link to="/contact">
                                <button className="text-l text-red-900 ml-5 cursor-pointer w-32 h-10 bg-white rounded-3xl font-semibold hover:bg-opacity-90 transition-all">
                                    Contact Us
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="text-l text-white ml-5 cursor-pointer w-32 h-10 rounded-3xl border border-white/50 hover:bg-white/10 transition-all">
                                    About Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Section Reveal */}
            <div className="relative z-20 bg-background pt-20 pb-40">
                <div className="max-w-7xl mx-auto px-10">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {products.map((product, index) => (
                            <div 
                                key={index} 
                                ref={(el) => { cardRefs.current[index] = el; }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group flex flex-col justify-between h-64"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                                    <div className="text-primary font-bold text-lg">
                                        {product.price}
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleProductClick(index)}
                                    className="mt-8 bg-white text-background px-6 py-2 rounded-full font-bold self-start hover:scale-105 transition-transform cursor-pointer"
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* GSAP Modal/Popout Overlay */}
            <div 
                ref={modalRef}
                className="fixed z-100 bg-[#1a1a1c] border border-white/10 hidden overflow-hidden flex-col items-center justify-start p-6 md:p-20 overflow-y-auto"
                style={{ position: 'fixed' }}
            >
                <div ref={modalContentRef} className="w-full max-w-4xl flex flex-col items-center">
                    {selectedProduct !== null && (
                        <>
                            <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-10 border border-white/10 shrink-0">
                                <img 
                                    src={products[selectedProduct].image} 
                                    alt={products[selectedProduct].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-center">{products[selectedProduct].title}</h2>
                            <p className="text-primary text-xl md:text-2xl font-bold mb-8 text-center">{products[selectedProduct].price}</p>
                            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 text-center max-w-2xl">
                                {products[selectedProduct].details}
                            </p>
                            <button 
                                onClick={handleClose}
                                className="bg-white text-background px-10 py-4 rounded-full font-extrabold text-lg hover:scale-105 transition-transform cursor-pointer mb-10"
                            >
                                Back to Solutions
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-30">
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
