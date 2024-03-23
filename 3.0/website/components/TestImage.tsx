import Image from "next/image";
export default function TestImage () {
    return (
        <Image className='absolute left-0' width={100} height={200} fill={false} alt="hello" src="/lion.png" />
    );
}