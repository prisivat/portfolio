import React, { useEffect, useState } from "react";
import "./App.css";

interface CardType {
  id: string;
  value: string;
}

const cardValues: string[] = ["🐶", "🐱", "🦊", "🐸", "🐵", "🐼"];

const shuffleCards = (): CardType[] => {
  const doubled = [...cardValues, ...cardValues];
  return doubled
    .map((value) => ({
      value,
      id: crypto.randomUUID(), // Each card needs a unique ID
    }))
    .sort(() => Math.random() - 0.5);
};

const Memory: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const handleCardClick = (card: CardType) => {
    if (
      flipped.length === 2 ||
      flipped.includes(card.id) ||
      matched.includes(card.id)
    )
      return;

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        setMatched((prev) => [...prev, firstId, secondId]);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="game-container">
      <h1>🧠 Memory Match Game</h1>
      <div className="grid">
        {cards.map((card) => {
          const isFlipped =
            flipped.includes(card.id) || matched.includes(card.id);
          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-inner">
                <div className="card-front">❓</div>
                <div className="card-back">{card.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Memory;
