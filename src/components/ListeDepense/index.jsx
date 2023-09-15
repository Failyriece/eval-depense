import { useDepense } from "../../context/depense"

function ListeDepense() {

    const {state} = useDepense();

    return (
        <>
        <ul>
            {
                state.map((depense, index)=>{
                    return <li key={index}>{depense.name} - {depense.price}€. Catégorie: {depense.category}</li>
                })
            }
        </ul>
        </>
    )
}

export default ListeDepense