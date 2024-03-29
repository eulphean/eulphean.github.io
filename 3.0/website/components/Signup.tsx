import CustomButton from "./CustomButton";

const title = "Meanwhile, stay up to date with my newsletter.";
export default function Signup () {
    const container= "flex justify-center flex-col mt-3 text-center text-secondaryBright xs:w-96 xl:w-102 2xl:w-118";
    const subtitle= "text-base w-full lg:text-lg xl:text-2xl";
    const detailsContainer= "bg-primaryLight rounded-2xl p-2 mt-2 w-full flex flex-col items-center lg:p-3";
    const button = "font-bold text-base p-1 w-24 xs:p-2 lg:text-lg lg:mt-4 lg:w-32 xl:text-xl xl:36";
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
    const inputStyle = "mt-2 p-1 text-white border-secondary bg-secondaryLight rounded-2xl border text-center h-10 w-full lg:text-lg lg:h-12 xl:text-xl 2xl:text-2xl";
    return(
        <input 
            className={inputStyle} 
            placeholder={props.placeholder} 
        />
    );
}