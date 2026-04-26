import { useEffect, useState } from "react";
import "./MisNotas.css";

import { auth } from "../../services/firebase/firebaseConfig";
import { getUserNotes } from "../../services/notesService/notesService";
import { emotions } from "../../utils/Emotions";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function MisNotas() {
  const [notes, setNotes] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const loadNotes = async () => {
      const user = auth.currentUser;

      if (!user) return;

      const data = await getUserNotes(user.uid);
      setNotes(data);
    };

    loadNotes();
  }, []);

  const filteredNotes =
    filter === "all"
      ? notes
      : notes.filter((n) => n.emotion === filter);

  return (
    <>
      {/* Navbar SIEMPRE visible */}
      <Navbar />

      <div className="notes-page">

        {/* PERFIL */}
        <div className="notes-header">
          <h1>Mis Notas</h1>
          <p>{auth.currentUser?.email}</p>
          <p>{notes.length} notas guardadas</p>
        </div>

        {/* FILTROS */}
        <div className="notes-filters">

          <button onClick={() => setFilter("all")}>
            Todas
          </button>

          {emotions.map((e) => (
            <button
              key={e.id}
              onClick={() => setFilter(e.emoji)}
            >
              {e.emoji}
            </button>
          ))}

        </div>

        {/* LISTA */}
        <div className="notes-grid">

          {filteredNotes.map((item) => (
            <div key={item.id} className="note-card">

              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p className="emotion">
                {item.emotion}
              </p>

              <p>{item.note}</p>

            </div>
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default MisNotas;