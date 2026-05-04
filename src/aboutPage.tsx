import Footer from "./components/footer";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-background">
            <main className="flex-1 p-6 md:p-10 flex flex-col items-center">
                <div className="max-w-4xl w-full">
                    <div className="mb-6 md:mb-10">
                        <Link to="/" className="text-foreground/60 hover:text-foreground flex items-center gap-2 transition-colors">
                            <span>← Back to Home</span>
                        </Link>
                    </div>

                    <div className="bg-red-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-8 md:mb-10">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">About Vithanage Group</h1>
                        <p className="text-lg md:text-xl leading-relaxed">
                            At Vithanage Group, we are pioneers at the intersection of imagination and technology. 
                            Our mission is to bridge the gap between complex IT challenges and elegant, 
                            AI-driven solutions that empower businesses to dream bigger.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="bg-card p-8 rounded-3xl border border-ring/10 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                To become a global leader in providing ethical, high-impact AI solutions 
                                that transform how the world interacts with technology. We believe in 
                                innovation that respects user privacy and delivers tangible value.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-3xl border border-ring/10 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Approach</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                We combine deep technical expertise with a passion for creative problem-solving. 
                                Every line of code we write and every model we train is focused on 
                                realizing the "Dream" of our clients through precision and excellence.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center p-8 bg-foreground/5 rounded-3xl border border-dashed border-foreground/20">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to start your journey?</h3>
                        <Link to="/contact">
                            <button className="px-8 py-3 bg-red-900 text-white rounded-full font-bold hover:bg-red-800 transition-colors cursor-pointer">
                                Let's Talk
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
