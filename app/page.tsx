"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const carColors = [
  { name: "Red", value: "red", filter: "hue-rotate(0deg) saturate(1)" },
  { name: "Blue", value: "blue", filter: "hue-rotate(240deg) saturate(1.2)" },
  { name: "Green", value: "green", filter: "hue-rotate(120deg) saturate(1.1)" },
  { name: "Orange", value: "orange", filter: "hue-rotate(30deg) saturate(1.4)" },
  { name: "Purple", value: "purple", filter: "hue-rotate(280deg) saturate(1.2)" },
  { name: "Pink", value: "pink", filter: "hue-rotate(320deg) saturate(1.5) brightness(1.1)" },
]

export default function LamborghiniHomepage() {
  const [selectedColor, setSelectedColor] = useState("red")
  const [carView, setCarView] = useState<'side' | 'front' | 'left' | 'back'>('side')
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setNavVisible(true), 100);
  }, []);

  const getColorStyle = (colorValue: string) => {
    const color = carColors.find((c) => c.value === colorValue)
    return color ? { filter: color.filter } : {}
  }

  // Helper to cycle views
  const nextView = () => {
    setCarView((prev) => {
      if (prev === 'side') return 'front';
      if (prev === 'front') return 'left';
      if (prev === 'left') return 'back';
      return 'side';
    });
  };
  const prevView = () => {
    setCarView((prev) => {
      if (prev === 'side') return 'back';
      if (prev === 'front') return 'side';
      if (prev === 'left') return 'front';
      return 'left';
    });
  };

  const getColorDotStyle = (colorValue: string) => {
    switch (colorValue) {
      case "red":
        return "bg-red-600"
      case "blue":
        return "bg-blue-600"
      case "green":
        return "bg-green-600"
      case "orange":
        return "bg-orange-500"
      case "purple":
        return "bg-purple-600"
      case "pink":
        return "bg-pink-400"
      default:
        return "bg-red-600"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`w-full py-6 px-8 transition-all duration-700 ease-out transform ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}` }>
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex items-center space-x-12">
            <Link
              href="#"
              className="text-black font-medium text-sm tracking-wide hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              MODELS
            </Link>
            <Link
              href="#"
              className="text-black font-medium text-sm tracking-wide hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              BRAND
            </Link>
            <Link
              href="#"
              className="text-black font-medium text-sm tracking-wide hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              CUSTOMER AREA
            </Link>
            <Link
              href="#"
              className="text-black font-medium text-sm tracking-wide hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              STORE
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Complete Lamborghini Branded Section */}
        <div className="relative w-full max-w-6xl mx-auto px-8 mt-8">
          <div className="relative flex items-center justify-center">
            {/* Left Color Dots */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
              {carColors.slice(0, 3).map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-6 h-6 rounded-full transition-all duration-300 hover:scale-110 ${getColorDotStyle(color.value)} ${
                    selectedColor === color.value
                      ? "ring-4 ring-gray-400 ring-offset-2"
                      : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
                  }`}
                  title={color.name}
                />
              ))}
            </div>

            {/* Car Image with Arrow Toggle */}
            <div className="relative flex flex-col items-center w-full" style={{ maxWidth: 1400 }}>
              <div className="relative w-full" style={{ height: 500 }}>
                {/* Side View */}
                <div className={`absolute inset-0 transition-all duration-500 ${carView === 'side' ? 'opacity-100' : 'opacity-0 pointer-events-none'}` }>
                  <Image
                    src="/images/lamborghini-complete.png"
                    alt={`${carColors.find((c) => c.value === selectedColor)?.name || "Red"} Lamborghini side view`}
                    fill
                    className="object-contain w-full h-full"
                    style={getColorStyle(selectedColor)}
                    priority
                  />
                </div>
                {/* Front View */}
                <div className={`absolute inset-0 transition-all duration-500 ${carView === 'front' ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex items-center justify-center` }>
                  <div className="w-full h-full flex items-center justify-center scale-135 transition-transform duration-500">
                    <Image
                      src="/images/front-side.png"
                      alt={`${carColors.find((c) => c.value === selectedColor)?.name || "Red"} Lamborghini front view`}
                      fill
                      className="object-contain w-full h-full"
                      style={getColorStyle(selectedColor)}
                      priority
                    />
                  </div>
                </div>
                {/* Left View */}
                <div className={`absolute inset-0 transition-all duration-500 ${carView === 'left' ? 'opacity-100' : 'opacity-0 pointer-events-none'}` }>
                  <Image
                    src="/images/left-side.png"
                    alt={`${carColors.find((c) => c.value === selectedColor)?.name || "Red"} Lamborghini left view`}
                    fill
                    className="object-contain w-full h-full"
                    style={getColorStyle(selectedColor)}
                    priority
                  />
                </div>
                {/* Back View */}
                <div className={`absolute inset-0 transition-all duration-500 ${carView === 'back' ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex items-center justify-center` }>
                  <div className="w-full h-full flex items-center justify-center scale-135 transition-transform duration-500">
                    <Image
                      src="/images/back-side.png"
                      alt={`${carColors.find((c) => c.value === selectedColor)?.name || "Red"} Lamborghini back view`}
                      fill
                      className="object-contain w-full h-full"
                      style={getColorStyle(selectedColor)}
                      priority
                    />
                  </div>
                </div>
              </div>
              {/* Arrow Buttons on left and right, vertically centered */}
              <button
                onClick={prevView}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center z-20"
                title="Previous View"
                style={{ marginLeft: '-64px', paddingLeft: '8px', paddingRight: '8px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextView}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center z-20"
                title="Next View"
                style={{ marginRight: '-64px', paddingLeft: '8px', paddingRight: '8px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Color Dots */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
              {/* Show 3 colors: orange, purple, pink */}
              {carColors.slice(-3).map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-6 h-6 rounded-full transition-all duration-300 hover:scale-110 ${getColorDotStyle(color.value)} ${
                    selectedColor === color.value
                      ? "ring-4 ring-gray-400 ring-offset-2"
                      : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Color Name Display */}
          <div className="text-center mt-6">
            <p className="text-lg font-medium text-gray-700">
              {carColors.find((c) => c.value === selectedColor)?.name} Lamborghini
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}