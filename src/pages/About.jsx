import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0e17] text-white">
            <Helmet>
                <title>About Ledger Shift | Our Mission and Blockchain Expertise</title>
                <meta name="description" content="Learn about Ledger Shift's mission to democratize enterprise blockchain with 14-day Hyperledger Fabric deployments on AWS." />
                <link rel="canonical" href="https://ledgershift.github.io/blockchain-project/#/about" />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                            The Speed of <span className="gradient-text">Ledger Shift</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We believe enterprise blockchain shouldn't take years to deploy. We've optimized the delivery of Hyperledger Fabric to help businesses innovate at the speed of thought.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mb-32">
                        <div className="glass-card p-10">
                            <Target className="w-12 h-12 text-blue-500 mb-6" />
                            <h2 className="text-3xl font-bold mb-4 font-heading">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Our mission is to democratize high-end enterprise blockchain technology. By providing a fixed-price, fixed-timeline bundle, we remove the technical and financial uncertainty that often kills blockchain projects before they start.
                            </p>
                        </div>
                        <div className="glass-card p-10">
                            <Users className="w-12 h-12 text-blue-500 mb-6" />
                            <h2 className="text-3xl font-bold mb-4 font-heading">The Team</h2>
                            <p className="text-gray-400 leading-relaxed">
                                We are a lean team of Hyperledger Fabric experts, cloud architects, and full-stack developers. We operate with zero bloat, allowing us to focus entirely on your deployment architecture.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-16">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-24 h-24 rounded-2xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                                <Zap className="w-10 h-10 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Why 14 Days?</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Traditional consultancies spend weeks in discovery "meetings." We use a pre-engineered delivery pipeline. Once we have your use case, our infrastructure templates and smart contract libraries allow us to stand up a production network in record time.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-24 h-24 rounded-2xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="w-10 h-10 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Enterprise Grade</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Speed doesn't mean cutting corners. Every Ledger Shift deployment follows industry-best practices for security, identity management (MSP), and high-availability orderer nodes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
