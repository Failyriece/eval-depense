import { useDepense } from '../../context/depense.jsx'
import SelectCategory from '../SelectCategory';



function Button() {
    const { dispatch } = useDepense();
    const regex = /^\d+(?:[.]\d+)?$/

    const ajout = (e) => {
        e.preventDefault();
        const raton = e.target;
        const test = regex.test(raton.newnumber.value)
        if (raton.newname.value == '') {
            alert('Veuillez rentrer un nom');
            return
        } else if (raton.newnumber.value == '') {
            alert('Veuillez rentrer un chiffre');
            return
        } else if (!test) {
            alert('Ne rentrez qu\'un chiffre avec un point au besoin');
            return
        }

        dispatch({ type: 'add', name: raton.newname.value, price: Number(raton.newnumber.value), category: raton.category.value });
        raton.newname.value = '';
        raton.newnumber.value = '';
    }

    return (
        <>
            <form onSubmit={ajout}>
                <input type="text" name="newname" placeholder='Nom de la dépense' />
                <input type="text" name="newnumber" placeholder='Prix (ex: 42.69)' />
                <SelectCategory />
                <input type="submit" value="Ajouter" />
            </form>
        </>
    )
}

export default Button
