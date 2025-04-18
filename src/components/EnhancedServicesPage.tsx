import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

export const EnhancedServicesPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string>('');
    const [formData, setFormData] = useState({
        petId: '',
        startDate: '',
        endDate: '',
        requirements: '',
        specialNeeds: '',
        location: '',
    });

    const handleServiceSelect = (service: string) => {
        setSelectedService(service);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Implementation for submitting service request
            console.log('Service request submitted:', { service: selectedService, ...formData });
        } catch (error) {
            console.error('Error submitting service request:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Enhanced Pet Services</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Selection */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Select a Service</h2>
                    <div className="space-y-4">
                        <button
                            onClick={() => handleServiceSelect('sitting')}
                            className={`w-full p-4 rounded-lg ${
                                selectedService === 'sitting' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            }`}
                        >
                            Pet Sitting
                        </button>
                        <button
                            onClick={() => handleServiceSelect('daycare')}
                            className={`w-full p-4 rounded-lg ${
                                selectedService === 'daycare' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            }`}
                        >
                            Pet Daycare
                        </button>
                        <button
                            onClick={() => handleServiceSelect('emergency')}
                            className={`w-full p-4 rounded-lg ${
                                selectedService === 'emergency' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            }`}
                        >
                            Emergency Services
                        </button>
                    </div>
                </div>

                {/* Service Form */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Service Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pet ID</label>
                            <input
                                type="text"
                                value={formData.petId}
                                onChange={(e) => setFormData({ ...formData, petId: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        {selectedService === 'sitting' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                    <input
                                        type="date"
                                        value={formData.startDate}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                                    <input
                                        type="date"
                                        value={formData.endDate}
                                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </>
                        )}

                        {selectedService === 'daycare' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Special Needs</label>
                                <textarea
                                    value={formData.specialNeeds}
                                    onChange={(e) => setFormData({ ...formData, specialNeeds: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        )}

                        {selectedService === 'emergency' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Additional Requirements</label>
                            <textarea
                                value={formData.requirements}
                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}; 