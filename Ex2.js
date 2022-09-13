import './Ex2.css';
import { useState } from 'react';

function Ex2() {
  const [age, setAge] = useState(0);
  const [hru, setHru] = useState(0);
  const [hrl, setHrl] = useState(0);
  
  function calculate(){
    setHru((220-age)*0.85);
    setHrl((220-age)*0.65);
  }

  return(
    <div>
      <h3>Heart Rate Limits Calculator</h3>
      <form>
        <div>
          <label>AGE</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart Rate Limit</label>
          <output>{hrl.toFixed(0)} - {hru.toFixed(0)}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  )
}

export default Ex2;