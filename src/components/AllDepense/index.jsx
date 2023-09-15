import { useDepense } from "../../context/depense"

function AllDepense() {
    const { state } = useDepense();

    const depenses = state.reduce((acc, obj) => { return acc + obj.price }, 0);

    const filtre = (filt) => {
        return state.filter((depense) => depense.category == filt).reduce((acc, obj) => { return acc + obj.price }, 0);
    }
    return (
        <>
            <div id='allDepense'>
                <div>
                    <p>Dépenses total: {depenses}</p>
                    <p>Dépenses alimentaire: {filtre('Alimentation')}</p>
                    <p>Dépenses de logement: {filtre('Logement')}</p>
                    <p>Dépenses de tranport: {filtre('Transport')}</p>
                </div>
                <div>
                    <p>Dépenses divertissement: {filtre('Divertissement')}</p>
                    <p>Dépenses santé: {filtre('Santé')}</p>
                    <p>Dépenses éducative: {filtre('Éducation')}</p>
                    <p>Dépenses autres: {filtre('Autres')}</p>
                </div>
            </div>
        </>
    )
}

export default AllDepense