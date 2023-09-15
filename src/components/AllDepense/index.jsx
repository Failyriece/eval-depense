import { useDepense } from "../../context/depense"
import { categories } from "../SelectCategory";

function AllDepense() {
    const { state } = useDepense();

    const filtre = (filt) => {
        const moneyWaste = filt == '' ? state: state.filter((depense) => depense.category == filt); 
        return moneyWaste.reduce((acc, obj) => { return acc + obj.price }, 0);
    }

    return (
        <>
            <div id='allDepense'>
                    <p>Dépenses total: {filtre('')}€</p>
                    {categories.map((category, index) => {
                       return (<p>{category}: {filtre(category)}€</p>)
                    })}
            </div>
        </>
    )
}

export default AllDepense