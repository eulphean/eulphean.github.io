
const title = "Meanwhile, hear from me once a quarter.";
export default function Signup () {
    return (
        <div className="flex flex-col mt-6 font-istok">
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
            className="w-full mt-2 p-1 text-white border-bgSecondary bg-bgSecondaryLight rounded-2xl border text-center" placeholder={props.placeholder} 
        />
    )
}

type CustomButtonProps = {
    title: string
}
function CustomButton (props: CustomButtonProps) {
    return (
        <button className="rounded-lg p-1 text-white w-20 mt-2 bg-bgSecondary">{props.title}</button>
    )
}