import { useDepense } from '../../context/depense.jsx'
import SelectCategory from '../SelectCategory';



function Button() {
    const {dispatch } = useDepense();

    const test = (e) => {
        e.preventDefault();
        const raton = e.target;
        if(raton.newname.value == '' || raton.newnumber.value == ''){
            return
        }
        dispatch({ type: 'add', name: raton.newname.value, price: Number(raton.newnumber.value), category: raton.category.value });
        raton.newname.value = '';
        raton.newnumber.value = '';
    }
    
    return (
        <>
            <form onSubmit={test}>
                <input type="text" name="newname" placeholder='Nom de la dépense'/>
                <input type="number" name="newnumber" placeholder='Prix (ex: 100)' />
                <SelectCategory/>
                <input type="submit" value="Valider" />
            </form>
        </>
    )
}

export default Button
