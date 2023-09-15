export const categories = [
    "Alimentation",
    "Logement",
    "Transport",
    "Divertissement",
    "Santé",
    "Éducation",
    "Autres"
]

const SelectCategory = () => {
    return (
        <select name={'category'}>
            {
                categories.map((category, index) => <option key={index} value={category}>{category}</option>)
            }
        </select>
    )
}
export default SelectCategory;