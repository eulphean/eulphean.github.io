import CustomButton from "./CustomButton";

const title = "Meanwhile, stay upto date with my newsletter.";
export default function Signup () {
    const container= "font-istok flex justify-center flex-col mt-3 text-center text-secondaryBright xs:w-96";
    const subtitle= "text-base md:text-xl w-full";
    const detailsContainer= "bg-primaryLight rounded-2xl p-2 mt-2 w-full flex flex-col items-center";
    const button = "font-bold text-base p-1 w-24 xs:p-2 md:text-xl ";
    return (
        <div className={container}>
            <div className={subtitle}>{title}</div>
            <div className={detailsContainer}>
                <CustomInput placeholder="Email" />
                <CustomButton customStyles={button} title="Sign Up"/>
            </div>
        </div>

    )
}

type CustomInputProps = {
    placeholder: string
}

function CustomInput (props: CustomInputProps) {
    const inputStyle = "mt-2 p-1 text-white border-secondary bg-secondaryLight rounded-2xl border text-center h-10 w-full";
    return(
        <input 
            className={inputStyle} 
            placeholder={props.placeholder} 
        />
    );
}