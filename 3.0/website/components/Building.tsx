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

    const container="flex flex-col items-center text-secondaryBright"
    const title="font-bold text-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl";
    const subtitle="text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl";
    return (
        <>
            <div className={container}>
                <div className={title}>BUILDING</div>
                <div className={subtitle}>Currently <span>{hammerIcon}</span> the next iteration of my website.</div>
                <div className="flex rounded-lg border border-bgSecondary bg-bgSecondaryLight mt-1 items-center relative h-5 w-full xs:w-80 lg:w-88 lg:mt-2 lg:h-7 lg:rounded-xl 2xl:w-110">
                    <div className="absolute left-0.5 w-1/3 h-3.5 rounded-lg bg-primaryBright lg:h-5"/>
                </div>
            </div>
        </>
    )
}