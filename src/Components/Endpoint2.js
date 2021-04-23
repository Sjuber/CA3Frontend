
import '../App.css';
import React, {useState, useEffect} from 'react';
import {URLEP2} from '../settings.js'



function Endpoint2() {

  useEffect(() => {
fetchItems();
  }, []);

  const [jokes, setJokes] = useState ([]);


const fetchItems =  async () => { 
  const data = await fetch(URLEP2
  
  );

  const jokes = await data.json();
  //console.log(items);
  setJokes(jokes);


}

  return (
    <div>
{jokes.value}



</div>
  );
}

export default Endpoint2;
