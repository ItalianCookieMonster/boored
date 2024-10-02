/* eslint-disable react/prop-types */
const Button = ({ type, text, handleClick }) => {
    return (
        <button 
            type={type} 
            onClick={handleClick}
            className="bg-secondary text-white rounded-2xl px-8 py-4 hover:bg-secondary-hover"
            >{text}</button>
    )
}
export default Button