import React from 'react';
import { 
  User, 
  Package, 
  CreditCard, 
  Heart, 
  Settings, 
  Home, 
  Grid, 
  ChevronRight, 
  LogOut 
} from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardContent 
} from '@/components/ui/card';
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const AccountPage = () => {
  const user = {
    name: "",
    email: "",
    phone: "",
    avatar: "/api/placeholder/150/150"
  };

  const orders = [
    {
      id: "ORD-2024-001",
      date: "Jan 28, 2025",
      status: "Delivered",
      total: "129.99",
      items: 3
    },
    {
      id: "ORD-2024-002",
      date: "Jan 15, 2025",
      status: "In Transit",
      total: "85.50",
      items: 2
    }
  ];

  const wishlist = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "79.99",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "199.99",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Profile Section */}
      <Card className="rounded-none border-b">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-500">{user.phone}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <Package className="h-6 w-6 mb-2" />
              <span className="text-xs">Orders</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <Heart className="h-6 w-6 mb-2" />
              <span className="text-xs">Wishlist</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <Settings className="h-6 w-6 mb-2" />
              <span className="text-xs">Settings</span>
            </Button>
          </div>

          {/* Recent Orders */}
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {orders.map(order => (
                  <div key={order.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                      <p className="text-sm text-gray-500">{order.items} items · {order.total}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm mr-2">{order.status}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Wishlist Preview */}
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold">Wishlist</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {wishlist.map(item => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                    <Button variant="outline" size="sm">Add to Cart</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>

      {/* Bottom Navigation */}
      <div className="border-t bg-white">
        <div className="flex justify-around p-2">
          <Button variant="ghost" className="flex flex-col items-center">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <Grid className="h-5 w-5" />
            <span className="text-xs">Categories</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <User className="h-5 w-5" />
            <span className="text-xs">Account</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;