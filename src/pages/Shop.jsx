function Shop() {
  const products = [
    { name: "4x8 Fixed Vent", price: "$24.99", paypal: "https://www.paypal.com/buttons/yourbutton1" },
    { name: "4x8 Movable Vent", price: "$29.99", paypal: "https://www.paypal.com/buttons/yourbutton2" },
    { name: "4x10 Fixed Vent", price: "$26.99", paypal: "https://www.paypal.com/buttons/yourbutton3" },
    { name: "4x10 Movable Vent", price: "$31.99", paypal: "https://www.paypal.com/buttons/yourbutton4" }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Shop Vents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="mb-2">{product.price}</p>
            <a href={product.paypal} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy with PayPal</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
