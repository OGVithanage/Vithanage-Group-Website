import Aurora from "./components/Aurora/Aurora";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <div className="w-screen h-screen flex flex-col">
                <div className="flex-1 p-10">
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
                            <h1 className="text-white text-5xl font-extrabold text-center">The Solution for your largest IT Dream, Powered by AI.</h1>
                            <div className="flex items-center justify-center mt-10">
                                <Link to="/contact">
                                    <button className="text-l text-red-900 ml-5 cursor-pointer w-30 h-10 bg-white rounded-3xl font-semibold">Contact Us</button>
                                </Link>
                                <Link to="/about">
                                    <button className="text-l text-white ml-5 cursor-pointer w-30 h-10 rounded-3xl border border-white/50 hover:bg-white/10 transition-colors">About Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;
