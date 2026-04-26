import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../hooks/useAuth";
import { getUserPurchases } from "../../services/ordersService/ordersService";
import { useNavigate } from "react-router-dom";
import "./PurchasesHistory.css";

type PurchaseRecord = {
  id: string;
  createdAt: Date;
  totalPrice: number;
  status: string;
  items: {
    id: number;
    title: string;
    price: number;
  }[];
};

export function PurchasesHistory() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If no user, redirect or stop loading
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchPurchases = async () => {
      try {
        const data = await getUserPurchases(user.uid);
        setPurchases(data as PurchaseRecord[]);
      } catch (error) {
        console.error("Error cargando historial", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPurchases();
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <div className="history-page">
        <div className="history-container">
          <h1 className="history-title">Historial de Compras</h1>
          <p className="history-subtitle">Revisa tus películas y series rentadas digitalmente.</p>

          {isLoading ? (
            <div className="history-loading">Cargando tu historial...</div>
          ) : purchases.length === 0 ? (
            <div className="history-empty">
              <h2>Aún no tienes compras</h2>
              <p>¡Explora el catálogo y renta tu primera película!</p>
              <button 
                className="btn-explore" 
                onClick={() => navigate("/home")}
              >
                Explorar Catálogo
              </button>
            </div>
          ) : (
            <div className="history-list">
              {purchases.map(purchase => (
                <div key={purchase.id} className="history-card">
                  <div className="history-card-header">
                    <div className="history-date">
                      <span className="icon">📅</span>
                      {purchase.createdAt.toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </div>
                    <div className="history-total">
                      Total: <span>${purchase.totalPrice.toLocaleString("es-CO")}</span>
                    </div>
                  </div>
                  
                  <div className="history-card-body">
                    <h4>Películas rentadas:</h4>
                    <ul className="history-items">
                      {purchase.items.map((item, index) => (
                        <li key={`${purchase.id}-${item.id}-${index}`}>
                          <span className="item-title">{item.title}</span>
                          <span className="item-price">${item.price.toLocaleString("es-CO")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="history-card-footer">
                    <span className={`status-badge ${purchase.status}`}>
                      {purchase.status === "completed" ? "✓ Completada" : purchase.status}
                    </span>
                    <span className="order-id">Orden ID: {purchase.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
