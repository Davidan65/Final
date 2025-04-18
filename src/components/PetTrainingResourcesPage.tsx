import React, { useState, useEffect } from 'react';

interface TrainingVideo {
    id: string;
    title: string;
    description: string;
    url: string;
    category: string;
    difficulty: string;
}

interface BehaviorGuide {
    id: string;
    title: string;
    description: string;
    content: string;
    issue: string;
    breed: string;
}

interface TrainingProgress {
    petId: string;
    trainingId: string;
    progress: number;
    notes: string;
    date: string;
}

const PetTrainingResourcesPage: React.FC = () => {
    const [videos, setVideos] = useState<TrainingVideo[]>([]);
    const [guides, setGuides] = useState<BehaviorGuide[]>([]);
    const [progress, setProgress] = useState<TrainingProgress[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedIssue, setSelectedIssue] = useState<string>('all');
    const [selectedBreed, setSelectedBreed] = useState<string>('all');

    useEffect(() => {
        // Fetch training videos
        const fetchVideos = async () => {
            try {
                // Implementation for fetching videos
                setVideos([]);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        // Fetch behavior guides
        const fetchGuides = async () => {
            try {
                // Implementation for fetching guides
                setGuides([]);
            } catch (error) {
                console.error('Error fetching guides:', error);
            }
        };

        // Fetch training progress
        const fetchProgress = async () => {
            try {
                // Implementation for fetching progress
                setProgress([]);
            } catch (error) {
                console.error('Error fetching progress:', error);
            }
        };

        fetchVideos();
        fetchGuides();
        fetchProgress();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Pet Training Resources</h1>

            {/* Training Videos Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Training Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium mb-2">{video.title}</h3>
                            <p className="text-gray-600 mb-2">{video.description}</p>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    className="w-full h-full rounded-lg"
                                    allowFullScreen
                                />
                            </div>
                            <div className="mt-2 flex justify-between text-sm text-gray-500">
                                <span>{video.category}</span>
                                <span>{video.difficulty}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Behavior Guides Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Behavior Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {guides.map((guide) => (
                        <div key={guide.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium mb-2">{guide.title}</h3>
                            <p className="text-gray-600 mb-2">{guide.description}</p>
                            <div className="prose max-w-none">
                                {guide.content}
                            </div>
                            <div className="mt-2 flex justify-between text-sm text-gray-500">
                                <span>{guide.issue}</span>
                                <span>{guide.breed}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Training Progress Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Training Progress</h2>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Pet
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Training
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Progress
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Notes
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {progress.map((item) => (
                                    <tr key={`${item.petId}-${item.trainingId}`}>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.petId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.trainingId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{item.notes}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PetTrainingResourcesPage; 