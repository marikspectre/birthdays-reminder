import { useState } from 'react';
import List from './components/list';
import data from './data.js'

import './App.css';


function App() {

  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => {
          setPeople([]);
        }}>clear all</button>
      </section>
    </main>
  );
}

export default App;
