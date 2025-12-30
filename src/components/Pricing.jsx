import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const inclusions = [
        'Hyperledger Fabric Deployment',
        'Custom Chaincode Development',
        'REST API Adaptor Service',
        'Application Integration Support',
        'Docker & AWS EKS Setup',
        'Technical Documentation',
        'Zero Recurring Fees',
        'Full Code Access'
    ];

    return (
        <section id="pricing" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400 text-lg">No subscriptions. No hourly billing. No surprises. Just enterprise-ready blockchain in 14 days.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 md:p-12 glass-card border-blue-500/20 glow-primary">
                        {/* Best Value Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                            MOST POPULAR
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Blockchain Core Bundle</h3>
                                <p className="text-gray-400 mb-8">Everything you need to launch a production-ready network.</p>

                                <div className="flex items-baseline mb-8">
                                    <span className="text-5xl font-bold">$999</span>
                                    <span className="text-gray-500 ml-2">/ one-time</span>
                                </div>

                                <Link to="/#consultation" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl font-bold text-lg mb-4 transition-all">
                                    Get Started Now
                                </Link>
                                <p className="text-center text-gray-500 text-sm">Delivery in 14 business days</p>
                            </div>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                                <h4 className="font-bold mb-6 flex items-center">
                                    <span className="text-blue-500 mr-2">What's included:</span>
                                </h4>
                                <ul className="space-y-4">
                                    {inclusions.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3 text-sm">
                                            <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-gray-500">
                        <p>Need a custom enterprise solution? <Link to="/#consultation" className="text-blue-400 hover:underline">Contact us for custom quotes.</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
