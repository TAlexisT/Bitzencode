// app/proyectos/page.tsx
"use client";

import { useState } from "react";

export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProyecto, setSelectedProyecto] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const proyectos = [
    {
      id: 1,
      nombre: "Plataforma Web de Servicios Locales (LocalyMX)",
      categoria: "web",
      tecnologias: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "React",
      ],
      descripcion:
        "Localy es una plataforma web que conecta negocios locales con usuarios, permitiendo la visibilidad, gestión y promoción de productos y servicios en su comunidad.",
      descripcionCompleta: "LocalyMX es una solución integral diseñada para potenciar el comercio local. La plataforma permite a los negocios crear perfiles detallados, promocionar sus servicios. Los usuarios pueden descubrir negocios cercanos y leer reseñas. Incluye panel de administración analytics avanzado.",
      caracteristicas: [
        "Perfiles personalizados para negocios",
        "Panel de administración intuitivo",
        "Sistema de reseñas y calificaciones",
        "Geolocalización y mapas interactivos",
        "Creación de multiples perfiles de usuario"
      ],
      imagen: "/images/Localy.png",
      url: "#",
      destacado: true,
    },
    {
      id: 2,
      nombre: "App Móvil Delivery",
      categoria: "movil",
      tecnologias: ["React Native", "Firebase", "Redux", "Google Maps API"],
      descripcion:
        "Aplicación de delivery con seguimiento en tiempo real, notificaciones push y sistema de calificaciones.",
      descripcionCompleta: "Aplicación móvil completa para servicio de delivery con seguimiento en tiempo real, múltiples métodos de pago y sistema de gestión para repartidores.",
      caracteristicas: [
        "Seguimiento GPS en tiempo real",
        "Múltiples métodos de pago",
        "Chat integrado con soporte",
        "Sistema de propinas",
        "Historial de pedidos"
      ],
      imagen: "/images/proyectos/delivery.jpg",
      url: "#",
      destacado: true,
    },
    {
      id: 3,
      nombre: "App Móvil Delivery",
      categoria: "movil",
      tecnologias: ["React Native", "Firebase", "Redux", "Google Maps API"],
      descripcion:
        "Aplicación de delivery con seguimiento en tiempo real, notificaciones push y sistema de calificaciones.",
      descripcionCompleta: "Aplicación móvil completa para servicio de delivery con seguimiento en tiempo real, múltiples métodos de pago y sistema de gestión para repartidores.",
      caracteristicas: [
        "Seguimiento GPS en tiempo real",
        "Múltiples métodos de pago",
        "Chat integrado con soporte",
        "Sistema de propinas",
        "Historial de pedidos"
      ],
      imagen: "/images/proyectos/delivery.jpg",
      url: "#",
      destacado: true,
    },
    {
      id: 4,
      nombre: "App Móvil Delivery",
      categoria: "movil",
      tecnologias: ["React Native", "Firebase", "Redux", "Google Maps API"],
      descripcion:
        "Aplicación de delivery con seguimiento en tiempo real, notificaciones push y sistema de calificaciones.",
      descripcionCompleta: "Aplicación móvil completa para servicio de delivery con seguimiento en tiempo real, múltiples métodos de pago y sistema de gestión para repartidores.",
      caracteristicas: [
        "Seguimiento GPS en tiempo real",
        "Múltiples métodos de pago",
        "Chat integrado con soporte",
        "Sistema de propinas",
        "Historial de pedidos"
      ],
      imagen: "/images/proyectos/delivery.jpg",
      url: "#",
      destacado: true,
    },
    {
      id: 5,
      nombre: "App Móvil Delivery",
      categoria: "movil",
      tecnologias: ["React Native", "Firebase", "Redux", "Google Maps API"],
      descripcion:
        "Aplicación de delivery con seguimiento en tiempo real, notificaciones push y sistema de calificaciones.",
      descripcionCompleta: "Aplicación móvil completa para servicio de delivery con seguimiento en tiempo real, múltiples métodos de pago y sistema de gestión para repartidores.",
      caracteristicas: [
        "Seguimiento GPS en tiempo real",
        "Múltiples métodos de pago",
        "Chat integrado con soporte",
        "Sistema de propinas",
        "Historial de pedidos"
      ],
      imagen: "/images/proyectos/delivery.jpg",
      url: "#",
      destacado: true,
    },
    // ... resto de proyectos con descripcionCompleta y caracteristicas
  ];

  const categorias = [
    { id: "todos", nombre: "Todos los Proyectos" },
    { id: "web", nombre: "Desarrollo Web" },
    { id: "movil", nombre: "Apps Móviles" },
  ];

  const proyectosFiltrados =
    activeFilter === "todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === activeFilter);

  const openModal = (proyecto: any) => {
    setSelectedProyecto(proyecto);
    setShowModal(true);
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProyecto(null);
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Modal de Detalles del Proyecto */}
      {showModal && selectedProyecto && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del Modal */}
            <div className="relative">
              {/* Imagen del proyecto */}
              <div className="h-64 bg-gradient-to-br from-blue-800 to-purple-800 relative overflow-hidden">
                {selectedProyecto.imagen ? (
                  <img
                    src={selectedProyecto.imagen}
                    alt={selectedProyecto.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Botón cerrar */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 transform hover:scale-110"
                >
                  ✕
                </button>

                {/* Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {selectedProyecto.destacado && (
                    <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Destacado
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                    selectedProyecto.categoria === "web" ? "bg-blue-600" : "bg-green-600"
                  }`}>
                    {selectedProyecto.categoria === "web" ? "🌐 Web" : "📱 Móvil"}
                  </span>
                </div>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className="p-8">
              {/* Título */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProyecto.nombre}
              </h2>

              {/* Descripción Completa */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Descripción del Proyecto</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProyecto.descripcionCompleta || selectedProyecto.descripcion}
                </p>
              </div>

              {/* Características */}
              {selectedProyecto.caracteristicas && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Características Principales</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProyecto.caracteristicas.map((caracteristica: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tecnologías */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnologías Utilizadas</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProyecto.tecnologias.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bgwhite text-gray-900 border border-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                
                <button 
                  onClick={closeModal}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-gray-900 mb-6">
              Portafolio
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-8">
              Proyectos que{" "}
              <span className="text-blue-600 font-semibold">
                marcan la diferencia
              </span>
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Cada proyecto que desarrollamos representa una solución única
              pensada para resolver un reto real. Aquí te mostramos algunos de
              los productos digitales que hemos construido junto a nuestros
              clientes: funcionales, escalables y hechos a medida.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setActiveFilter(categoria.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === categoria.id
                    ? "bg-gradient-to-r from-black to-purple-700 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto) => (
              <div
                key={proyecto.id}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group ${
                  proyecto.destacado ? "shadow-blue-400 shadow-base" : ""
                }`}
              >
                
                {/* Imagen del proyecto */}
                <div className="h-48 bg-gradient-to-br from-blue-800 to-purple-800 relative overflow-hidden">
                  {proyecto.imagen ? (
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                  <div className="absolute top-4 right-4">
                    {proyecto.destacado && (
                      <span className="bg-gray-200 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        ⭐ Destacado
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                        proyecto.categoria === "web"
                          ? "bg-blue-600"
                          : "bg-green-600"
                      }`}
                    >
                      {proyecto.categoria === "web" ? "🌐 Web" : "📱 Móvil"}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {proyecto.nombre}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {proyecto.descripcion}
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Tecnologías:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => openModal(proyecto)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-3xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                    >
                      Ver Detalles
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-950 to-blue-950">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Te gusta lo que ves?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Trabajemos juntos en tu próximo proyecto. Contáctanos y hagamos
            realidad tu idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Iniciar Proyecto
            </a>
            <a
              href="/servicios"
              className="border-2 border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                25+
              </div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                18
              </div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                3
              </div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                15+
              </div>
              <div className="text-gray-600">Tecnologías Dominadas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}