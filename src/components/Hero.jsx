import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8"
                    >
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Enterprise Blockchain Bundle</span>
                        <span className="w-1 h-1 bg-blue-500 rounded-full" />
                        <span className="text-blue-200/60 text-xs">14-Day Delivery</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
                    >
                        Enterprise-Ready <br />
                        <span className="gradient-text">Blockchain in 14 Days</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        We design, deploy, and connect Hyperledger Fabric blockchain so your team can focus on building products — not blockchain infrastructure. All for a fixed <span className="text-white font-semibold">$999</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transition-all shadow-lg shadow-blue-500/25">
                            Get Blockchain in 14 Days
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a href="#consultation" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transition-all">
                            Request Free Consultation
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60"
                    >
                        {[
                            { label: 'Zero Recurring Fees', icon: Shield },
                            { label: 'Production Ready', icon: CheckCircle2 },
                            { label: 'Cloud Agnostic', icon: Shield },
                            { label: 'REST API Access', icon: CheckCircle2 },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <item.icon className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-semibold uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
