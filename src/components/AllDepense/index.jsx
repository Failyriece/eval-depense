import { useDepense } from "../../context/depense"

function AllDepense() {
    const { state } = useDepense();

    const test = state.reduce((acc, obj) => {return acc + obj.price}, 0);

    const filtre = (filt) => {
        return state.filter((depense) => depense.category == filt).reduce((acc, obj) => {return acc + obj.price}, 0);
    }
    console.log(test)
    return (
        <>
            Dépenses total: {test}
            Dépenses alimentaire: {filtre('Alimentation')}
            Dépenses de logement: {filtre('Logement')}
            Dépenses de tranport: {filtre('Transport')}
            Dépenses divertissement: {filtre('Divertissement')}
            Dépenses santé: {filtre('Santé')}
            Dépenses éducative: {filtre('Éducation')}
            Dépenses autres: {filtre('Autres')}
        </>
    )
}

export default AllDepense