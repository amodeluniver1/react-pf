import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  ShoppingBag, 
  DollarSign,
  TrendingUp,
  Package,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AdminDashboard () {
  // Mock data para el dashboard
  const [products] = useState([
    {
      id: 1,
      name: "Buddha Bowl Supremo",
      price: 15.99,
      category: "Bowls",
      stock: 25,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop",
      status: "active"
    },
    {
      id: 2,
      name: "Burger Vegana Deluxe",
      price: 12.99,
      category: "Burgers",
      stock: 15,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop",
      status: "active"
    },
    {
      id: 3,
      name: "Smoothie Verde Power",
      price: 8.99,
      category: "Bebidas",
      stock: 0,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=100&h=100&fit=crop",
      status: "inactive"
    }
  ]);

  const recentOrders = [
    {
      id: "#001",
      customer: "María García",
      items: 3,
      total: 42.97,
      status: "completed",
      date: "2024-01-15"
    },
    {
      id: "#002",
      customer: "Carlos López",
      items: 2,
      total: 28.98,
      status: "pending",
      date: "2024-01-15"
    },
    {
      id: "#003",
      customer: "Ana Rodríguez",
      items: 1,
      total: 15.99,
      status: "processing",
      date: "2024-01-14"
    }
  ];

  const stats = [
    {
      title: "Ventas Totales",
      value: "$2,450.00",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Pedidos",
      value: "156",
      change: "+8.2%",
      icon: ShoppingBag,
      color: "text-blue-600"
    },
    {
      title: "Productos",
      value: "24",
      change: "+2",
      icon: Package,
      color: "text-purple-600"
    },
    {
      title: "Clientes",
      value: "89",
      change: "+15.3%",
      icon: Users,
      color: "text-orange-600"
    }
  ];

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
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Administrador
            </Badge>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Panel de Administración
          </h1>
          <p className="text-gray-600">
            Gestiona tu restaurante vegano desde aquí
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Products Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Gestión de Productos</CardTitle>
                  <CardDescription>
                    Administra tu menú vegano
                  </CardDescription>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 p-3 rounded-lg border">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-500">
                        ${product.price} • Stock: {product.stock}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={product.status === 'active' ? 'default' : 'secondary'}
                        className={product.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {product.status === 'active' ? 'Activo' : 'Inactivo'}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Pedidos Recientes</CardTitle>
              <CardDescription>
                Últimas órdenes de clientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium text-gray-900">{order.id}</h4>
                      <p className="text-sm text-gray-500">{order.customer}</p>
                      <p className="text-xs text-gray-400">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${order.total}</p>
                      <p className="text-sm text-gray-500">{order.items} items</p>
                      <Badge 
                        variant={
                          order.status === 'completed' ? 'default' :
                          order.status === 'processing' ? 'secondary' : 'outline'
                        }
                        className={
                          order.status === 'completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {order.status === 'completed' ? 'Completado' :
                         order.status === 'processing' ? 'Procesando' : 'Pendiente'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
              <CardDescription>
                Funciones administrativas principales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col">
                  <Package className="h-6 w-6 mb-2" />
                  Inventario
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  Clientes
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Settings className="h-6 w-6 mb-2" />
                  Configuración
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
