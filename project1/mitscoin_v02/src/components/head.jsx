import React from 'react';

function Head() {
  // Definiere die Funktion twitter innerhalb der Head-Komponente
  const twitter = () => {
    window.open("https://twitter.com/mitsmeme1?s=21");
  };

  const telegram = () => {
    window.open("https://t.me/MITSMeme1");
  };

  const dexscrener = () => {
    window.open("https://dexscreener.com/solana/fhyt96zzh5qcgzuggaz17egenpe8mbkkjwoccfztwssu");
  };



  return (
    <div>
      <header className="heading">
        <img src="./bilder/log2.jpg" alt="Logo"></img>
        <ul>
          {/* Übergebe die Funktion twitter als Prop */}
          <li onClick={telegram}>Telegram</li>
          <li onClick={twitter}>Twitter (X)</li>
          <li onClick={dexscrener}>DEXSCREENER</li>
          <li>About us</li>
        </ul>
      </header>
    </div>
  );
}

export default Head;
