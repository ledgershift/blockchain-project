import React from 'react';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <img src="./logo.png" alt="Ledger Shift Logo" className="w-10 h-10 rounded-lg object-contain" />
                            <span className="text-xl font-bold font-heading tracking-tight">Ledger Shift</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                            Enterprise-grade Hyperledger Fabric solutions delivered in 14 days. We simplify blockchain so you can build the future of decentralization.
                        </p>

                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/ledger-shift" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Solutions</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#solution" className="hover:text-white transition-colors">Blockchain Bundle</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Custom Chaincode</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">API Integration</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cloud Deployment</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><a href="./#faq" className="hover:text-white transition-colors">Support FAQ</a></li>

                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:row-span-1 md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>© 2025 Ledger Shift Solutions. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Built for high-performance enterprise applications.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
