import React from 'react';
import './App.css';

const facts = [
    "Cats sleep for 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles in their ears.",
    "Domestic cats can run up to 30 mph.",
    "A cat's whiskers are roughly as wide as its body."
];

const App = () => {
    return (
        <div className="app">
            <h1>Fun Facts About Cats</h1>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
