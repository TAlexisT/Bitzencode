// app/quienes_somos/page.tsx
import Link from "next/link";
export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-50 rounded-full opacity-50 blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Quiénes somos
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              En <span className="text-blue-600 font-semibold">Bitzencode</span>{" "}
              somos un equipo apasionado por la tecnología. Nos dedicamos a
              crear soluciones digitales a medida, combinando diseños modernos,
              rendimiento y escalabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="md:px-16 bg-transparent">
        <div className="container mx-auto max-w-5xl px-4 sm:px-2 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Misión */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full opacity-80"></div>
              <div className="lg:text-left flex flex-col">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-blue-600 text-2xl">🎯</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                  Misión
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  Desarrollar software innovador que impulse el crecimiento
                  digital de nuestros clientes y transforme sus ideas en
                  productos reales.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full opacity-80"></div>
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-green-600 text-2xl">💎</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Valores
                </h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Innovación
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Transparencia
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Compromiso
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Trabajo en equipo
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Calidad técnica
                  </li>
                </ul>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-500 rounded-full opacity-80"></div>
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-purple-600 text-2xl">🚀</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Visión
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ser reconocidos como una de las principales empresas de
                  desarrollo de software en América Latina, destacando por
                  calidad e innovación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de equipo (opcional) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Contáctanos y convirtamos tus ideas en realidad digital.
          </p>
          <Link href="/contacto">
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Iniciar Proyecto
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
