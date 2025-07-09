import { useState } from 'react';

const colorSwatches = {
  "Burnished Amber": "#8B5E3C",
  "Satin Bronze": "#A77044",
  "Brown": "#5B3A29",
  "Champagne Mist": "#D2BFA3",
  "Oil Rubbed Bronze": "#3A2F2A",
  "Antique Pewter": "#8C8C8C"
};

function ProductCard({ name, price, image }) {
  const [color, setColor] = useState("Burnished Amber");
  const [customEnabled, setCustomEnabled] = useState(false);
  const [customText, setCustomText] = useState("");

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white text-center flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 mb-3">{price}</p>

      {/* Color dropdown */}
      <label className="block text-sm font-medium text-gray-700 mb-1">Select Color</label>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full border rounded p-2 mb-3"
      >
        {Object.keys(colorSwatches).map((c, i) => (
          <option key={i}>{c}</option>
        ))}
      </select>

      {/* Swatch preview */}
      <div className="flex flex-col items-center mb-4">
        <div
          className="w-full h-10 rounded border border-gray-300 mb-1"
          style={{ backgroundColor: colorSwatches[color] }}
        ></div>
        <span className="text-sm text-gray-700">{color}</span>
      </div>

      {/* Custom design checkbox */}
      <div className="text-left mb-2">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={customEnabled}
            onChange={(e) => setCustomEnabled(e.target.checked)}
            className="form-checkbox"
          />
          <span className="text-sm text-gray-700 font-medium">Customize this vent</span>
        </label>
      </div>

      {/* Custom text input */}
      {customEnabled && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Engraving or Text</label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="e.g., The Smiths, Merry Christmas"
            className="w-full border rounded p-2"
          />
        </div>
      )}

      {/* Buy button */}
      <button
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold transition-all"
        onClick={() => {
          alert(`Order:\n${name}\nColor: ${color}\nCustom: ${customEnabled ? customText : "No"}`);
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

function Shop() {
  const products = [
    { name: "4x8 Vent", price: "$24.99", image: "/vents/4x8.png" },
    { name: "4x10 Vent", price: "$26.99", image: "/vents/4x10.png" },
    { name: "4x12 Vent", price: "$28.99", image: "/vents/4x12.png" },
    { name: "4x14 Vent", price: "$30.99", image: "/vents/4x14.png" },
    { name: "6x10 Vent", price: "$32.99", image: "/vents/6x10.png" },
    { name: "6x12 Vent", price: "$34.99", image: "/vents/6x12.png" },
    { name: "6x14 Vent", price: "$36.99", image: "/vents/6x14.png" },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Shop DynamicVent</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
