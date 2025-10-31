import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Línea superior - Soluciones digitales */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Soluciones digitales
            </h1>
            {/* Línea media - a tu medida */}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              a tu medida
            </h2>
          </div>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-100 mb-12 font-bold max-w-2xl mx-auto leading-relaxed">
            Desarrollamos software personalizado para desarrollar tu negocio.
          </p>

          {/* Botón CTA */}
          <Link href="/contacto">
            <button className="group relative bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer">
              CONTACTANOS
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            </button>
          </Link>
        </div>

        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Sección "Transformamos ideas" - Diseño Moderno */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
        {/* Elementos decorativos geométricos modernos */}
        <div className="absolute inset-0 -z-0">
         

          {/* Líneas de conexión sutiles */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent opacity-30"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
            {/* Contenido de texto - Izquierda */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Título principal con gradiente */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Transformamos ideas en soluciones digitales reales
              </h2>

              {/* Descripción */}
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  En{" "}
                  <span className="text-blue-600 font-semibold">
                    Bitzencode
                  </span>
                  , no solo desarrollamos software, creamos herramientas
                  tecnológicas que impulsan tu crecimiento.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
                  Ya sea que necesites una página web, una app personalizada o
                  una integración avanzada, nuestro equipo está listo para
                  ayudarte.
                </p>
              </div>
            </div>

            {/* SVG Personalizado - Derecha */}
            <div className="lg:w-1/2 w-full relative">
              {/* Contenedor del SVG con efecto glassmorphism */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Efecto de brillo */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-950 to-blue-950 opacity-10 rounded-3xl blur-sm"></div>

                <div className="relative">
                  <svg
                    viewBox="0 0 600 400"
                    className="w-full h-auto rounded-2xl transform hover:scale-[1.02] transition duration-500"
                  >
                    {/* Fondo gradiente */}
                    <defs>
                    

                      <linearGradient
                        id="ideaGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>

                      <linearGradient
                        id="codeGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>

                    {/* Fondo */}
                    <rect
                      width="600"
                      height="400"
                      fill="url(#bgGradient)"
                      rx="20"
                    />

                    {/* Lado izquierdo: Idea (cerebro/luz) */}
                    <g transform="translate(100, 120)">
                      {/* Círculo de fondo para la idea */}
                      <circle
                        cx="0"
                        cy="0"
                        r="60"
                        fill="url(#ideaGradient)"
                        opacity="0.1"
                      />

                      {/* Bombillo/idea */}
                      <path
                        d="M -30 -40 Q 0 -60 30 -40 Q 40 -20 30 0 Q 20 20 0 30 Q -20 20 -30 0 Q -40 -20 -30 -40 Z"
                        fill="url(#ideaGradient)"
                        opacity="0.8"
                      />

                      {/* Luz que emana */}
                      <path
                        d="M -20 30 Q 0 50 20 30 Q 30 60 15 80 Q 0 70 -15 80 Q -30 60 -20 30 Z"
                        fill="url(#ideaGradient)"
                        opacity="0.3"
                      />

                      {/* Rayos de luz */}
                      <g
                        stroke="url(#ideaGradient)"
                        strokeWidth="2"
                        opacity="0.5"
                      >
                        <line x1="0" y1="40" x2="-40" y2="60" />
                        <line x1="0" y1="40" x2="0" y2="70" />
                        <line x1="0" y1="40" x2="40" y2="60" />
                      </g>

                      {/* Puntos de ideas */}
                      <g fill="#3b82f6" opacity="0.6">
                        <circle cx="-50" cy="-30" r="3" />
                        <circle cx="-60" cy="10" r="2" />
                        <circle cx="50" cy="-20" r="4" />
                        <circle cx="40" cy="20" r="3" />
                      </g>
                    </g>

                    {/* Línea de transformación (conexión) */}
                    <g
                      stroke="url(#ideaGradient)"
                      strokeWidth="3"
                      opacity="0.7"
                    >
                      <path
                        d="M 200 200 C 250 150 350 150 400 200"
                        fill="none"
                        strokeDasharray="8,4"
                      />

                      {/* Puntos móviles en la línea */}
                      <circle cx="250" cy="160" r="4" fill="#8b5cf6">
                        <animate
                          attributeName="cx"
                          from="200"
                          to="400"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="350" cy="160" r="3" fill="#3b82f6">
                        <animate
                          attributeName="cx"
                          from="400"
                          to="200"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>

                    {/* Lado derecho: Código/Solución */}
                    <g transform="translate(400, 120)">
                      {/* Círculo de fondo para el código */}
                      <circle
                        cx="0"
                        cy="0"
                        r="60"
                        fill="url(#codeGradient)"
                        opacity="0.1"
                      />

                      {/* Ventana de código */}
                      <rect
                        x="-50"
                        y="-40"
                        width="100"
                        height="80"
                        rx="10"
                        fill="white"
                        stroke="url(#codeGradient)"
                        strokeWidth="2"
                      />

                      {/* Barra de título */}
                      <rect
                        x="-50"
                        y="-40"
                        width="100"
                        height="15"
                        rx="10"
                        fill="url(#codeGradient)"
                        opacity="0.8"
                      />

                      {/* Botones de ventana */}
                      <g fill="white" opacity="0.8">
                        <circle cx="-35" cy="-33" r="3" />
                        <circle cx="-25" cy="-33" r="3" />
                        <circle cx="-15" cy="-33" r="3" />
                      </g>

                      {/* Líneas de código */}
                      <g fill="#1f2937" fontFamily="monospace" fontSize="6">
                        <text x="-45" y="-20">
                          &lt;div className="solution"&gt;
                        </text>
                        <text x="-40" y="-10">
                          {" "}
                          &lt;Innovation /&gt;
                        </text>
                        <text x="-40" y="0">
                          {" "}
                          &lt;Technology /&gt;
                        </text>
                        <text x="-40" y="10">
                          {" "}
                          &lt;Results /&gt;
                        </text>
                        <text x="-45" y="20">
                          &lt;/div&gt;
                        </text>
                      </g>

                      {/* Efecto de brillo en el código */}
                      <rect
                        x="-50"
                        y="-25"
                        width="100"
                        height="50"
                        rx="10"
                        fill="url(#codeGradient)"
                        opacity="0.05"
                      />
                    </g>

                    {/* Flecha de transformación */}
                    <g transform="translate(300, 200)">
                      <path
                        d="M -10 -5 L 0 5 L 10 -5 Z"
                        fill="url(#ideaGradient)"
                      />
                    </g>

                    {/* Texto descriptivo */}
                    <g
                      fontFamily="sans-serif"
                      textAnchor="middle"
                      fill="#374151"
                    >
                      <text x="150" y="250" fontSize="18" fontWeight="bold">
                        Idea Creativa
                      </text>
                      <text x="450" y="250" fontSize="18" fontWeight="bold">
                        Solución Digital
                      </text>
                      <text x="300" y="280" fontSize="14" fill="#6b7280">
                        Proceso de Transformación
                      </text>
                    </g>
                  </svg>

                  {/* Elementos decorativos flotantes alrededor del SVG */}
                  <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section className="py-16 md:py-20 bg-gray-200 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-green-100 rounded-full opacity-20 blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Servicios
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos un amplio catálogo de{" "}
              <span className="text-blue-500 font-semibold transform hover:scale-105 transition duration-300 cursor-pointer inline-block">
                servicios
              </span>{" "}
              adaptados a las necesidades de cada negocio, aplicando las
              tecnologías más modernas para garantizar resultados sólidos,
              seguros y escalables.
            </p>
          </div>

          {/* Línea divisoria decorativa */}
          <div className="flex justify-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Servicios en grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 max-w-8xl mx-auto">
            {/* Servicio 1 - Desarrollo web y móvil */}
            <div className="bg-white rounded-2xl p-8 shadow-blue-200 shadow-lg hover:shadow-lg transition-all duration-300 border border-blue-100 hover:shadow-blue-500 group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Desarrollo web y móvil personalizado
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Aplicaciones web modernas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Apps nativas e híbridas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Progressive Web Apps
                  </li>
                </ul>
              </div>
            </div>

            {/* Servicio 2 - Mantenimiento */}
            <div className="bg-white rounded-2xl p-8 shadow-green-200 shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:shadow-green-500 group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Mantenimiento y soporte
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Soporte técnico 24/7
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Actualizaciones de seguridad
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Monitoreo continuo
                  </li>
                </ul>
              </div>
            </div>

            {/* Servicio 3 - Consultoría */}
            <div className="bg-white rounded-2xl p-8 shadow-purple-200 shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:shadow-purple-500 group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Consultoría tecnológica
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Arquitectura de software
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Estrategias digitales
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Optimización de procesos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Línea divisoria final */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
          </div>

          {/* Botón CTA */}
          <div className="text-center">
            <Link href="/servicios">
              <button className="group bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden cursor-pointer">
                <span className="relative z-10 flex items-center justify-center">
                  Conoce más
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Portafolio CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl"></div>

          {/* Patrón de puntos */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Título principal */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
              ¿Quieres ver lo que somos capaces de hacer?
            </h2>

            {/* Descripción */}
            <div className="space-y-6 mb-12">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Explora nuestro{" "}
                <span className="text-blue-400 font-semibold relative inline-block transform hover:scale-105 transition duration-300 cursor-pointer">
                  Portafolio
                </span>{" "}
                y descubre cómo hemos ayudado a otras marcas a crecer
                digitalmente.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Si tienes una idea o proyecto en mente, no esperes más.{" "}
                <span className="text-green-400 font-semibold relative inline-block transform hover:scale-105 transition duration-300 cursor-pointer">
                  contáctanos
                </span>{" "}
                y empecemos a construir juntos algo extraordinario.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/proyectos">
                {/* Botón Portafolio */}
                <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden w-full sm:w-auto cursor-pointer">
                  <span className="relative z-10 flex items-center justify-center">
                    Ver Portafolio
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </Link>

              {/* Botón Contactar */}
              <Link href="/contacto">
                <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto cursor-pointer">
                  <span className="flex items-center justify-center">
                    Contactar Ahora
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* Elemento decorativo inferior */}
            <div className="mt-16 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-10 right-10 w-6 h-6 bg-gray-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 bg-gray-400 rounded-full opacity-50 animate-pulse delay-500"></div>
      </section>

      {/* Sección Clientes y Testimonios */}
      <section className="py-20 md:py-28 bg-gray-200 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-50 rounded-full opacity-30 blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Clientes
            </h2>
            <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-900 mb-8">
              Confía en <span className="text-blue-500">Bitzencode</span>
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              En Bitzencode, trabajamos junto a empresas que buscan transformar
              sus procesos mediante soluciones digitales innovadoras. Nuestra
              prioridad es crear relaciones duraderas basadas en confianza,
              calidad y resultados reales.
            </p>
          </div>

          {/* Línea divisoria */}
          <div className="flex justify-center mb-16">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Testimonios en grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Testimonio 1 - Carlos Rivas */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
              {/* Elemento decorativo */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-purple-500 rounded-full opacity-20"></div>

              <div className="relative z-10">
                {/* Cita */}
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-gray-400 opacity-30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                    "El equipo de Bitzencode destaca por su compromiso y
                    profesionalismo. Entregaron el proyecto antes de lo previsto
                    y con una calidad técnica impecable."
                  </p>
                </div>

                {/* Información del cliente */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      Carlos Rivas
                    </h4>
                    <div className="flex items-center mt-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600 font-semibold">
                        Emprendedor
                      </span>
                    </div>
                  </div>
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 text-black bg-white rounded-full flex items-center justify-center border border-gray-200 font-bold text-lg">
                    CR
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 - Luis Peña */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
              {/* Elemento decorativo */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-yellow-500 rounded-full opacity-20"></div>

              <div className="relative z-10">
                {/* Cita */}
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-gray-400 opacity-30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                    "Trabajar con Bitzencode fue la mejor decisión para
                    digitalizar mi empresa. Captaron nuestra visión desde el
                    primer día y transformaron nuestras ideas en una plataforma
                    robusta y funcional."
                  </p>
                </div>

                {/* Información del cliente */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      Luis Peña
                    </h4>
                    <div className="flex items-center mt-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-600 font-semibold">
                        Empresario
                      </span>
                    </div>
                  </div>
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 text-black bg-white rounded-full flex items-center justify-center border border-gray-200 font-bold text-lg">
                    LP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </section>
    </main>
  );
}
