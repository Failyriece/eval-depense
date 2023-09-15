import {useState} from "react";

//Ci-dessous un select controlée au traver d'un useState et d'une fonction de contrôle,
//la valeur de la catégorie sélectionnée est disponible dans la const "selectedCategory"
const SelectCategory = () => {
    //Tableau des catégories disponibles
    const categories = [
        "Alimentation",
        "Logement",
        "Transport",
        "Divertissement",
        "Santé",
        "Éducation",
        "Autres"
    ]

    //Etat local du component

    //Cette méthode gére l'état du component localement
    //Il s'agit d'un point de départ l'idéal serait que les informations d'une nouvelle dépense soit gérer par un reducer


    return (
        <select name={'category'}>
            {
                categories.map((category, index) => <option key={index} value={category}>{category}</option>)
            }
        </select>
    )
}
export default SelectCategory;