import Footer from "./components/footer";

const RefundPolicy = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-background">
            <main className="flex-1 p-10 flex flex-col items-center">
                <div className="max-w-4xl w-full bg-card p-12 rounded-3xl border border-ring/10 shadow-sm">
                    <h1 className="text-4xl font-extrabold mb-8 text-foreground">Refund Policy</h1>
                    <div className="space-y-6 text-foreground/80 leading-relaxed text-center">
                        <div className="bg-red-900/10 p-8 rounded-2xl border border-red-900/20">
                            <h2 className="text-2xl font-bold mb-4 text-red-900">Non-Refundable Payments</h2>
                            <p className="text-xl font-medium">
                                Please be advised that any payment made through this website is 
                                <span className="font-bold text-red-900"> non-refundable</span>.
                            </p>
                        </div>
                        
                        <p className="mt-8">
                            By proceeding with any transaction on this platform, you acknowledge and agree that once a payment is processed, it cannot be reversed or refunded under any circumstances.
                        </p>

                        <p>
                            If you have any questions regarding our billing or this policy, please reach out to us via our Contact page before making a payment.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RefundPolicy;
