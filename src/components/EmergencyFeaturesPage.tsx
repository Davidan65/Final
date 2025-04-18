import React, { useState, useEffect } from 'react';

interface EmergencyGuide {
    id: string;
    title: string;
    description: string;
    content: string;
    situation: string;
}

interface LostPetReport {
    id: string;
    petId: string;
    lastSeen: string;
    location: string;
    description: string;
    contactInfo: string;
    status: string;
}

interface FirstAidInfo {
    id: string;
    title: string;
    description: string;
    content: string;
    situation: string;
}

const EmergencyFeaturesPage: React.FC = () => {
    const [guides, setGuides] = useState<EmergencyGuide[]>([]);
    const [lostPets, setLostPets] = useState<LostPetReport[]>([]);
    const [firstAidInfo, setFirstAidInfo] = useState<FirstAidInfo[]>([]);
    const [selectedSituation, setSelectedSituation] = useState<string>('all');
    const [newLostPetReport, setNewLostPetReport] = useState({
        petId: '',
        lastSeen: '',
        location: '',
        description: '',
        contactInfo: '',
    });

    useEffect(() => {
        // Fetch emergency guides
        const fetchGuides = async () => {
            try {
                // Implementation for fetching guides
                setGuides([]);
            } catch (error) {
                console.error('Error fetching guides:', error);
            }
        };

        // Fetch lost pet reports
        const fetchLostPets = async () => {
            try {
                // Implementation for fetching lost pets
                setLostPets([]);
            } catch (error) {
                console.error('Error fetching lost pets:', error);
            }
        };

        // Fetch first aid information
        const fetchFirstAidInfo = async () => {
            try {
                // Implementation for fetching first aid info
                setFirstAidInfo([]);
            } catch (error) {
                console.error('Error fetching first aid info:', error);
            }
        };

        fetchGuides();
        fetchLostPets();
        fetchFirstAidInfo();
    }, []);

    const handleSubmitLostPetReport = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Implementation for submitting lost pet report
            console.log('Lost pet report submitted:', newLostPetReport);
        } catch (error) {
            console.error('Error submitting lost pet report:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Emergency Features</h1>

            {/* Emergency Guides Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Emergency Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {guides.map((guide) => (
                        <div key={guide.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium mb-2">{guide.title}</h3>
                            <p className="text-gray-600 mb-2">{guide.description}</p>
                            <div className="prose max-w-none">
                                {guide.content}
                            </div>
                            <div className="mt-2 text-sm text-gray-500">
                                Situation: {guide.situation}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lost Pet Reporting Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Lost Pet Reporting</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium mb-4">Report a Lost Pet</h3>
                        <form onSubmit={handleSubmitLostPetReport} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Pet ID</label>
                                <input
                                    type="text"
                                    value={newLostPetReport.petId}
                                    onChange={(e) => setNewLostPetReport({ ...newLostPetReport, petId: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Seen</label>
                                <input
                                    type="datetime-local"
                                    value={newLostPetReport.lastSeen}
                                    onChange={(e) => setNewLostPetReport({ ...newLostPetReport, lastSeen: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    value={newLostPetReport.location}
                                    onChange={(e) => setNewLostPetReport({ ...newLostPetReport, location: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={newLostPetReport.description}
                                    onChange={(e) => setNewLostPetReport({ ...newLostPetReport, description: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Contact Information</label>
                                <input
                                    type="text"
                                    value={newLostPetReport.contactInfo}
                                    onChange={(e) => setNewLostPetReport({ ...newLostPetReport, contactInfo: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Submit Report
                            </button>
                        </form>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium mb-4">Recent Lost Pet Reports</h3>
                        <div className="space-y-4">
                            {lostPets.map((report) => (
                                <div key={report.id} className="border-b pb-4">
                                    <h4 className="font-medium">Pet ID: {report.petId}</h4>
                                    <p className="text-sm text-gray-600">Last Seen: {report.lastSeen}</p>
                                    <p className="text-sm text-gray-600">Location: {report.location}</p>
                                    <p className="text-sm text-gray-600">Status: {report.status}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* First Aid Information Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">First Aid Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {firstAidInfo.map((info) => (
                        <div key={info.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                            <p className="text-gray-600 mb-2">{info.description}</p>
                            <div className="prose max-w-none">
                                {info.content}
                            </div>
                            <div className="mt-2 text-sm text-gray-500">
                                Situation: {info.situation}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EmergencyFeaturesPage; 