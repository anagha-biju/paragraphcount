import {useState} from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function WordCounter() {
  const [state, setState] = useState({
    wordCount: 0, 
    charCount: 0
  });
  
  const handleKeyPress = (e) => {
    const count = e.target.value;
    
    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi,"");
        count = count.replace(/[ ]{2,}/gi," ");
        count = count.replace(/\n /,"\n");
        return count.split(' ').length; 
      }
    }
    
    setState({
      wordCount: countWords(count),
    });
  }
  
  return(
    <div id='container'>   
      <h1>Responsive Paragraph Word Counter</h1> 
      <textarea 
        onChange={handleKeyPress}
      >    
      </textarea>
      <h4>Word Count: 
        <span className='num'> {state.wordCount}</span> 
      </h4> 
    </div>
  );
}

function App() {
  return (
    <WordCounter />
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;