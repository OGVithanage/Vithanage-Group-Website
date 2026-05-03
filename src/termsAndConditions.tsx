import Footer from "./components/footer";

const TermsAndConditions = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-background">
            <main className="flex-1 p-10 flex flex-col items-center">
                <div className="max-w-4xl w-full bg-card p-12 rounded-3xl border border-ring/10 shadow-sm">
                    <h1 className="text-4xl font-extrabold mb-8 text-foreground">Terms and Conditions</h1>
                    <div className="space-y-6 text-foreground/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Use License</h2>
                            <p>Permission is granted to temporarily view the materials on Vithanage Group's website for personal, non-commercial transitory viewing only.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Privacy</h2>
                            <p>We do not collect any user data. Your use of this site is private and anonymous. We do not require any registration or personal information for general browsing.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Limitations</h2>
                            <p>In no event shall Vithanage Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Governing Law</h2>
                            <p>Any claim relating to Vithanage Group's website shall be governed by the laws of the jurisdiction in which the company operates without regard to its conflict of law provisions.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
