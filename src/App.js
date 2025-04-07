import React from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Lego icons 40601",
    price: 3900,
    image: "lego_icons_photo.png",
  },
  {
    id: 2,
    name: "Lego star wars 75386",
    price: 3550,
    image: "lego_star_photo.png",
  },
  {
    id: 3,
    name: "Lego icons 40601",
    price: 3900,
    image: "lego_icons_photo.png",
  },
  {
    id: 4,
    name: "Lego star wars 75386",
    price: 3550,
    image: "lego_star_photo.png",
  },
  {
    id: 5,
    name: "Lego icons 40601",
    price: 3900,
    image: "lego_icons_photo.png",
  },
  {
    id: 6,
    name: "Lego star wars 75386",
    price: 3550,
    image: "lego_star_photo.png",
  }
];

function App() {
  return (
    <div className="container">
      <div className="center-block">
        <img src="main_foto.png" alt="Primary Card" className="primary-card-image" />
        <div className="text-overlay">
          <h1>Серия Lego Star Wars</h1>
          <p>Для настоящих фанатов</p>
        </div>
      </div>

      <h2 className="recommend-title">Рекомендации для вас</h2>

      <main className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-block">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <span className="product-price">{product.price.toLocaleString()} ₽</span>
            <h3 className="product-name">{product.name}</h3>
            <button className="product-btn">Перейти</button> {/* Кнопка "Перейти" */}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
