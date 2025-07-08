function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
		<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
		  Elevate Your Floors. Control Your Air.
		</h1>
		<p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-300">
		  DynamicVent is a flush-mount hardwood floor vent system — stylish, durable, and customizable. Ditch the builder-grade grilles and upgrade to vents that match your home.
		</p>
		<a href="/shop" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all">
		  Explore Designs
		</a>

    </section>
  );
}

export default Home;
