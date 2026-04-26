import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../hooks/useAuth";
import { savePurchase } from "../../services/ordersService/ordersService";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Checkout.css";
import { useState } from "react";

export function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user } = useAuth(); // assuming useAuth exists and provides current user
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = async () => {
    if (!user) {
      alert("Debes iniciar sesión para realizar la compra");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) return;

    try {
      setIsProcessing(true);
      await savePurchase(user.uid, cartItems, totalPrice);
      alert("🎉 ¡Compra Realizada Exitosamente!");
      clearCart();
      navigate("/home");
    } catch (error) {
      console.error("Error procesando pago:", error);
      alert("Ocurrió un error al procesar tu compra. Intenta de nuevo.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <div className="checkout-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Volver
          </button>
          
          <h1 className="checkout-title">Finalizar Compra</h1>

          <div className="checkout-content">
            {/* Lista de Items */}
            <div className="checkout-items">
              <h3>Resumen de Pedido</h3>
              {cartItems.length === 0 ? (
                <p className="empty-msg">No hay elementos en tu carrito.</p>
              ) : (
                <div className="items-list">
                  {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                      <img
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                            : "https://via.placeholder.com/200x300?text=No+Img"
                        }
                        alt={item.title}
                      />
                      <div className="checkout-item-details">
                        <h4>{item.title}</h4>
                        <span className="checkout-item-price">
                          ${item.price.toLocaleString("es-CO")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Panel de Pago */}
            <div className="checkout-summary">
              <h3>Total a Pagar</h3>
              <div className="summary-row">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>${totalPrice.toLocaleString("es-CO")}</span>
              </div>
              <div className="summary-row">
                <span>Impuestos</span>
                <span>$0</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${totalPrice.toLocaleString("es-CO")}</span>
              </div>

              <div className="payment-info">
                <p>Método de pago: <strong>Saldo Virtual</strong></p>
                <p className="payment-note">Esta es una transacción ficticia para Blockbuster MovieNote.</p>
              </div>

              <button 
                className="pay-button" 
                onClick={handlePay}
                disabled={cartItems.length === 0 || isProcessing}
              >
                {isProcessing ? "Procesando..." : `Pagar $${totalPrice.toLocaleString("es-CO")}`}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
