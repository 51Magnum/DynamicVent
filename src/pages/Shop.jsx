import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { colors, sizes } from "../data/options";

export default function Shop() {
  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [hasSlider, setHasSlider] = useState(false);
  const [kitOption, setKitOption] = useState(null);

  const patternNamesBySize = {
    "4x8": ["Chevron", "HappyHoliday", "RecPatter-1", "Round-1", "Round-2", "Round-3", "Square-1", "Square-2", "Square-3"],
    "4x10": ["Chevron", "HappyHoliday", "RecPatter-1", "Round-1", "Round-2", "Round-3", "Square-1", "Square-2", "Square-3"],
    "4x12": ["Chevron", "HappyHoliday", "RecPatter-1", "Round-1", "Round-2", "Round-3", "Square-1", "Square-2", "Square-3"],
    "4x14": ["Chevron", "HappyHoliday", "RecPatter-1", "Round-1", "Round-2", "Round-3", "Square-1", "Square-2", "Square-3"],
    "6x10": ["Chevron", "HappyHoliday", "RecPatter-1", "Round-1", "Round-2", "Round-3", "Square-1", "Square-2", "Square-3"],
    "6x12": ["Chevron", "HappyHoliday", "RecPatter-1", "Round-1", "Round-2", "Round-3", "Square-1", "Square-2", "Square-3"],
    "6x14": ["Chevron", "HappyHoliday", "RecPatter-1", "Round-1", "Round-2", "Round-3", "Square-1", "Square-2", "Square-3"]
  };

  const getPatternsForSize = (size) => {
    const baseName = size;
    return (patternNamesBySize[size] || []).map((name) => `${baseName}_${name}`);
  };

  const priceBySize = {
    "4x8": 20,
    "4x10": 23,
    "4x12": 30,
    "4x14": 34,
    "6x10": 35,
    "6x12": 40,
    "6x14": 47,
  };

  let price = priceBySize[selectedSize] || 0;
  if (hasSlider) price *= 2;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Order Your DynamicVent</h1>
      <p className="text-center text-lg mb-10">
        Follow these steps to customize and order your premium flush-mount floor vent.
      </p>

      {/* Stepper */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 text-sm font-medium">
          {[1, 2, 3, 4].map((s) => (
            <span
              key={s}
              className={`cursor-pointer transition-colors ${
                step === s ? "text-black underline" : "text-gray-400 hover:text-black"
              }`}
              onClick={() => setStep(s)}
            >
              {s === 1 && "1. Pick Size"}
              {s === 2 && "2. Pick Pattern"}
              {s === 3 && "3. Pick Color"}
              {s === 4 && "4. Review & Buy"}
            </span>
          ))}
        </div>
      </div>
      <Separator className="mb-6" />

      {step === 1 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sizes.map((size) => (
            <Card
              key={size.label}
              className={`cursor-pointer ${
                selectedSize === size.label ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => {
                setSelectedSize(size.label);
                setSelectedPattern(null);
                setStep(2);
              }}
            >
              <CardContent className="p-4 text-center">
                <img
                  src={`/vents/${size.label}.png`}
                  alt={size.label}
                  className="mx-auto h-24 object-contain mb-2"
                />
                <p className="font-semibold text-lg">{size.label}</p>
                <p className="text-sm text-gray-500">{size.dimensions}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {step === 2 && selectedSize && (
        <>
          <p className="text-center mb-4">
            Selected Size: <strong>{selectedSize}</strong>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getPatternsForSize(selectedSize).map((patternLabel) => (
              <Card
                key={patternLabel}
                className={`cursor-pointer ${
                  selectedPattern === patternLabel ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => {
                  setSelectedPattern(patternLabel);
                  setStep(3);
                }}
              >
                <CardContent className="p-4 text-center">
                  <img
                    src={`/vents/${selectedSize}/${patternLabel}.png`}
                    alt={patternLabel}
                    className="mx-auto h-24 object-contain mb-2"
                  />
                  <p className="font-semibold text-lg">
                    {patternLabel.replace(`${selectedSize}_`, "")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <p className="text-center mb-4">
            Selected Size: <strong>{selectedSize}</strong> | Pattern: <strong>{selectedPattern}</strong>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {colors.map((color) => (
              <Card
                key={color.name}
                className={`cursor-pointer flex items-center gap-4 p-4 ${
                  selectedColor === color.name ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => {
                  setSelectedColor(color.name);
                  setStep(4);
                }}
              >
                <div
                  className="w-12 h-6 rounded"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-lg font-medium">{color.name}</span>
              </Card>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <div className="space-y-8 text-center bg-gray-50 p-6 rounded-xl shadow-md">
          <div>
            <p className="text-xl font-bold mb-2">Selected Size:</p>
            <p className="text-lg text-gray-700">{selectedSize}</p>
          </div>
          <div>
            <p className="text-xl font-bold mb-2">Selected Pattern:</p>
            <img
              src={`/vents/${selectedSize}/${selectedPattern}.png`}
              alt={selectedPattern}
              className="mx-auto mb-2 h-48 object-contain shadow-sm border rounded"
            />
          </div>
          <div>
            <p className="text-xl font-bold mb-2">Selected Color:</p>
            <div className="flex justify-center items-center gap-4">
              <div
                className="w-12 h-6 rounded border shadow"
                style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.hex }}
              ></div>
              <span className="text-lg text-gray-700 font-medium">{selectedColor}</span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold mb-2">Sales Price:</p>
            <p className="text-lg text-gray-700">${price.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              id="slider"
              checked={hasSlider}
              onChange={(e) => setHasSlider(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="slider" className="text-gray-700 text-sm">
              Include slider to close vent (doubles price)
            </label>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <label className="bg-white p-4 border rounded shadow max-w-xs cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={kitOption === 'withRouter'}
                onChange={() => setKitOption(kitOption === 'withRouter' ? null : 'withRouter')}
              />
              <img
                src="/InstallationKitWithRouter.png"
                alt="Kit with Router"
                className="h-32 mx-auto object-contain mb-2"
              />
              <p className="font-semibold">Router + Template</p>
              <p className="text-sm text-gray-600">$250 billed, $225 refunded upon return</p>
            </label>
            <label className="bg-white p-4 border rounded shadow max-w-xs cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={kitOption === 'templateOnly'}
                onChange={() => setKitOption(kitOption === 'templateOnly' ? null : 'templateOnly')}
              />
              <img
                src="/InstallationKitNoRouter.png"
                alt="Template Only"
                className="h-32 mx-auto object-contain mb-2"
              />
              <p className="font-semibold">Template Only</p>
              <p className="text-sm text-gray-600">$100 billed, $25 refunded upon return</p>
            </label>
          </div>
          <div className="pt-6">
            <button className="bg-black text-white px-6 py-3 rounded text-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}