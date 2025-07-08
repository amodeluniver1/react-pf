import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, ShoppingCart, Users, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Bowl Buddha Energético",
      description: "Quinoa, aguacate, espinacas, garbanzos y tahini",
      price: 45000,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      category: "Bowls"
    },
    {
      id: 2,
      name: "Hamburguesa de Lentejas",
      description: "Pan integral, hamburguesa de lentejas, verduras frescas",
      price: 38000,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      category: "Hamburguesas"
    },
    {
      id: 3,
      name: "Smoothie Verde Detox",
      description: "Espinacas, plátano, mango, jengibre y leche de coco",
      price: 25000,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop",
      category: "Bebidas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Vegan Bites</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-green-700 hover:text-green-900 font-medium">Inicio</Link>
              <Link to="/menu" className="text-gray-600 hover:text-green-700">Menú</Link>
              <Link to="/about" className="text-gray-600 hover:text-green-700">Nosotros</Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-700">Contacto</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative p-2 text-gray-600 hover:text-green-700">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-green-600 text-white rounded-full text-xs flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-green-600 hover:bg-green-700">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Comida Vegana
            <span className="block text-green-200">Deliciosa y Saludable</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Descubre sabores únicos con ingredientes 100% naturales y orgánicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 text-lg px-8 py-3">
                Ver Menú
              </Button>
            </Link>
            <Link to="/delivery">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-3">
                Pedir Delivery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Vegan Bites?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprometidos con tu salud, el medio ambiente y el bienestar animal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">100% Vegano</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Todos nuestros productos están libres de ingredientes de origen animal
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Delivery Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Entrega en 30-45 minutos en toda la ciudad
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Ingredientes Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seleccionamos los mejores ingredientes orgánicos y locales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platos Destacados
            </h2>
            <p className="text-xl text-gray-600">
              Los favoritos de nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-green-800">{product.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                        {product.category}
                      </Badge>
                    </div>
                    <span className="text-2xl font-bold text-green-600">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Ver Todo el Menú
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para una experiencia vegana increíble?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Únete a miles de personas que han elegido una alimentación más saludable y sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
                <Users className="h-5 w-5 mr-2" />
                Crear Cuenta
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                <MapPin className="h-5 w-5 mr-2" />
                Ubicación
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">Vegan Bites</span>
              </div>
              <p className="text-gray-400">
                Comida vegana deliciosa y saludable, directo a tu mesa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/menu" className="hover:text-white">Menú</Link></li>
                <li><Link to="/about" className="hover:text-white">Nosotros</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contacto</Link></li>
                <li><Link to="/delivery" className="hover:text-white">Delivery</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Cuenta</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/login" className="hover:text-white">Iniciar Sesión</Link></li>
                <li><Link to="/register" className="hover:text-white">Registrarse</Link></li>
                <li><Link to="/profile" className="hover:text-white">Mi Perfil</Link></li>
                <li><Link to="/orders" className="hover:text-white">Mis Pedidos</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +57 300 123 4567</p>
                <p>📧 info@veganbites.com</p>
                <p>📍 Calle 123 #45-67, Bogotá</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vegan Bites. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;