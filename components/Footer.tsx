
import React from 'react';
import { content } from '../content/content';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons';

const socialIcons: { [key: string]: React.ReactNode } = {
    Facebook: <FacebookIcon className="w-6 h-6" />,
    Twitter: <TwitterIcon className="w-6 h-6" />,
    Instagram: <InstagramIcon className="w-6 h-6" />,
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Column 1: Logo and Description */}
                    <div className="md:col-span-2">
                        <a href="#" className="text-3xl font-bold text-white tracking-wider">
                            {content.footer.logo}
                        </a>
                        <p className="mt-4 text-gray-400 max-w-xs">
                           {content.footer.description}
                        </p>
                    </div>

                    {/* Column 2: Company Links */}
                    <div>
                        <h3 className="text-white font-semibold tracking-wider">Company</h3>
                        <ul className="mt-4 space-y-2">
                            {content.footer.links.company.map(link => (
                                <li key={link.text}>
                                    <a href={link.href} className="text-gray-400 hover:text-lime-400 transition-colors">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div>
                        <h3 className="text-white font-semibold tracking-wider">Follow Us</h3>
                        <div className="mt-4 flex space-x-4">
                             {content.footer.links.social.map(social => (
                                <a key={social.name} href={social.href} className="text-gray-400 hover:text-lime-400 transition-colors" aria-label={social.name}>
                                    {socialIcons[social.name]}
                                </a>
                             ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>{content.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
