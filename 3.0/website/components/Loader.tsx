import { ReactElement } from "react";

type LoaderProps = {
    customStyles: string
}
export default function Loader(props: LoaderProps) {    
    const circles = () => {
        let divs: ReactElement<HTMLDivElement>[] = [];
        ['L', 'O', 'A', 'D', 'I', 'N' , 'G'].forEach(c => {
            divs.push(<div className="text-center text-lg bg-primaryBright text-primary m-2 p-1 w-10 rounded-full font-bold" key={c}>{c}</div>);
        });

        return divs; 
    }

    let loadingText = circles();
    const loaderStyles = "flex justify-center items-center " + props.customStyles;
    return (
        <div className={loaderStyles}>{loadingText}</div>
    );
}
