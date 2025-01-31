import { useState, version } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { StarRating } from './components/StarRating';
import { Avatar } from './components/Avatar';
import { SessionsButton } from './components/SessionsButton';

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/* Sessions Button Demo */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">Sessions Button Demo</h2>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Default</span>
            <SessionsButton onClick={() => console.log('Sessions clicked')} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Loading</span>
            <SessionsButton isPending={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Disabled</span>
            <SessionsButton disabled />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Interactive</span>
            <SessionsButton
              isPending={isLoading}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 2000);
              }}
            />
          </div>
        </div>
      </div>

      {/* Avatar Demo */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">Avatar Demo</h2>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Small</span>
            <Avatar
              src="https://i.pravatar.cc/150?u=1"
              alt="John Doe"
              size="sm"
              fallback="John Doe"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Medium</span>
            <Avatar
              src="https://i.pravatar.cc/150?u=2"
              alt="Jane Smith"
              size="md"
              fallback="Jane Smith"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Large</span>
            <Avatar
              src="https://i.pravatar.cc/150?u=3"
              alt="Bob Johnson"
              size="lg"
              fallback="Bob Johnson"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Fallback</span>
            <Avatar src="invalid-url" alt="Invalid Image" size="md" fallback="Test User" />
          </div>
        </div>
      </div>

      {/* Star Rating Demo */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-bold">Star Rating Demo</h2>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Stars</span>
            <StarRating rating={5} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Stars</span>
            <StarRating rating={1} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Stars</span>
            <StarRating rating={2} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Stars</span>
            <StarRating rating={3} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Stars</span>
            <StarRating rating={4} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-left">Stars</span>
            <StarRating rating={5} />
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Vite + React <small>{version}</small>
      </h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
