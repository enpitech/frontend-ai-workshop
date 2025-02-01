import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router';
import { SpeakersTable } from './components/SpeakersTable';

// Mock data for speakers
const mockSpeakers = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://example.com/john.jpg',
    topics: ['React', 'JavaScript'],
    languages: ['English'],
    socialLinks: {},
    recordings: [],
    rating: 4,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    image: 'https://i.pravatar.cc/150?u=sarah',
    topics: ['AI/ML', 'Web Development'],
    languages: ['English', 'Spanish'],
    socialLinks: {
      twitter: 'https://twitter.com/sarah',
      linkedin: 'https://linkedin.com/in/sarah',
      instagram: 'https://instagram.com/sarah',
    },
    recordings: [],
    rating: 4,
  },
  {
    id: 3,
    name: 'Michael Chen',
    image: 'https://i.pravatar.cc/150?u=michael',
    topics: ['Cloud Architecture', 'DevOps'],
    languages: ['English', 'Mandarin'],
    socialLinks: {
      twitter: 'https://twitter.com/michael',
      linkedin: 'https://linkedin.com/in/michael',
      tiktok: 'https://tiktok.com/@michael',
    },
    recordings: [],
    rating: 5,
  },
  // Add more mock speakers as needed
];

// 404 Component
function NotFound() {
  return <div className="text-center">404 Not Found</div>;
}

// Loader function for speakers
async function speakersLoader() {
  return { speakers: mockSpeakers };
}

// Adjust SpeakersTable usage
const SpeakersRoute = () => {
  const { speakers } = useLoaderData();
  return <SpeakersTable speakers={speakers} />;
};

// Update router configuration
const router = createBrowserRouter([
  {
    path: '/speakers',
    element: <SpeakersRoute />, // Use the component that correctly uses the hook
    loader: speakersLoader,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
