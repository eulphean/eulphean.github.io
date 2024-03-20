import CustomButton from "./CustomButton";

const title = "Meanwhile, hear from me once a quarter.";
export default function Signup () {
    return (
        <div className="flex flex-col mt-6 font-istok text-secondaryBright">
            <div className="text-base">{title}</div>
            <div className="bg-primaryLight rounded-lg p-4 mt-3 w-full flex flex-col items-center">
                <CustomInput placeholder="Name" />
                <CustomInput placeholder="Email" />
                <CustomButton title="Sign Up" />
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
            className="w-full mt-2 p-1 text-white border-secondary bg-secondaryLight rounded-2xl border text-center" placeholder={props.placeholder} 
        />
    )
}