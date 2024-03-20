type CustomButtonProps = {
    title: string,
    customStyles?: string,
    onClick(event: React.MouseEvent): void
}

export default function CustomButton (props: CustomButtonProps) { 
    const defaultStyles = "rounded-lg font-istok p-1 text-secondaryBright font-bold w-20 mt-3 bg-secondary"
    const newStyles = defaultStyles + " " + props.customStyles;

    return (
        <button className={newStyles}
            onClick={props.onClick}>
            {props.title}
        </button>
    )
}