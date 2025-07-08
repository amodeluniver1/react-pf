
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, ShoppingCart, Plus, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

interface Producto {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria_id: string;
}

const imageMap: Record<string, string> = {
  'Tacos de tofu': 'https://www.pcrm.org/sites/default/files/tacos-de-tofu-8.jpg',
  'Ensalada de quinoa': 'https://danzadefogones.com/wp-content/uploads/2024/08/ensalada-de-quinoa-facil.jpg',
  'Jugo de mango y chía': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_EZCY3g8z3JT4n_oLpFPJS_ritr53P72Fw&s',
  'Brownie vegano': 'https://danzadefogones.com/wp-content/uploads/2020/01/Brownie-Vegano-5.jpg',
};

const Menu = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  const filteredItems = productos.map((item) => ({
    id: item._id,
    name: item.nombre,
    description: item.descripcion,
    image: imageMap[item.nombre] || '/images/default.jpg', 
    price: item.precio,
    isVegan: true,
    isGlutenFree: item.nombre.toLowerCase().includes("ensalada"), 
    rating: 5,
  }));


  const addToCart = (item: any) => {
    setCart([...cart, item]);
    console.log("Agregado al carrito:", item);
  };

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
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Carrito
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600">
                    {cart.length}
                  </Badge>
                )}
              </Button>
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
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=400&fit=crop"
              alt="Fresh vegetables background"
              className="w-full h-full object-cover opacity-30 rounded-lg"
            />
          </div>
          <div className="relative z-10 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestro Menú Vegano
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Descubre sabores únicos y nutritivos con ingredientes 100% vegetales
            </p>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </div>
                <CardDescription className="mb-4 text-gray-600">
                  {item.description}
                </CardDescription>

                <div className="flex items-center gap-2 mb-4">
                  {item.isVegan && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      🌱 Vegano
                    </Badge>
                  )}
                  {item.isGlutenFree && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Sin Gluten
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    S/.{item.price}
                  </span>
                  <Button
                    onClick={() => addToCart(item)}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-green-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="mb-6">Contáctanos para consultas especiales o recomendaciones personalizadas</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
            Contactar Chef
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
