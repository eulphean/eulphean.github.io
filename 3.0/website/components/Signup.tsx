import CustomButton from "./CustomButton";

const title = "Meanwhile, stay upto date with my newsletter.";
export default function Signup () {
    return (
        <div className="flex flex-col mt-6 font-istok text-secondaryBright md:w-2/3 md:mt-12">
            <div className="text-base md:text-xl w-full">{title}</div>
            <div className="bg-primaryLight rounded-2xl p-4 mt-4 w-full flex flex-col items-center md:w-4/5">
                <CustomInput placeholder="Name" />
                <CustomInput placeholder="Email" />
                <CustomButton title="Sign Up" customStyles="font-bold text-xl p-2 w-32" />
            </div>
        </div>

    )
}

type CustomInputProps = {
    placeholder: string
}

function CustomInput (props: CustomInputProps) {
    return(
        <input 
            className="w-full mt-3 p-1 text-white border-secondary bg-secondaryLight rounded-2xl border text-center h-12 md:w-2/3 " 
            placeholder={props.placeholder} 
        />
    )
}