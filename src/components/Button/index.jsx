import { useDepense } from '../../context/depense.jsx'
import SelectCategory from '../SelectCategory';



function Button() {
    const { state, dispatch } = useDepense();

    const test = (e) => {
        e.preventDefault();
        const raton = e.target;
        dispatch({ type: 'add', name: raton.newname.value, price: raton.newnumber.value, category: raton.category.value });
        raton.newname.value = '';
        raton.newnumber.value = '';
        console.log(state)
    }
    
    return (
        <>
            <form onSubmit={test}>
                <input type="text" name="newname" />
                <input type="number" name="newnumber" />
                <SelectCategory/>
                <input type="submit" value="Go" />
            </form>
        </>
    )
}

export default Button
