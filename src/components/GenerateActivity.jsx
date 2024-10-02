/* eslint-disable react/prop-types */
import Button from "./Button"
import CustomShape from "./CustomShape"
import MainImage from "./MainImage"

const GenerateActivity = ({ handleClick }) => {
    return (
        <div className='relative flex flex-col items-center justify-center gap-5'>
            <MainImage />
            <CustomShape />
            <h1 className="text-3xl font-bold uppercase text-center max-w-[300px]">trova alguna cosa a fer</h1>
            <Button type="button" text="Generar" handleClick={handleClick} />
        </div>

    )
}
export default GenerateActivity