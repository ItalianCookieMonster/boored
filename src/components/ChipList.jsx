/* eslint-disable react/prop-types */
import Chip from "./Chip"

const ChipList = ({ chipList, handleChipClick, selectedFilters }) => {
    return (
        <ul className="flex flex-wrap gap-2 items-center justify-center w-[80%]">
            {
                chipList.map(chip => <li key={chip.id}>
                    <Chip 
                        text={chip.text} 
                        handleClick={() =>handleChipClick(chip.filter)} 
                        selected={selectedFilters === chip.text} 
                        />
                </li>)
            }
        </ul>
    )
}
export default ChipList