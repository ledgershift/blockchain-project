import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ConsultationForm = () => {
    const [submitted, setSubmitted] = useState(false);

    // INSTRUCTIONS FOR USER: 
    // 1. Create a Google Form with fields: Name, Email, Compnay, Project Details.
    // 2. Click "Send" -> "Link" icon -> Copy URL.
    // 3. Open that URL in a new tab, right-click -> View Page Source.
    // 4. Search for "entry." to find the IDs (e.g., entry.123456789).
    // 5. Replace the action URL and the entry IDs below.

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfukXl9wBSUU3CvYh4rySADL4wVH1Vli2s9OJZcmM-EtirJgA/formResponse";
    const ENTRY_NAME = "entry.904092888";
    const ENTRY_EMAIL = "entry.932890804";
    const ENTRY_COMPANY = "entry.244002906";
    const ENTRY_DETAILS = "entry.1103277909";


    const handleSubmit = () => {
        // We use a small delay before switching to the success state.
        // This ensures the browser has time to initiate the POST request
        // before React removes the form from the DOM.
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };


    return (
        <section id="consultation" className="py-24 bg-[#0a0e17] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto glass-card p-8 md:p-16 border-white/5">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold font-heading mb-6 tracking-tight">
                                Start Your <span className="gradient-text">14-Day Journey</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Share your project vision with us. Our experts will review your requirements and get back to you within 12 hours with a deployment plan.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Fixed Delivery', desc: 'Guaranteed 14-day timeline from kickoff.' },
                                    { title: 'Expert Review', desc: 'CTO-level direct consultation on your use case.' },
                                    { title: 'Zero Risk', desc: 'No commitment required for the initial discovery.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-blue-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                                    <p className="text-gray-400">Our team is reviewing your project. Talk to you soon.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 text-blue-500 hover:text-blue-400 font-semibold underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    action={GOOGLE_FORM_ACTION_URL}
                                    method="POST"
                                    target="hidden_iframe"
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name={ENTRY_NAME}
                                                placeholder="John Doe"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-blue-500/50 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Work Email</label>
                                            <input
                                                type="email"
                                                name={ENTRY_EMAIL}
                                                placeholder="john@company.com"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-blue-500/50 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Company / Startup Name</label>
                                        <input
                                            type="text"
                                            name={ENTRY_COMPANY}
                                            placeholder="Tech Solutions Inc."
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-blue-500/50 focus:outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Project Details & Requirements</label>
                                        <textarea
                                            name={ENTRY_DETAILS}
                                            rows="4"
                                            placeholder="Tell us about your use case (e.g., Supply Chain, FinTech)..."
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-blue-500/50 focus:outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                                    >
                                        <span>Send Proposal</span>
                                        <Send className="w-4 h-4" />
                                    </button>

                                    <p className="text-[10px] text-center text-gray-600 uppercase tracking-tighter mt-4">
                                        By submitting, you agree to our privacy policy and data handling.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden Iframe to prevent page reload on form submit */}
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
        </section>
    );
};

export default ConsultationForm;
