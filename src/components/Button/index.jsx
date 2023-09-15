import { useDepense } from '../../context/depense.jsx'



function Button() {
    const { state, dispatch } = useDepense();

    const test = (e) => {
        e.preventDefault();
        const raton = e.target;
        dispatch({ type: 'add', name: raton.newname.value, price: raton.newnumber.value, category: 'Autres' });
    }
    
    return (
        <>
            <form onSubmit={test}>
                <input type="text" name="newname" />
                <input type="number" name="newnumber" />
                <input type="submit" value="Go" />
            </form>
        </>
    )
}

export default Button
