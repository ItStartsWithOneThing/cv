
import React from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Commercial from './components/Commercial';
import Pet from './components/Pet';

function App() {
  const categories = ['About', 'Commercial Exp', 'Pet Projects', 'Contacts'];
  const categoriesId = ['#about', '#commercial', '#pet', '#contacts'];

  return (
    <>
      <Navigation categories={categories} categoriesId={categoriesId} />
      <About categoryId={categoriesId[0]} />
      <Commercial categoryId={categoriesId[1]} />
      <Pet categoryId={categoriesId[2]} />
    </>
  );
}

export default App;
