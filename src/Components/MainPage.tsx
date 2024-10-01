import React, { useState } from 'react';
import firstLetter from "../assets/images/F.png";
import secondLetter from "../assets/images/L.png";
import ThirdLetter from "../assets/images/A.png";
import fourthLetter from "../assets/images/M.png";
import fifthLetter from "../assets/images/E.png";
import SixthLetter from "../assets/images/S.png";
import "../Styles/Mainapage.css";

const MainPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [result, setResult] = useState("");
  const flamesArray = ['Friends', 'Lovers', 'Admirers', 'Marriage', 'Enemy', 'Secret Lovers'];

  const calculateFlames = () => {
    if (firstName.trim() === "" || secondName.trim() === "") {
      alert("Please fill in both names.");
      return;
    }

    let name1 = firstName.toLowerCase().replace(/\s/g, '');
    let name2 = secondName.toLowerCase().replace(/\s/g, '');

    // Remove common letters
    for (let char of name1) {
      if (name2.includes(char)) {
        name1 = name1.replace(char, '');
        name2 = name2.replace(char, '');
      }
    }

    // Calculate the total number of remaining letters
    const remainingLettersCount = name1.length + name2.length;

    if (remainingLettersCount === 0) {
      setResult("Try Again!");
      return;
    }

    // Find the FLAMES result based on the remainder
    const flamesIndex = (remainingLettersCount % flamesArray.length) - 1;
    const flamesResult = flamesIndex >= 0 ? flamesArray[flamesIndex] : flamesArray[flamesArray.length - 1];

    setResult(flamesResult);
  };

  const resetGame = () => {
    setFirstName("");
    setSecondName("");
    setResult("");
  };

  return (
    <div>
      <div className="flame-board">
        <div className="flameboard-kids">
          <img id='letters' src={firstLetter} alt="F" />
          <div className="flame-numbers">1</div>
          <div className="flame-numbers">7</div>
          <div className="flame-numbers">13</div>
        </div>

        <div className="flameboard-kids">
          <img id='letters1' src={secondLetter} alt="L" />
          <div className="flame-numbers">2</div>
          <div className="flame-numbers">8</div>
          <div className="flame-numbers">14</div>
        </div>

        <div className="flameboard-kids">
          <img id='letters' src={ThirdLetter} alt="A" />
          <div className="flame-numbers">3</div>
          <div className="flame-numbers">9</div>
          <div className="flame-numbers">15</div>
        </div>

        <div className="flameboard-kids">
          <img id='letters2' src={fourthLetter} alt="M" />
          <div className="flame-numbers">4</div>
          <div className="flame-numbers">10</div>
          <div className="flame-numbers">16</div>
        </div>

        <div className="flameboard-kids">
          <img id='letters' src={fifthLetter} alt="E" />
          <div className="flame-numbers">5</div>
          <div className="flame-numbers">11</div>
          <div className="flame-numbers">17</div>
        </div>

        <div className="flameboard-kids">
          <img id='letters' src={SixthLetter} alt="S" />
          <div className="flame-numbers">6</div>
          <div className="flame-numbers">12</div>
          <div className="flame-numbers">18</div>
        </div>
      </div>

      <div className="input-box">
        <h2 className='h2'>👇Insert Names Here👇</h2>
        <div className="input-box2">
          <input 
            type="text" 
            name="name" 
            id="name1" 
            placeholder='First Name' 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </div>

        <div className="input-box2">
          <input 
            type="text" 
            name="name" 
            id="name2" 
            placeholder='Second Name' 
            value={secondName} 
            onChange={(e) => setSecondName(e.target.value)} 
          />
        </div>
        <button id='submit' type="submit" onClick={calculateFlames}>Match Us</button>

        {result && (
          <div className="result-container">
            <h2>Result: {result}</h2>
            <button className='pa' onClick={resetGame}>Play Again</button>
            <button className='sr' onClick={() => alert("Share feature to be implemented!")}>Share Result</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
