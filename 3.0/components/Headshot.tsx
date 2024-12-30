import Image from 'next/image'

type HeadshotProps = {
    children: ReactNode,
    style: string,
    src: string,
    width: number,
    height: number
}
export default function Headshot (props: HeadshotProps) {
    return (
        <>
            <Image
                src={props.src}
                alt="Headshot"
                width={props.width}
                height={props.height}
                style={{ objectFit: 'cover'}}
                className={props.style}
            />
            {props.children}
        </>


    )
}