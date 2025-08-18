import { ReactElement } from "react";

type LoaderProps = {
    customStyles: string
}
export default function Loader(props: LoaderProps) {    
    const circles = () => {
        let divs: ReactElement<HTMLDivElement>[] = [];
        ['L', 'O', 'A', 'D', 'I', 'N' , 'G'].forEach(c => {
            divs.push(<div className="text-center text-sm bg-primaryBright text-primary m-2 p-1 w-10 rounded-full font-bold lg:text-lg" key={c}>{c}</div>);
        });

        return divs; 
    }

    let loadingText = circles();
    const baseStyles = "flex justify-center items-center "
    const loaderStyles = baseStyles + props.customStyles;
    return (
        <div className={loaderStyles}>{loadingText}</div>
    );
}
