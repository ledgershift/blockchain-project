import React from 'react';
import { ShieldCheck, Cpu, Key, Zap, DollarSign, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        { title: 'Enterprise-Grade Architecture', icon: ShieldCheck, desc: 'Designed for production environments, not just prototypes.' },
        { title: 'Clean and Secure APIs', icon: Cpu, desc: 'Secure REST wrappers that make blockchain feel like a standard DB.' },
        { title: 'No Vendor Lock-in', icon: Key, desc: 'You control the code and the infrastructure. Move anywhere, anytime.' },
        { title: 'Fast Time-to-Market', icon: Rocket, desc: 'Go from zero to live in 7 days. Skip the months of research.' },
        { title: 'Startup-Friendly Pricing', icon: DollarSign, desc: 'Fixed $999 one-time cost. Perfect for MVPs and team pilots.' },
        { title: 'Real Production Usage', icon: Zap, desc: 'Built using best practices used by Fortune 500 companies.' },
    ];

    return (
        <section className="py-24 bg-[#05070a]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold font-heading mb-6 tracking-tight">Focus on Your Product, <br /><span className="text-blue-500">We Handle the Chain.</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We eliminate the complexity of blockchain engineering so your team can focus on the business logic that matters most.
                        </p>
                        <div className="space-y-4">
                            {['99.9% Infrastructure Reliability', 'Dedicated Technical Documentation', 'Handover and Integration Support'].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 text-gray-200">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-4">
                        {reasons.map((r, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all">
                                <r.icon className="w-6 h-6 text-blue-500 mb-4" />
                                <h3 className="font-bold mb-2">{r.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
