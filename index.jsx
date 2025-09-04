import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LandingPage() {
  useEffect(() => {
    // Crear script de bootstrap
    const script = document.createElement("script");
    script.src =
      "https://casinobsas.my.site.com/ESWCasinoBAAgentforce1757016226568/assets/js/bootstrap.min.js";
    script.type = "text/javascript";
    script.onload = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "es_MX";
        window.embeddedservice_bootstrap.init(
          "00D8c000004fIEw",
          "Casino_BA_Agentforce",
          "https://casinobsas.my.site.com/ESWCasinoBAAgentforce1757016226568",
          {
            scrt2URL: "https://casinobsas.my.salesforce-scrt.com",
          }
        );
      } catch (err) {
        console.error("Error loading Embedded Messaging: ", err);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Casino Buenos Aires</h1>
        <nav className="space-x-6">
          <a href="#casino" className="hover:text-yellow-400">
            Casino
          </a>
          <a href="#slots" className="hover:text-yellow-400">
            Slots
          </a>
          <a href="#live" className="hover:text-yellow-400">
            Casino en Vivo
          </a>
          <a href="#promos" className="hover:text-yellow-400">
            Promociones
          </a>
        </nav>
        <div className="space-x-4">
          <Button variant="secondary">Ingresar</Button>
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
            Registrarse
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6 bg-[url('/casino-bg.jpg')] bg-cover bg-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          ¡Viví la emoción del casino online!
        </motion.h2>
        <p className="text-lg max-w-2xl mb-8">
          Descubrí la mejor experiencia de casino online en Argentina con
          cientos de juegos, slots y casino en vivo.
        </p>
        <Button
          size="lg"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg px-8 py-6 rounded-2xl"
        >
          Registrate y jugá ahora
        </Button>
      </section>

      {/* Juegos destacados */}
      <section id="slots" className="py-20 px-8 bg-gray-950">
        <h3 className="text-3xl font-bold mb-10 text-center">Juegos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Slot Aventura", "Ruleta en Vivo", "Blackjack Premium"].map(
            (juego, idx) => (
              <Card key={idx} className="bg-gray-800 rounded-2xl shadow-lg">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-full h-40 bg-gray-700 rounded-xl mb-4"></div>
                  <h4 className="text-xl font-semibold mb-2">{juego}</h4>
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium">
                    Jugar ahora
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Promociones */}
      <section id="promos" className="py-20 px-8 bg-gray-900">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Promociones Exclusivas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-yellow-500 text-black rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h4 className="text-2xl font-bold mb-4">
                Bono de Bienvenida 100%
              </h4>
              <p className="mb-4">
                Duplicá tu primer depósito y empezá a jugar con el doble de
                fichas.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">
                Aprovechar
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h4 className="text-2xl font-bold mb-4">
                Tiradas Gratis Semanales
              </h4>
              <p className="mb-4">
                Accedé a giros gratis todas las semanas en tus slots favoritas.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
                Activar
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center border-t border-gray-800">
        <p className="text-gray-400 mb-2">
          © 2025 Casino Buenos Aires. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-sm">
          El juego compulsivo es perjudicial para la salud. Jugar con
          responsabilidad. +18
        </p>
      </footer>
    </div>
  );
}
