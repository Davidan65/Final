import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Pet = {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  price: number;
  image: string;
};

interface CheckoutPageProps {
  pets: Pet[];
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ pets }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = pets.find((p) => p.id === Number(id));
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  if (!pet) {
    return <div className="text-center p-8">Pet not found</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    switch (name) {
      case 'cardNumber':
        formattedValue = value.replace(/\D/g, '').slice(0, 16);
        break;
      case 'expiryDate':
        formattedValue = value.replace(/\D/g, '')
          .slice(0, 4)
          .replace(/^(\d{2})/, '$1/')
          .slice(0, 5);
        break;
      case 'cvv':
        formattedValue = value.replace(/\D/g, '').slice(0, 3);
        break;
      case 'phone':
        formattedValue = value.replace(/\D/g, '')
          .slice(0, 10)
          .replace(/^(\d{3})(\d{3})(\d{4}).*/, '($1) $2-$3');
        break;
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.cardNumber.length !== 16) {
      alert('Please enter a valid 16-digit card number');
      return;
    }
    
    if (!formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
      alert('Please enter a valid expiry date (MM/YY)');
      return;
    }
    
    if (formData.cvv.length !== 3) {
      alert('Please enter a valid 3-digit CVV');
      return;
    }

    // Here you would typically handle the checkout process
    console.log('Checkout data:', { pet, formData });
    
    // Show success message and redirect
    alert('Thank you for adopting ' + pet.name + '! We will contact you soon.');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Checkout for {pet.name}</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0 w-full">
          <div className="relative w-full sm:w-32 h-32 overflow-hidden">
            <img src={pet.image} alt={pet.name} className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" />
          </div>
          <div className="flex-1 sm:ml-8">
            <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
            <p className="font-semibold">{pet.breed}</p>
            <p className="text-gray-600">{pet.age}</p>
            <p className="text-lg font-bold mt-2">${pet.price}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
            />
          </div>
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 hover:border-gray-400 hover:shadow-md transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mt-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Complete Adoption (${pet.price})
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};