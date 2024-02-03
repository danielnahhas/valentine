import React, { useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './App.css';

function App() {
  
  const cardData = [
    {
      imageSrc: '/mona1.jpeg', // Replace with your image path
      text: "My mudi Each day we are  together becomes a masterpiece of unforgettable moments. Your presence paints my days with colors of love and joy, creating a best of everlasting memories.",
    },
    {
      imageSrc: '/mona2.jpeg', // Replace with your image path
      text: "We stand side by side, sailing  life's journey hand in hand, and in those moments, I find an indescribable beauty.",
    },
    {
      imageSrc: '/mona3.jpeg', // Replace with your image path
      text: "Your love is the melody that accompanies the rhythm of my heart, I cherish the warmth of your companionship and the strength of our connection, and I want you to know that having you by my side is the greatest blessing.",
    },
    {
      imageSrc: '/mona4.jpeg', // Replace with your image path
      text: "My only wish is to continue this journey with you, creating more memories, sharing more laughter, and experiencing the depth of our love.You are my confidant, and my greatest love, and I want you to be a part of my life's story, eternally.",
    },
    // Add more objects for additional cards
    
  ];
  function AnimatedCard({ card, index }) {
    const [isVisible, setIsVisible] = useState(false);
  
    const onChange = (visible) => {
      if (visible) {
        setIsVisible(true);
      }
    };
  
    return (
      <VisibilitySensor onChange={onChange} partialVisibility>
        <div className={`card ${isVisible ? 'animate' : ''}`}>
          <img src={card.imageSrc} alt={`Valentine Card ${index + 1}`} className="card-image" />
          <p className="card-text">{card.text}</p>
        </div>
      </VisibilitySensor>
    );
  }
  useEffect(() => {
    const audio = new Audio('/audio1.mp3'); // Replace with your actual audio file path

    const playAudio = () => {
      audio.play()
        .then(() => {
          // Audio playback started successfully
        })
        .catch(error => {
          console.error('Error playing audio:', error.message);
        });
    };

    // Add an event listener to initiate playback on user interaction
    document.addEventListener('click', playAudio);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('click', playAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <div className="App">
      <div className="stars">
        {Array.from({ length: 100 }, (_, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`, /* Add delay for varied sparkle times */
            }}
          ></div>
        ))}
      </div>
      <header className="App-header">
        <h1>Happy Lovely Days Together My Love</h1>
      </header>
      <div className="card-container">
        {cardData.map((card, index) => (
          <AnimatedCard key={index} card={card} index={index} />
        ))}
      </div>
      <div className="bottom-right">
        <img src="/mona5.jpeg" alt="Portrait" className="portrait-image" />
        <div>
        <p className="portrait-text">Forever yours,
Manushtak</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
