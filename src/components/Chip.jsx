/* eslint-disable react/prop-types */
const Chip = ({ text, handleClick}) => {
    return (
        <button 
            type="button" 
            className="bg-primary rounded-3xl text-white py-2 px-5 hover:bg-primary-hover" 
            onClick={handleClick}>
                {text}
            </button>
    )
}
export default Chip