import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, MapPin, Clock, Truck, Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Delivery = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  
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
              <Button variant="outline" size="sm">
                Volver al Carrito
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <Truck className="h-8 w-8 mr-3 text-green-600" />
              Información de Entrega
            </h1>
            <p className="text-gray-600">Completa los datos para tu pedido</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Delivery Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Método de Entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="flex items-center">
                        <Truck className="h-4 w-4 mr-2" />
                        Delivery a domicilio - $3.99
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Recoger en tienda - Gratis
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Address Form */}
              {deliveryMethod === "delivery" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Dirección de Entrega</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Tu apellido" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" placeholder="Calle y número" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Ciudad" />
                      </div>
                      <div>
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" placeholder="Estado" />
                      </div>
                      <div>
                        <Label htmlFor="zip">Código Postal</Label>
                        <Input id="zip" placeholder="12345" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="instructions">Instrucciones especiales</Label>
                      <Textarea id="instructions" placeholder="Apartamento, timbre, referencias..." />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Método de Pago</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup defaultValue="card">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Tarjeta de crédito/débito
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="cardNumber">Número de tarjeta</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Vencimiento</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                      <Input id="cardName" placeholder="Nombre completo" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Buddha Bowl Supremo x2</span>
                      <span>$31.98</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Burger Vegana Deluxe x1</span>
                      <span>$12.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Smoothie Verde Power x1</span>
                      <span>$8.99</span>
                    </div>
                  </div>
                  
                  <hr />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$53.96</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Envío</span>
                      <span>{deliveryMethod === "delivery" ? "$3.99" : "Gratis"}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Descuento</span>
                      <span>-$2.50</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-green-600">
                        ${deliveryMethod === "delivery" ? "55.45" : "51.46"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Check className="h-4 w-4 mr-2" />
                      Confirmar Pedido
                    </Button>
                  </div>

                  <div className="text-center pt-4">
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Tiempo estimado: 30-45 min
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
