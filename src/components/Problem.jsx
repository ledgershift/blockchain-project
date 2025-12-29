import React from 'react';
import { AlertCircle, Clock, DollarSign, Puzzle } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            title: 'Months to Launch',
            desc: 'Typical blockchain development cycles take 4-12 months, stalling your product roadmap.',
            icon: Clock,
            color: 'text-red-400',
        },
        {
            title: 'Unpredictable Costs',
            desc: 'Hourly rates and hidden infrastructure fees make budgeting follow a "black hole" model.',
            icon: DollarSign,
            color: 'text-orange-400',
        },
        {
            title: 'Complex Infrastructure',
            desc: 'Setting up Hyperledger Fabric correctly for production is a specialized, painful task.',
            icon: AlertCircle,
            color: 'text-yellow-400',
        },
        {
            title: 'Integration Nightmare',
            desc: 'Bridging blockchain data with your existing apps often requires custom middleware.',
            icon: Puzzle,
            color: 'text-purple-400',
        }
    ];

    return (
        <section id="problem" className="py-24 bg-[#05070a]">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Blockchain is hard. <br /><span className="text-gray-500">We make it plug-and-play.</span></h2>
                    <p className="text-gray-400 text-lg">Don't let technical hurdles stop your enterprise innovation. We've identified the main barriers to blockchain adoption.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((p, i) => (
                        <div key={i} className="glass-card p-8 border-transparent hover:border-white/10 transition-all group">
                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <p.icon className={`w-6 h-6 ${p.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
