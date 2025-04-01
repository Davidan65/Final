import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export const CartCheckoutPage: React.FC = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Here you would typically handle the payment process
    alert('Thank you for your purchase! Total amount: $' + total.toFixed(2));
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-4">Add some items to your cart to get started!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        {items.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b last:border-b-0 gap-4 sm:gap-0">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1 sm:mb-0">{item.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">${item.price.toFixed(2)} each</p>
            </div>
            
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 1;
                    updateQuantity(item.id, value);
                  }}
                  className="w-20 px-2 py-1 border rounded-lg text-center text-sm sm:text-base"
                />
              </div>
              
              <div className="text-right flex-1 sm:flex-none">
                <p className="font-semibold text-base sm:text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 text-sm sm:text-base w-full sm:w-auto"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg sm:text-xl font-bold">Total:</span>
            <span className="text-xl sm:text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-end items-stretch gap-4 w-full sm:w-auto min-w-[200px]">
            <button
              onClick={() => navigate('/pet-food')}
              className="flex-1 sm:flex-none px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base order-2 sm:order-1"
            >
              Continue Shopping
            </button>
            <button
              onClick={handleCheckout}
              className="flex-1 sm:flex-none px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base order-1 sm:order-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};