import { useState } from "react";
import { emotions } from "../../utils/Emotions";
import "./EmotionSelector.css"; // 👈 IMPORTANTE

const EmotionSelector = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null);

  return (
    <div className="emotion-container">
      {emotions.map((emotion) => (
        <button
          key={emotion.id}
          onClick={() => setSelectedEmotion(emotion.id)}
          
          // Solo manejamos lógica, no estilos
          className={`emotion-button ${
            selectedEmotion === emotion.id ? "active" : ""
          }`}
        >
          {emotion.emoji} {emotion.name}
        </button>
      ))}
    </div>
  );
};

export default EmotionSelector;