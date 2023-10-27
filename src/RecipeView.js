import React from "react";
function RecipeView({recipe, deleteRecipe}) {
  console.log(deleteRecipe);
  const {name, cuisine, photo, ingredients, preparation} = recipe;

  return(
    <tr>
      <td><p>{name}</p></td>
      <td><p>{cuisine}</p></td>
      <td className="img_td"><img src={photo} alt=""/></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td><button name="delete" className="button" onClick={deleteRecipe}>Delete</button></td>
    </tr>
  );
}

export default RecipeView;