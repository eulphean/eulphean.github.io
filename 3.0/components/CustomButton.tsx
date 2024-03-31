import React, { forwardRef } from "react";
type CustomButtonProps = {
    title: string,
    customStyles?: string,
    onClick(event: React.MouseEvent): void,
    onMouseEnter?: React.MouseEventHandler,
    onMouseLeave?: React.MouseEventHandler
}

const CustomButton = React.forwardRef <HTMLButtonElement, CustomButtonProps>((props, ref) => { 
    const defaultStyles = "rounded-lg font-istok p-1 text-secondaryBright bg-secondary"
    const newStyles = defaultStyles + " " + props.customStyles;

    return (
        <button 
            ref={ref}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={newStyles}
            onClick={props.onClick}>
            {props.title}
        </button>
    )
});

export default CustomButton;