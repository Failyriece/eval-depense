import { useDepense } from "../../context/depense"

function AllDepense() {
    const { state } = useDepense();

    const test = state.reduce((acc, obj) => {return acc + obj.price}, 0);
    console.log(test)
    return (
        <>
            Dépenses total: {test}
        </>
    )
}

export default AllDepense


// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// const calcTotal = (state) => {
//     return state.reduce((accumulator, ...price) => {
//         return accumulator + state.totalPrice;}, 0);};