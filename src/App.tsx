import { useState, version } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center  w-full">
      <div className="flex flex-col justify-center items-center min-h-screen max-w-4xl px-4">
        <div className="flex justify-around w-full items-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold">
          Vite + React <small>{version}</small>
        </h1>
        <div className="card">
          <button
            className="rounded-lg border border-transparent px-3 py-2 text-base font-medium bg-gray-900 hover:border-indigo-500"
            onClick={() => setCount(count => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-center">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-center">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
