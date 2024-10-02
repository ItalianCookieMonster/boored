/* eslint-disable react/prop-types */
const Chip = ({ text, handleClick}) => {
    return (
        <button 
            type="button" 
            className="bg-accent rounded-3xl py-2 px-5 hover:bg-primary hover:text-white" 
            onClick={handleClick}>
                {text}
        </button>
    )
}
export default Chip