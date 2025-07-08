import { Link } from "react-router-dom";
import { Leaf, Heart, Users, Award, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">Vegan Bites</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/menu">
              <Button variant="outline" size="sm">Menú</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="sm">Contacto</Button>
            </Link>
            <Link to="/login">
              <Button size="sm">Iniciar Sesión</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1200&h=400&fit=crop" 
              alt="Vegan food ingredients"
              className="w-full h-full object-cover opacity-30 rounded-lg"
            />
          </div>
          <div className="relative z-10 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Descubre la pasión detrás de cada plato vegano que preparamos con amor
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">¿Quiénes Somos?</h2>
            <p className="text-gray-700 leading-relaxed">
              Vegan Bites nació en 2020 con una misión simple pero poderosa: demostrar que la comida vegana puede ser deliciosa, nutritiva y satisfactoria. Fundado por un equipo de chefs apasionados y defensores del medio ambiente, hemos creado un espacio donde la sostenibilidad se encuentra con el sabor excepcional.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cada plato que servimos cuenta una historia de ingredientes cuidadosamente seleccionados, técnicas culinarias innovadoras y un profundo respeto por nuestro planeta. Creemos que la comida vegana no es solo una elección dietética, sino un estilo de vida que beneficia tanto a nuestra salud como al medio ambiente.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop" 
              alt="Natural environment"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Pasión</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Cada plato está preparado con amor y dedicación para brindarte la mejor experiencia culinaria vegana.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Sostenibilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprometidos con prácticas eco-amigables y ingredientes locales para cuidar nuestro planeta.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Comunidad</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Construimos una comunidad de personas que comparten nuestra visión de un mundo más saludable.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Calidad</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Solo utilizamos ingredientes de la más alta calidad para garantizar sabores excepcionales.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=300&h=300&fit=crop&crop=face" 
                  alt="Chef Principal"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>María González</CardTitle>
                <CardDescription>Chef Principal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Con 15 años de experiencia en cocina vegana, María lidera nuestro equipo culinario con creatividad e innovación.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop&crop=face" 
                  alt="Nutricionista"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Dr. Carlos Ruiz</CardTitle>
                <CardDescription>Nutricionista</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Especialista en nutrición vegana, Carlos asegura que todos nuestros platos sean balanceados y nutritivos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=300&h=300&fit=crop&crop=face" 
                  alt="Gerente"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Ana Martínez</CardTitle>
                <CardDescription>Gerente General</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ana coordina todas nuestras operaciones para asegurar que cada cliente tenga una experiencia excepcional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">¿Listo para probar nuestros sabores?</h2>
          <p className="mb-6">Ven y descubre por qué somos la opción vegana favorita de la ciudad</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                Ver Menú
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;