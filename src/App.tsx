import { useState, version } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { StarRating } from './components/StarRating';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
