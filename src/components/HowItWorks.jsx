import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Share Your Use Case',
            desc: 'Tell us about your business logic and requirements during a quick consultation.',
        },
        {
            number: '02',
            title: 'We Build & Deploy',
            desc: 'Our experts set up the Hyperledger Fabric infrastructure and develop your chaincode in 7 days.',
        },
        {
            number: '03',
            title: 'Integrate & Go Live',
            desc: 'Use our secure REST APIs to connect your application and launch your blockchain solution.',
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-[#05070a]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">From Idea to Output in <span className="text-blue-500">one week.</span></h2>
                    <p className="text-gray-400 text-lg">Our streamlined process ensures you get a production-ready blockchain without the usual delays.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector lines (Desktop) */}
                    <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold mb-8 glow-primary shadow-blue-600/50 transform hover:scale-105 transition-transform">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xs">{step.desc}</p>
                            {i < 2 && <ArrowRight className="md:hidden mt-8 text-blue-500/50" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
