import { useState } from 'react';
import './App.css';

import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-10 mt-6 text-4xl font-bold">Un blog per ricordare</h1>

        {/* Componente "Card" */}
        <Card />
      </div>
    </>
  );
}

export default App;
