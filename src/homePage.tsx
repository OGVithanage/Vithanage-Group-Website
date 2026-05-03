import Header from "./components/header";

function HomePage() {
    return(
        <div>
            <div className="w-screen h-screen flex flex-col">
                <Header />
                <div className="flex-1 p-10">
                    <div className="w-full h-full border border-ring/20 rounded-2xl flex items-center justify-center">
                        <div className="w-[55%]">
                            <h1 className="text-foreground text-5xl font-extrabold text-center">The Solution for your largest IT Solutions Dream, Powered by AI.</h1>
                            <div className="flex items-center justify-center mt-10">
                                <button className="text-l text-background ml-5 cursor-pointer w-30 h-10 bg-foreground rounded-3xl">Contact Us</button>
                                <button className="text-l text-foreground ml-5 cursor-pointer w-30 h-10 rounded-3xl border border-ring/50">About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;