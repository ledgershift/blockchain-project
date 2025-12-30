import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
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
                            Terms of <span className="gradient-text">Service</span>
                        </h1>

                        <div className="space-y-12 text-gray-400 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing and using Ledger Shift's services, you agree to be bound by these Terms of Service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                                <p>
                                    We provide a fixed-price Hyperledger Fabric blockchain bundle for $999. The service includes infrastructure setup, chaincode development, and API integration as described in our project solution.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Delivery Timeline</h2>
                                <p>
                                    The 14-day delivery guarantee begins once all project requirements and access permissions are provided by the client. Delays in client feedback or access may affect this timeline.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Code Ownership</h2>
                                <p>
                                    You have full access to the codebase and infrastructure we build for you. There is no vendor lock-in; you are free to migrate the infrastructure to any cloud provider at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                                <p>
                                    Ledger Shift is not liable for any direct, indirect, or consequential damages resulting from the use of the blockchain infrastructure once delivered and signed off.
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

export default Terms;
