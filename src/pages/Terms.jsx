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
                                    By accessing and using Ledger Shift's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
                                <p>
                                    Ledger Shift provides enterprise blockchain deployment services, specifically focusing on Hyperledger Fabric on AWS. The "14-Day Bundle" refers to the deployment of a standard production-ready network as defined in our service agreements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                                <p>
                                    All custom chaincode and integration logic developed for your specific deployment will be handed over to you with full access. Ledger Shift retains the rights to its pre-built infrastructure templates and internal libraries.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                                <p>
                                    Our standard bundle is priced at $999. Payment terms are defined in individual service proposals, typically requiring an upfront commencement fee.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                                <p>
                                    Ledger Shift is not liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the blockchain network once deployed.
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
