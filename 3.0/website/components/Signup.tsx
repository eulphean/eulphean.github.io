"use client" 

import CustomButton from "./CustomButton";
import { ChangeEvent, useState } from "react";

const title = "Join the Newsletter";
const subtitle = "Meanwhile, stay up to date with me.";

enum Status {
    NONE =  0,
    SUCCESS = 1,
    ERROR = 2
}
export default function Signup () {
    const container= "flex justify-center flex-col mt-3 text-center text-secondaryBright xs:w-96 xl:w-102 2xl:w-118";
    const subtitleStyle= "text-base w-full lg:text-lg xl:text-2xl";
    const detailsContainer= "bg-primaryLight rounded-2xl p-2 mt-2 w-full flex flex-col items-center lg:p-3";
    const button = "font-bold text-base p-1 w-24 xs:p-2 lg:text-lg lg:mt-4 lg:w-32 xl:text-xl xl:36";
    const titleStyle = "font-bold text-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl";

    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(true);
    const [status, setStatus] = useState(Status.NONE);
    const onSubmit = async () => {
        const res = validateEmail(email);
        if (res) {
            const request = new Request('/api/subscribe', 
            { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ email: email}) 
            });
            
            try {
                const response = await fetch(request);
                const json = await response.json();
                if (json['id']) {
                    setStatus(Status.SUCCESS);
                } else {
                    setStatus(Status.ERROR);
                }
            } catch(error) {
                setStatus(Status.ERROR);
            }
        } else {
            setValid(false);
        }
    }

    const onTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const validateEmail = (email: string) => {
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           return true;
        }
        return false;
    }

    return (
        <div className={container}>
            <div className={titleStyle}>{title}</div>
            <div className={subtitleStyle}>{subtitle}</div>
            {   status === Status.SUCCESS ?   
                    <div className="text-base bg-green-300 p-2 m-2 text-black">Success! Please check your email to confirm your subscription.</div> :
                status === Status.ERROR ?
                    <div className="text-base bg-red-300 p-2 m-2 text-black">Error! Sorry, I couldn't subscribe you.</div> :
                status === Status.NONE ? 
                    <div className={detailsContainer}>
                        {!valid ? 
                        <div className="text-base bg-red-300 p-2 m-2 text-black">Invalid Email. Please try Again!</div>: 
                        <></>
                        }
                        <CustomInput value={email} placeholder="Email Address" onChange={onTextInput} />
                        <CustomButton onClick={onSubmit} customStyles={button} title="Sign Up"/>
                    </div> : <></>
            }
        </div>

    );
}

type CustomInputProps = {
    placeholder: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function CustomInput (props: CustomInputProps) {
    const inputStyle = "mt-2 p-1 text-white border-secondary bg-secondaryLight rounded-2xl border text-center h-10 w-full lg:text-lg lg:h-12 xl:text-xl 2xl:text-2xl";

    return(
        <input 
            className={inputStyle} 
            placeholder={props.placeholder} 
            value={props.value}
            onChange={props.onChange}
        />
    );
}