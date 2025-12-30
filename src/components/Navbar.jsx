import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobMenuOpen, setMobMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Solutions', href: '#solution' },
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'Use Cases', href: '#use-cases' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0e17]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3">
                    <img src="./logo.png" alt="Ledger Shift Logo" className="w-10 h-10 rounded-lg object-contain" />
                    <span className="text-xl font-bold font-heading tracking-tight text-white">Ledger Shift</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={`./${link.href}`} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                            {link.name}
                        </a>
                    ))}
                    <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobMenuOpen(!mobMenuOpen)}>
                    {mobMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0e17] border-b border-white/10 flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={`./${link.href}`} className="text-gray-400 hover:text-white pb-2" onClick={() => setMobMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold w-full">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
