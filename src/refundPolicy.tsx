import Footer from "./components/footer";

const RefundPolicy = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-background">
            <main className="flex-1 p-10 flex flex-col items-center">
                <div className="max-w-4xl w-full bg-card p-12 rounded-3xl border border-ring/10 shadow-sm">
                    <h1 className="text-4xl font-extrabold mb-8 text-foreground text-center">Refund Policy</h1>
                    
                    <div className="space-y-10 text-foreground/80 leading-relaxed">
                        <section>
                            <p className="text-lg">
                                Thank you for working with Vithanage Group. We value your satisfaction and strive to provide you with the best online experience possible. If, for any reason, you are not completely satisfied with your purchase, we are here to help.
                            </p>
                        </section>

                        <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Returns</h2>
                            <p>
                                We do not accept returns. We are putting effort to bring your idea to life once we do that commitment from our side we will not be able to return the amount that you deposited.
                            </p>
                        </section>

                        <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Refunds</h2>
                            <p>
                                We do not accept refunds. We are putting effort to bring your idea to life once we do that commitment from our side we will not be able to return the amount that you deposited.
                            </p>
                        </section>

                        <section className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Revisions</h2>
                            <p className="text-xl font-medium">
                                We support <span className="font-bold">unlimited revision</span> for the service that we provided.
                            </p>
                        </section>

                        <section className="bg-blue-900/10 p-8 rounded-2xl border border-blue-900/30">
                            <h2 className="text-xl font-bold mb-3 text-blue-400">Special Note: Technical Errors</h2>
                            <p className="text-foreground/90 italic">
                                Please note that any errors occurring directly from the payment service provider or <strong>from our side</strong> will be subjected to a <strong>full refund</strong>.
                            </p>
                        </section>

                        <section className="text-center pt-6">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                            <p>
                                If you have any questions or concerns regarding our refund policy, please contact our customer support team. We are here to assist you and ensure your shopping experience with us is enjoyable and hassle-free.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RefundPolicy;
