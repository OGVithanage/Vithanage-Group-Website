import Footer from "./components/footer";

const PrivacyPolicy = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-background">
            <main className="flex-1 p-10 flex flex-col items-center">
                <div className="max-w-4xl w-full bg-card p-12 rounded-3xl border border-ring/10 shadow-sm">
                    <h1 className="text-4xl font-extrabold mb-8 text-foreground">Privacy Policy</h1>
                    <div className="space-y-6 text-foreground/80 leading-relaxed">
                        <p>At Vithanage Group, we prioritize your privacy. This policy outlines our commitment to protecting any information that might be processed through our website.</p>
                        
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Data Collection</h2>
                            <p>We do not collect, store, or process any personal data from our users. You can browse our website anonymously without any tracking or data harvesting.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Cookies</h2>
                            <p>Our website does not use cookies for tracking purposes. We aim to provide a clean, secure browsing experience.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Third-Party Services</h2>
                            <p>We do not share any information with third parties, as no personal data is collected in the first place.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Contact Us</h2>
                            <p>If you have any questions regarding this privacy policy, please contact us through the information provided on our Contact page.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
