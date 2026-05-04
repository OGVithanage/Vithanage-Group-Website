import Footer from "./components/footer";

const TermsAndConditions = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-background">
            <main className="flex-1 p-6 md:p-10 flex flex-col items-center">
                <div className="max-w-4xl w-full bg-card p-8 md:p-12 rounded-3xl border border-ring/10 shadow-sm">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-foreground text-center">Terms and Conditions</h1>
                    
                    <div className="space-y-8 md:space-y-10 text-foreground/80 leading-relaxed text-sm md:text-base">
                        <section>
                            <p className="text-base md:text-lg text-center md:text-left">
                                Welcome to Vithanage Group. These Terms and Conditions govern your use of our website and the purchase and sale of products from our platform. By accessing and using our website, you agree to comply with these terms. Please read them carefully before proceeding with any transactions.
                            </p>
                        </section>

                        <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">1. Use of the Website</h2>
                            <ul className="list-disc pl-5 md:pl-6 space-y-2">
                                <li>You must be at least 18 years old to use our website or make purchases.</li>
                                <li>You are responsible for maintaining the confidentiality of your account information, including your username and password.</li>
                                <li>You agree to provide accurate and current information during the registration and checkout process.</li>
                                <li>You may not use our website for any unlawful or unauthorized purposes.</li>
                            </ul>
                        </section>

                        <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">2. Product Information and Pricing</h2>
                            <ul className="list-disc pl-5 md:pl-6 space-y-2">
                                <li>We strive to provide accurate product descriptions, images, and pricing information. However, we do not guarantee the accuracy or completeness of such information.</li>
                                <li>Prices are subject to change without notice. Any promotions or discounts are valid for a limited time and may be subject to additional terms and conditions.</li>
                            </ul>
                        </section>

                        <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">3. Orders and Payments</h2>
                            <ul className="list-disc pl-5 md:pl-6 space-y-2">
                                <li>By placing an order on our website, you are making an offer to purchase the selected products.</li>
                                <li>We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.</li>
                                <li>You agree to provide valid and up-to-date payment information and authorize us to charge the total order amount, including applicable taxes, to your chosen payment method.</li>
                                <li>We use trusted third-party payment processors to handle your payment information securely. We do not store or have access to your full payment details.</li>
                            </ul>
                        </section>

                        <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">4. Shipping and Delivery</h2>
                            <ul className="list-disc pl-5 md:pl-6 space-y-2">
                                <li>We will make reasonable efforts to ensure timely shipping and delivery of your orders.</li>
                                <li>Shipping and delivery times provided are estimates and may vary based on your location and other factors.</li>
                            </ul>
                        </section>

                        <section className="bg-primary/10 p-6 md:p-8 rounded-2xl border border-primary/20">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">5. Returns and Refunds</h2>
                            <p>
                                Our Returns and Refund Policy governs the process and conditions for returning products and seeking refunds. Please refer to the policy provided on our website for more information.
                            </p>
                        </section>

                        <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">6. Intellectual Property</h2>
                            <ul className="list-disc pl-5 md:pl-6 space-y-2">
                                <li>All content and materials on our website, including but not limited to text, images, logos, and graphics, are protected by intellectual property rights and are the property of Vithanage Group or its licensors.</li>
                                <li>You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.</li>
                            </ul>
                        </section>

                        <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">7. Limitation of Liability</h2>
                            <ul className="list-disc pl-5 md:pl-6 space-y-2">
                                <li>In no event shall Vithanage Group, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or the purchase and use of our products.</li>
                                <li>We make no warranties or representations, express or implied, regarding the quality, accuracy, or suitability of the products offered on our website.</li>
                            </ul>
                        </section>

                        <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">8. Amendments and Termination</h2>
                            <p>
                                We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
