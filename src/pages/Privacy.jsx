import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0e17] text-white">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-12 tracking-tight">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>

                        <div className="space-y-12 text-gray-400 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
                                <p>
                                    We collect information when you contact us through our consultation form. This includes your name, email, company name, and project details. We use this data solely to respond to your inquiry.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
                                <p>
                                    Your information is used to provide you with the blockchain services you request. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                                <p>
                                    We implement a variety of security measures to maintain the safety of your personal information. Your project details and code are stored on secure enterprise environments.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
                                <p>
                                    We may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
                                <p>
                                    If there are any questions regarding this privacy policy, you may contact us using our consultation form.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
