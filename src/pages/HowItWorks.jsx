function HowItWorks() {
  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">How It Works</h1>
        <p className="text-lg mb-8">
          Installing DynamicVent is fast and clean. Just follow these three steps and enjoy a beautiful flush-mount result that elevates your entire floor.
        </p>

        {/* Video Embed */}
        <div className="mb-10" style={{ height: "500px" }}>
          <iframe
            src="https://www.youtube.com/embed/0Ic_XOCtcm4?rel=0"
            title="How to Install DynamicVent"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded shadow-lg"
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold mb-4">3 Simple Steps</h2>
<div className="grid md:grid-cols-4 gap-10 text-left mt-10">
  {/* Step 1 */}
  <div className="flex flex-col items-center text-center">
    <img src="/step1-align.jpg" alt="Align Template" className="h-24 mb-4" />
    <h3 className="font-bold text-xl mb-2">1. Align the Template</h3>
    <p className="text-gray-700">
      Place the full routing template on your floor and use the inner visual guide to precisely align it over the vent opening.
    </p>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center text-center">
    <img src="/step2-remove.jpg" alt="Remove Guide" className="h-24 mb-4" />
    <h3 className="font-bold text-xl mb-2">2. Remove the Inner Guide</h3>
    <p className="text-gray-700">
      Once positioned, remove the inner visual insert. You’ll be left with the outer routing frame taped in place.
    </p>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center text-center">
    <img src="/step3-route.jpg" alt="Route Opening" className="h-24 mb-4" />
    <h3 className="font-bold text-xl mb-2">3. Route the Opening</h3>
    <p className="text-gray-700">
      Use a router to cut out the vent cavity using the outer template as your guide.
    </p>
  </div>

  {/* Step 4 */}
  <div className="flex flex-col items-center text-center">
    <img src="/step4-drop.jpg" alt="Drop In Vent" className="h-24 mb-4" />
    <h3 className="font-bold text-xl mb-2">4. Drop It In</h3>
    <p className="text-gray-700">
      Set your DynamicVent into place — flush, clean, and secure without screws or adhesive.
    </p>
  </div>
</div>



      </div>
    </div>
  );
}

export default HowItWorks;
