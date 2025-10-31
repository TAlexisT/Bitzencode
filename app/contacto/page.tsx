// app/contacto/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Efecto para bloquear/desbloquear el scroll
  useEffect(() => {
    if (showModal) {
      // Bloquear scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Desbloquear scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ nombre: "", email: "", mensaje: "" });
        setModalMessage("¡Mensaje enviado! Te contactaremos pronto.");
        setIsSuccess(true);
      } else {
        setModalMessage("Error al enviar el mensaje. Intenta nuevamente.");
        setIsSuccess(false);
      }
    } catch (error) {
      setModalMessage("Error al enviar el mensaje. Intenta nuevamente.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Modal Personalizado */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto shadow-xl transform transition-all">
            <div className="text-center">
              {/* Ícono */}
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                isSuccess ? "bg-green-100" : "bg-red-100"
              }`}>
                {isSuccess ? (
                  <span className="text-green-600 text-2xl">✓</span>
                ) : (
                  <span className="text-red-600 text-2xl">⚠</span>
                )}
              </div>
              
              {/* Mensaje */}
              <h3 className={`text-xl font-bold mb-2 ${
                isSuccess ? "text-green-800" : "text-red-800"
              }`}>
                {isSuccess ? "¡Éxito!" : "Error"}
              </h3>
              <p className="text-gray-600 mb-6">{modalMessage}</p>
              
              {/* Botón */}
              <button
                onClick={closeModal}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transform hover:scale-95 transition duration-300 cursor-pointer ${
                  isSuccess 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-black hover:to-blue-700" 
                    : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                }`}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-40 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contacto
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Si tienes alguna duda o consulta, no dudes en contactarnos.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  ¿Listo para llevar tu proyecto al siguiente nivel?
                </h2>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  En{" "}
                  <span className="text-blue-600 font-semibold">
                    Bitzencode
                  </span>
                  , convertimos ideas en soluciones tecnológicas reales.
                </p>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Ya sea que tengas una necesidad puntual o una visión a largo
                  plazo, estamos listos para ayudarte.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  <span className="text-green-600 font-semibold">
                    Contáctanos
                  </span>{" "}
                  hoy mismo y construyamos juntos tu próximo gran desarrollo.
                </p>
              </div>

              {/* Información de Contacto */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Email</h4>
                      <a
                        href="mailto:bitzencode@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition"
                      >
                        bitzencodemx@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-green-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Teléfono</h4>
                      <a
                        href="tel:+526800000000"
                        className="text-gray-600 hover:text-gray-700 transition"
                      >
                        +52 68 000 0000
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                {/* Botón Enviar */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                >
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}