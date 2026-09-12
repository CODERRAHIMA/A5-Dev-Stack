import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner';
import Nav from './components/Nav';
import Technologies from './components/technologies/Technologies';
import type { ITechnologies } from './types/Type';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

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
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App;