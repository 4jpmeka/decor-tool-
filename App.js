
import React, { useState } from "react";
import DecorTypeSelector from "./components/DecorTypeSelector";
import StyleSelector from "./components/StyleSelector";
import ColorPicker from "./components/ColorPicker";
import Preview from "./components/Preview";
import QuoteForm from "./components/QuoteForm";

function App() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedStyle("");
  };

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  const handleToggleColor = (color) => {
    const alreadySelected = selectedColors.find(c => c.name === color.name);
    if (alreadySelected) {
      setSelectedColors(selectedColors.filter(c => c.name !== color.name));
    } else if (selectedColors.length < 5) {
      setSelectedColors([...selectedColors, color]);
    } else {
      alert("You can select up to 5 colors.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🎈 Decor Customization Tool</h1>
      <DecorTypeSelector selectedType={selectedType} onSelectType={handleTypeChange} />
      <StyleSelector selectedType={selectedType} selectedStyle={selectedStyle} onSelectStyle={handleStyleChange} />
      <ColorPicker selectedColors={selectedColors} onToggleColor={handleToggleColor} />
      <Preview decorType={selectedType} style={selectedStyle} colors={selectedColors} />
      <QuoteForm selectedType={selectedType} selectedStyle={selectedStyle} selectedColors={selectedColors} />
    </div>
  );
}

export default App;
