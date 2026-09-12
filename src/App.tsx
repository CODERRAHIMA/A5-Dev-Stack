import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner';
import Nav from './components/Nav';
import Technologies from './components/technologies/Technologies';
import type { ITechnologies } from './types/Type';

const technologiesPromise = async():Promise<ITechnologies[]> => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

function App() {

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading Technologies...</div>}>
        <Technologies technologiesPromise={technologiesPromise()} />
      </Suspense>
    </>
  )
}

export default App;