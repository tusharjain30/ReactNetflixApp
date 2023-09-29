import React, {useState} from 'react';
import './App.css';
import FavSeries from './componants/FavSeries';

let App = () => {

  const [text, setText] = useState('');
  const [value, setValue] = useState('');

  let inputHandler = (event) => {
      setText(event.target.value);
  }

  let clickHandler = () => {
      setValue(text); 
      setText('');    
  }

  return (
    <>
        <h2 className='top_heading'>🎥 Top Netflix and amazon prime series 🎥</h2>
        <div className='search_bar'>
            <input type = "text" placeholder='Netflix & Amazon Series' onChange = {inputHandler} value = {text}/>
            <button type = "button" className="btn btn-info" onClick = {clickHandler}>Search</button>
        </div>
        <div className='cards'>
            <FavSeries text = {value.toUpperCase()}/>
        </div>
    </>
  )
};

export default App;