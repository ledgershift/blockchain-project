import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: 'Why is the price fixed at $999?',
            a: 'We have optimized our delivery pipeline for Hyperledger Fabric. By using standardized infrastructure templates and pre-built adaptors, we can deliver high quality at a fraction of the usual enterprise cost.'
        },
        {
            q: 'Is this production-ready?',
            a: 'Yes. We deploy using industry-standard security policies, peer-to-peer encryption, and Docker/Kubernetes configurations suitable for production environments.'
        },
        {
            q: 'Can it scale later?',
            a: 'Absolutely. Hyperledger Fabric is designed for scale. You can add more organizations, peers, and ordering nodes as your network grows without rebuilding from scratch.'
        },
        {
            q: 'Can features be extended?',
            a: 'Yes. You receive the full source code for the chaincode and application adaptor. Your team (or ours) can extend the functionality at any time.'
        },
        {
            q: 'Which cloud platforms are supported?',
            a: 'We support AWS (EKS), Azure (AKS), Google Cloud (GKE), and standard Linux virtual machines.'
        },
        {
            q: 'Is Hyperledger Fabric secure?',
            a: 'Hyperledger Fabric is the industry standard for private, permissioned blockchains. It features robust identity management (MSP) and private data collections to ensure data only goes where it should.'
        }
    ];

    return (
        <section id="faq" className="py-24 bg-[#05070a]">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know about our blockchain bundle.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass-card overflow-hidden">
                            <button
                                className="w-full p-6 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="font-bold">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                            </button>
                            {openIndex === i && (
                                <div className="p-6 bg-[#0a0e17] border-t border-white/5">
                                    <p className="text-gray-400 leading-relaxed text-sm">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
