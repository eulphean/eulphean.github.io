import hammer from '../public/svg/hammer.svg'
import Image from 'next/image'

export default function Building () {
    const hammerIcon = (
        <Image 
            priority
            className='w-5 h-5 inline'
            src={hammer}
            alt={"building"}
        />
    )

    const container="flex flex-col text-secondaryBright font-istok"
    const title="font-bold text-3xl text-center md:text-7xl";
    const subtitle="text-center text-base md:text-xl";
    return (
        <>
            <div className={container}>
                <div className={title}>BUILDING</div>
                <div className={subtitle}>Currently <span>{hammerIcon}</span> the next iteration of my website.</div>
                <div className="flex mt-1 items-center w-full h-5 relative rounded-lg border border-bgSecondary bg-bgSecondaryLight">
                    <div className="absolute left-0.5 w-1/3 h-3.5 rounded-lg bg-primaryBright"/>
                </div>
            </div>
        </>
    )
}