import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartSidebar.css";

export function CartSidebar() {
  const { isCartOpen, setCartOpen, cartItems, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart-backdrop" onClick={() => setCartOpen(false)}></div>
      
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="cart-close-btn" onClick={() => setCartOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p className="cart-empty-msg">Tu carrito está vacío.</p>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                        : "https://via.placeholder.com/200x300?text=No+Img"
                    }
                    alt={item.title}
                  />
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <span className="cart-item-price">
                      ${item.price.toLocaleString("es-CO")}
                    </span>
                  </div>
                  <button
                    className="cart-remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Subtotal:</span>
            <span>${totalPrice.toLocaleString("es-CO")}</span>
          </div>
          <button
            className="cart-checkout-btn"
            disabled={cartItems.length === 0}
            onClick={handleCheckoutClick}
          >
            Ir a Pagar
          </button>
        </div>
      </div>
    </>
  );
}
