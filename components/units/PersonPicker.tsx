// src/PersonPicker.js
import React, { useCallback, useState } from 'react';
import FlipMove from 'react-flip-move';

const PersonPicker = ({ people }: { people: string[] }) => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [loopCount, setLoopCount] = useState(0);

  const pickRandomPerson = useCallback(() => {
    const i = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * people.length);
      setSelectedPerson(people[randomIndex]);
      setLoopCount(loopCount + 1);

      if (loopCount >= 10) {
        window.clearInterval(i);
        setLoopCount(0);
      }
    }, 400);
  }, [loopCount, people]);

  return (
    <div>
      <button onClick={pickRandomPerson}>Pick Random Person</button>
      <FlipMove>
        {selectedPerson && (
          <div key={selectedPerson}>
            <h2>Selected Person:</h2>
            <p>{selectedPerson}</p>
          </div>
        )}
      </FlipMove>
    </div>
  );
};

export default PersonPicker;
