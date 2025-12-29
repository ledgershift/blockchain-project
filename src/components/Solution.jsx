import React from 'react';
import { Check, Cpu, Globe, Link, Lock, Zap } from 'lucide-react';

const Solution = () => {
    const features = [
        { title: 'Hyperledger Fabric Setup', desc: 'Production-ready network deployment with peer and orderer nodes.', icon: Cpu },
        { title: 'Custom Chaincode', desc: 'Smart contracts written in Go or Node.js tailored to your business logic.', icon: Lock },
        { title: 'Blockchain Adaptor (REST)', desc: 'Secure API bridge to connect your app using standard HTTP requests.', icon: Zap },
        { title: 'Secure Architecture', desc: 'Enterprise-grade security policies and identity management setup.', icon: Globe },
        { title: 'Plug-and-Play Integration', desc: 'Ready-to-use SDKs and documentation for any frontend or backend.', icon: Link },
    ];

    return (
        <section id="solution" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            The $999 Bundle
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                            A Complete Blockchain Solution <br />
                            <span className="gradient-text">Delivered in 7 Days</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            We provide everything you need to start using blockchain in production. No hidden costs, no recurring fees, and no vendor lock-in.
                        </p>

                        <div className="space-y-4">
                            {['Fixed price of $999', 'Guaranteed 7-day delivery', 'Full Access to Codebase', 'Scalable architecture'].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-blue-400" />
                                    </div>
                                    <span className="text-gray-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className={`p-6 glass-card hover:bg-white/10 transition-colors ${i === 0 ? 'sm:col-span-2' : ''}`}>
                                <f.icon className="w-8 h-8 text-blue-500 mb-4" />
                                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
