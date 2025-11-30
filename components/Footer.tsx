import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 relative">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
            {/* Column 1: Logo & Info */}
            <div className="lg:col-span-2">
                <img 
                    src="https://xtrecy.com/wp-content/uploads/2024/01/Xtrecy-Grey-logo.png" 
                    alt="Xtrecy" 
                    className="w-48 mb-6 opacity-80 hover:opacity-100 transition-opacity"
                />
                <ul className="space-y-3 text-gray-500 text-sm">
                    <li className="flex items-center gap-3 hover:text-primary transition-colors">
                        <i className="fas fa-building w-5 text-primary/70"></i>
                        COLOR HUT Headquarter
                    </li>
                    <li className="flex items-center gap-3 hover:text-primary transition-colors">
                        <i className="fas fa-map-marker-alt w-5 text-primary/70"></i>
                        House No. 14, Road No. A, Block A, Sontek, South Kajla, Jatrabari, Dhaka - 1236
                    </li>
                    <li className="flex items-center gap-3 hover:text-primary transition-colors">
                        <i className="fas fa-phone-alt w-5 text-primary/70"></i>
                        +8801919-760626
                    </li>
                    <li className="flex items-center gap-3 hover:text-primary transition-colors">
                        <i className="fas fa-envelope w-5 text-primary/70"></i>
                        colorhut.official@gmail.com
                    </li>
                </ul>
            </div>

            {/* Column 2: Company */}
            <div>
                <h6 className="font-bold text-dark mb-6">Company</h6>
                <ul className="space-y-3 text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Service</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Career</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Investor</a></li>
                </ul>
            </div>

            {/* Column 3: Products */}
            <div>
                <h6 className="font-bold text-dark mb-6">Products</h6>
                <ul className="space-y-3 text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors">Customer Database</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Data Analytics</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Cyber Security</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">E-Commerce</a></li>
                </ul>
            </div>

            {/* Column 4: Support */}
            <div>
                <h6 className="font-bold text-dark mb-6">Support</h6>
                <ul className="space-y-3 text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors">Customer Service</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Knowledge Base</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Accessibilty</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 COLOR HUT . All rights reserved</p>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/colorhutbd" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/colorhutofficial" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@colorhutofficial" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/@ColorHutOfficial" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};
