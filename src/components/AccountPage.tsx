import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Package, Heart, Clock, MapPin, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../store/AuthContext';
import { Card, CardBody } from './ui/Card';
import Button from './ui/Button';

const AccountPage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">My Account</h1>
              <p className="text-gray-400">Welcome back, {user?.name}</p>
            </div>
            <Button
              variant="outline"
              leftIcon={<LogOut size={16} />}
              onClick={logout}
            >
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Orders */}
            <Card>
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-blue-500 mr-2" />
                    <h2 className="text-lg font-semibold text-white">My Orders</h2>
                  </div>
                  <Link to="/orders" className="text-blue-500 hover:text-blue-400 text-sm">
                    View All
                  </Link>
                </div>
                <div className="text-center py-8 text-gray-400">
                  <p>No orders yet</p>
                </div>
              </CardBody>
            </Card>

            {/* Wishlist */}
            <Card>
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-blue-500 mr-2" />
                    <h2 className="text-lg font-semibold text-white">Wishlist</h2>
                  </div>
                  <Link to="/wishlist" className="text-blue-500 hover:text-blue-400 text-sm">
                    View All
                  </Link>
                </div>
                <div className="text-center py-8 text-gray-400">
                  <p>Your wishlist is empty</p>
                </div>
              </CardBody>
            </Card>

            {/* Recently Viewed */}
            <Card>
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <h2 className="text-lg font-semibold text-white">Recently Viewed</h2>
                  </div>
                </div>
                <div className="text-center py-8 text-gray-400">
                  <p>No recently viewed items</p>
                </div>
              </CardBody>
            </Card>

            {/* Addresses */}
            <Card>
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                    <h2 className="text-lg font-semibold text-white">Addresses</h2>
                  </div>
                  <Link to="/addresses" className="text-blue-500 hover:text-blue-400 text-sm">
                    Manage
                  </Link>
                </div>
                <div className="text-center py-8 text-gray-400">
                  <p>No addresses saved</p>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Account Settings */}
          <Card className="mt-8">
            <CardBody>
              <div className="flex items-center mb-6">
                <Settings className="h-5 w-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-white">Account Settings</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user?.name}
                    readOnly
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  />
                </div>

                <div className="pt-4">
                  <Button variant="outline">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;