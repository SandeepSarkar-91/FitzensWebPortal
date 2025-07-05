
import React from 'react';
import { content } from '../content/content';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900/50 border-t border-gray-800">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center text-center">
                    <a href="#" className="text-3xl font-bold text-white tracking-wider">
                        {content.footer.logo}
                    </a>
                    <p className="mt-2 text-sm text-gray-400">{content.footer.description}</p>
                    <p className="mt-8 text-xs text-gray-500">{content.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
