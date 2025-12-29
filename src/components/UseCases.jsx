import React from 'react';
import { Truck, CreditCard, HeartPulse, Coins, UserCheck, Search } from 'lucide-react';

const UseCases = () => {
    const cases = [
        { title: 'Supply Chain Tracking', icon: Truck, desc: 'Real-time visibility and provenance for global logistics.' },
        { title: 'FinTech & Payments', icon: CreditCard, desc: 'Instant settlement and transparent transaction ledgers.' },
        { title: 'Healthcare Data', icon: HeartPulse, desc: 'Secure, interoperable patient records and audit trails.' },
        { title: 'Asset Tokenization', icon: Coins, desc: 'Digitize and trade real-world assets with fractional trading.' },
        { title: 'Identity & KYC', icon: UserCheck, desc: 'Immutable identity verification and compliance management.' },
        { title: 'Enterprise Audit', icon: Search, desc: 'Unalterable logs for compliance and regulatory reporting.' },
    ];

    return (
        <section id="use-cases" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Built for Every Industry</h2>
                    <p className="text-gray-400">Our Hyperledger Fabric bundle is versatile enough to power any enterprise-grade blockchain application.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="glass-card p-8 group hover:bg-white/10 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <c.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
