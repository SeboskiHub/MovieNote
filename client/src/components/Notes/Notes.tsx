import { useState } from "react";
import "./Notes.css";

import { auth } from "../../services/firebase/firebaseConfig";
import { saveNote } from "../../services/notesService/notesService";
import { emotions } from "../../utils/Emotions";

type Props = {
  movie: any;
  onClose: () => void;
};

export function Notes({ movie, onClose }: Props) {
  // Emoción seleccionada por defecto
  const [emotion, setEmotion] = useState("😊");

  // Texto de la nota
  const [note, setNote] = useState("");

  // Guardar nota en Firebase
  const handleSave = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Debes iniciar sesión");
      return;
    }

    await saveNote(user.uid, movie, emotion, note);

    alert("Nota guardada ✨");
    onClose();
  };

  return (
    <div className="note-box">

     
      <h3>{movie.title || movie.name}</h3>


      <h4>¿Qué te hizo sentir?</h4>


      <div className="emotions">

        {emotions.map((item) => (
          <button
            key={item.id}
            className={
              emotion === item.emoji
                ? "active-emotion"
                : ""
            }
            onClick={() => setEmotion(item.emoji)}
            title={item.name}
          >
            {item.emoji}
          </button>
        ))}

      </div>


      <textarea
        placeholder="Escribe tu nota..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="save-note-btn"
        onClick={handleSave}
      >
        Guardar Nota
      </button>

    </div>
  );
}