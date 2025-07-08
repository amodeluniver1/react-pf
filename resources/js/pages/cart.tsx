import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Minus, Plus, Trash2, ShoppingBag, CreditCard, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Cart = () => {
  const navigate = useNavigate();
  
  // Carrito con productos de ejemplo
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Buddha Bowl Supremo",
      price: 15.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop",
      category: "Bowls"
    },
    {
      id: 2,
      name: "Burger Vegana Deluxe",
      price: 12.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop",
      category: "Burgers"
    },
    {
      id: 3,
      name: "Smoothie Verde Power",
      price: 8.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=100&h=100&fit=crop",
      category: "Bebidas"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 3.99;
  const discount = 2.50; // Descuento por ser cliente frecuente
  const total = subtotal + deliveryFee - discount;

  const handleProceedToCheckout = () => {
    navigate('/delivery');
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
            <Link to="/menu">
              <Button variant="outline" size="sm">
                Seguir Comprando
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm">Iniciar Sesión</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header con imagen de fondo */}
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=200&fit=crop" 
                alt="Shopping cart background"
                className="w-full h-full object-cover opacity-20 rounded-lg"
              />
            </div>
            <div className="relative z-10 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 mr-3 text-green-600" />
                Tu Carrito de Compras
              </h1>
              <p className="text-gray-600">Revisa tus productos antes de continuar</p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&h=150&fit=crop" 
                  alt="Empty cart"
                  className="w-32 h-24 mx-auto object-cover rounded-lg mb-4 opacity-60"
                />
                <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h2 className="text-xl font-semibold text-gray-600 mb-2">
                  Tu carrito está vacío
                </h2>
                <p className="text-gray-500 mb-6">
                  Agrega algunos deliciosos platillos veganos
                </p>
                <Link to="/menu">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Explorar Menú
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShoppingBag className="h-5 w-5 mr-2 text-green-600" />
                      Productos ({cartItems.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-2">
                              {item.category}
                            </Badge>
                            <p className="text-green-600 font-bold text-lg">S/.{item.price}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2 border rounded-lg p-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-3 text-right">
                          <span className="text-lg font-bold text-gray-900">
                            Subtotal: S/.{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                {/* Delivery Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="h-5 w-5 mr-2 text-green-600" />
                      Información de Entrega
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Tiempo estimado:</span>
                        <span className="font-medium">30-45 min</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Zona de entrega:</span>
                        <Badge className="bg-green-100 text-green-800">Disponible</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                      Resumen del Pedido
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>S/.{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Envío</span>
                      <span>S/.{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Descuento</span>
                      <span>-S/.{discount.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-green-600">S/.{total.toFixed(2)}</span>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={handleProceedToCheckout}
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Proceder al Pago
                      </Button>
                      <Link to="/menu" className="block">
                        <Button variant="outline" className="w-full">
                          Seguir Comprando
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Promo Code */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Código de descuento</label>
                      <div className="flex space-x-2">
                        <Input placeholder="VEGANO20" />
                        <Button variant="outline">Aplicar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
