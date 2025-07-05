
import React, { useState, useEffect } from 'react';
import { content } from '../content/content';
import { MenuIcon, CloseIcon } from './icons';
import Button from './Button';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = content.nav.links.map(link => (
        <a key={link.text} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
            {link.text}
        </a>
    ));

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-white tracking-wider">
                        {content.nav.logo}
                    </a>
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks}
                    </div>
                    <div className="hidden lg:block">
                        <Button variant="primary">{content.nav.cta}</Button>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-lg`}>
                <div className="flex flex-col items-center space-y-6 py-8">
                    {navLinks}
                    <Button variant="primary">{content.nav.cta}</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
