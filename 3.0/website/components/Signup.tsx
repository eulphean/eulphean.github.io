import CustomButton from "./CustomButton";

const title = "Meanwhile, stay upto date with my newsletter.";
export default function Signup () {
    const container= "font-istok flex flex-col mt-3 text-center text-secondaryBright md:w-2/3 md:mt-12";
    const subtitle= "text-base md:text-xl w-full";
    const detailsContainer= "bg-primaryLight rounded-2xl p-2 mt-2 w-full flex flex-col items-center md:w-4/5";
    const button = "font-bold text-base p-1 w-24 md:text-xl ";
    return (
        <div className={container}>
            <div className={subtitle}>{title}</div>
            <div className={detailsContainer}>
                <CustomInput placeholder="Name" />
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
    const inputStyle = "w-full mt-2 p-1 text-white border-secondary bg-secondaryLight rounded-2xl border text-center h-6 md:w-2/3";
    return(
        <input 
            className={inputStyle} 
            placeholder={props.placeholder} 
        />
    );
}