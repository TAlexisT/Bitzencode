// components/Header.tsx
"use client"; // Necesario para interactividad
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black to-gray-900 shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          {/* Logo - Izquierda */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image
                  src="/icons/BitLogo.svg"
                  alt="Bitzencode Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white leading-tight">
                  BITZENCODE
                </h1>
              </div>
            </div>
          </Link>

          {/* Navigation - Centrada */}
          <nav className="hidden lg:flex space-x-8 mx-8">
            <Link
              href="/quienes_somos"
              className="text-white hover:text-blue-100 font-medium text-sm transition duration-200 relative group transform hover:-translate-y-0.5"
              onClick={() => setIsMenuOpen(false)}
            >
              NOSOTROS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/servicios"
              className="text-white hover:text-blue-100 font-medium text-sm transition duration-200 relative group transform hover:-translate-y-0.5"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICIOS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/proyectos"
              className="text-white hover:text-blue-100 font-medium text-sm transition duration-200 relative group transform hover:-translate-y-0.5"
              onClick={() => setIsMenuOpen(false)}
            >
              PROYECTOS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </nav>

          {/* CTA Button - Derecha */}
          <div className="flex items-center space-x-4">
            <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
              <button className="group cursor-pointer hidden md:block bg-gradient-to-r from-blue-700 to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-500 overflow-hidden relative">
                {/* Efecto de overlay azul que se desliza */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <span className="relative z-10">Cotizar Proyecto</span>
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-gray-600 transition duration-200 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-600 transition duration-200 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-600 transition duration-200 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-gray-950 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                href="/quienes_somos"
                className="bg-gradient-to-r hover:from-gray-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 text-white text-sm font-medium py-2 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                NOSOTROS
              </Link>
              <Link
                href="/servicios"
                className="bg-gradient-to-r hover:from-gray-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 text-white text-sm font-medium py-2 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICIOS
              </Link>
              <Link
                href="/proyectos"
                className="bg-gradient-to-r hover:from-gray-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 text-white text-sm font-medium py-2 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                PROYECTOS
              </Link>
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-gradient-to-r from-black to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:from-black hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 mt-4 cursor-pointer">
                  Cotizar Proyecto
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}