function Home() {
  return (
    <div className="text-white bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Smart Vents for Hardwood Floors</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-6">
          DynamicVent gives your floors a flush, stylish finish — with customizable vents that elevate airflow and design.
        </p>
        <a href="/shop" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold shadow-md">
          Shop Vents
        </a>
      </section>

      {/* What Is It */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why DynamicVent?</h2>
		<p className="text-gray-300">
		  DynamicVent transforms the look and feel of your home by replacing outdated, builder-grade vents with sleek, flush-mount floor registers. Available in a range of designer styles — or fully customizable with your own patterns or wording — our vents bring precision airflow and polished aesthetics to any hardwood floor. Installation is easy: use our included template, cut the opening with a router, and drop your new vent in place. No screws. No compromises.
		</p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-700 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center text-gray-100">
          <div>
            <img src="/template.png" alt="template" className="h-28 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Step 1: Use Our Templates</h3>
            <p>Place our template on your hardwood floor to mark the cutout.</p>
          </div>
          <div>
            <img src="/router.png" alt="router" className="h-28 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Step 2: Cut with a Router</h3>
            <p>Follow the guide and make a clean flush-mount opening.</p>
          </div>
          <div>
            <img src="/vent.png" alt="vent" className="h-28 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Step 3: Drop In the Vent</h3>
            <p>Drop it in place — that’s it! No screws or adhesive needed.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Example of Vent Styles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
		  {[...Array(15)].map((_, i) => (
			<img
			  key={i}
			  src={`/gallery${i + 1}.jpg`}
			  alt={`Gallery ${i + 1}`}
			  className="rounded-lg shadow-md"
			  loading="lazy"
			/>
		  ))}
		</div>
      </section>
    </div>
  );
}

export default Home;

