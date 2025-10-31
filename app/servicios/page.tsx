// app/servicios/page.tsx
"use client";

import { useState } from "react";

export default function Servicios() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const servicios = [
    {
      id: 1,
      icon: "💻",
      title: "Desarrollo web personalizado",
      description:
        "Creamos sitios y plataformas web totalmente adaptadas a las necesidades de tu negocio. Desde landing pages hasta sistemas complejos, diseñamos soluciones funcionales, seguras y escalables con tecnologías modernas.",
      features: [
        "Responsive Design",
        "Tecnologías Modernas",
        "SEO Optimizado",
        "Alta Seguridad",
      ],
    },
    {
      id: 2,
      icon: "📱",
      title: "Aplicaciones móviles",
      description:
        "Desarrollamos apps nativas e híbridas para iOS y Android, enfocadas en la experiencia del usuario y el rendimiento. Ideal para empresas que quieren acercarse a sus clientes a través de dispositivos móviles.",
      features: [
        "iOS & Android",
        "UX/UI Excellence",
        "Alto Rendimiento",
        "App Stores",
      ],
    },
    {
      id: 3,
      icon: "🔧",
      title: "Mantenimiento y soporte",
      description:
        "Aseguramos el correcto funcionamiento de tus sistemas con servicios continuos de mantenimiento, actualizaciones, monitoreo y soporte técnico. Nos encargamos de los detalles para que tú te enfoques en crecer.",
      features: [
        "Monitoreo 24/7",
        "Actualizaciones",
        "Soporte Técnico",
        "Backups",
      ],
    },
    {
      id: 4,
      icon: "☁️",
      title: "Integraciones con APIs / Cloud",
      description:
        "Conectamos tus sistemas con plataformas externas a través de APIs seguras y eficientes. Automatiza procesos, centraliza información y aprovecha la potencia del entorno cloud para escalar tu negocio sin complicaciones.",
      features: [
        "APIs Seguras",
        "Cloud Computing",
        "Automatización",
        "Escalabilidad",
      ],
    },
    {
      id: 5,
      icon: "🎯",
      title: "Consultoría tecnológica",
      description:
        "Te asesoramos en la elección, planificación e implementación de soluciones digitales. Ya sea que estés iniciando un proyecto o necesites optimizar tus procesos actuales, te guiamos con visión estratégica y técnica.",
      features: [
        "Estrategia Digital",
        "Planificación",
        "Optimización",
        "Mentoría",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-10 md:py-18 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-900 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Servicios
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-8">
              Al alcance de tus manos,{" "}
              <span className="text-blue-600 font-semibold">sencillo</span>,{" "}
              <span className="text-green-600 font-semibold">rápido</span> y{" "}
              <span className="text-purple-600 font-semibold">seguro</span>.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {servicios.map((servicio, index) => (
              <div
                key={servicio.id}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden
  before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-600/10 before:to-purple-400/10 before:opacity-0 before:transition-opacity before:duration-300
  hover:before:opacity-100 hover:shadow-lg hover:shadow-blue-200
`}
              >
                {/* Icono y título */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl hover:shadow-lg shadow-blue-400 ">
                    {servicio.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 flex-1">
                    {servicio.title}
                  </h3>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {servicio.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {servicio.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos llevar tu negocio al
            siguiente nivel con nuestras soluciones tecnológicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white py-3 px-8 rounded-full font-semibold  transition-all duration-300 transform hover:scale-105"
            >
              Solicitar cotización
            </a>
            <a
              href="/proyectos"
              className="border-2 border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Combinamos expertise técnico con comprensión empresarial para
              ofrecer soluciones que realmente importan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Desarrollo Rápido
              </h3>
              <p className="text-gray-600">
                Entregamos soluciones en tiempo récord sin comprometer la
                calidad.
              </p>
            </div>

            <div className="text-center transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Máxima Seguridad
              </h3>
              <p className="text-gray-600">
                Implementamos las mejores prácticas de seguridad en cada
                proyecto.
              </p>
            </div>

            <div className="text-center transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Escalabilidad
              </h3>
              <p className="text-gray-600">
                Tus sistemas crecerán junto con tu negocio sin problemas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
