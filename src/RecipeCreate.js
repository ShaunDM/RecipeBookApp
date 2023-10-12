import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  };
  
  const [recipe, setRecipe] = useState(initialFormData);
  const handleChange = ({target}) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({...initialFormData});
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={recipe.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                onChange={handleChange}
                value={recipe.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                type="url"
                id="photo"
                name="photo"
                onChange={handleChange}
                value={recipe.photo}
                placeholder="URL"
              />
            </td>
            <td className="content_td">
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={recipe.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td className="content_td">
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={recipe.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
