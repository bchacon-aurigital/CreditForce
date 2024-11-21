import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-t from-[#e2dfdfef] to-transparent pt-20 lg:pb-8 flex justify-center">
      <div className="w-full lg:max-w-[75%] md:px-6 lg:px-8 lg:my-10">
        <div className="bg-white rounded-3xl shadow-xl py-8">
          <div className="px-8 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-gray-900 font-semibold mb-6">Productos</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-600 hover:text-[#DE492A]">Origin</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#DE492A]">Core</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#DE492A]">Collect</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Store</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Check</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Legal</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold mb-6">Sobre Nosotros</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Nuestra Historia</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Nuestros Expertos</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Testimoniales</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Implementaciones</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold mb-6">Contáctenos</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 text-[#DE492A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span className="text-gray-600">+(506) 4001-4370</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 text-[#DE492A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span className="text-gray-600">soluciones@credit-force.com</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 text-[#DE492A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="text-gray-600">San José, Costa Rica</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 text-[#DE492A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="text-gray-600">Ciudad de Panamá, Panamá</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-4 mt-6">
                    <a href="https://www.linkedin.com/company/sistemascreditforce/" className="text-[#DE492A]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/solucionescreditforce" className="text-[#DE492A]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
