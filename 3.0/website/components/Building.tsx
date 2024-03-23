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
    return (
        <>
            <div className="flex flex-col font-istok mt-4 text-secondaryBright md:mt-0 md:w-2/3">
                <div className="text-3xl font-bold md:text-7xl">BUILDING</div>
                <div className="text-base md:text-xl">Currently <span>{hammerIcon}</span> the next iteration of my next website.</div>
                <div className="flex mt-1 items-center w-full h-5 relative rounded-lg border border-bgSecondary bg-bgSecondaryLight md:w-3/4">
                    <div className="absolute left-0.5 w-1/5 h-3.5 rounded-lg bg-brightPrimary"/>
                </div>
            </div>
        </>
    )
}