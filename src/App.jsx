import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SubmitRecipe from "./pages/SubmitRecipe.jsx";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    { title: "Recipe Title 1", ingredients: "Ingredients 1", instructions: "Instructions 1", image: null },
    { title: "Recipe Title 2", ingredients: "Ingredients 2", instructions: "Instructions 2", image: null },
    { title: "Recipe Title 3", ingredients: "Ingredients 3", instructions: "Instructions 3", image: null },
    { title: "Recipe Title 4", ingredients: "Ingredients 4", instructions: "Instructions 4", image: null },
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index recipes={recipes} />} />
        <Route path="/submit" element={<SubmitRecipe addRecipe={addRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
