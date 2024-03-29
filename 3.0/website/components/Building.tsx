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
    const title="font-bold text-3xl text-center";
    const subtitle="text-center text-base";
    return (
        <>
            <div className={container}>
                <div className={title}>BUILDING</div>
                <div className={subtitle}>Currently <span>{hammerIcon}</span> the next iteration of my website.</div>
                <div className="flex rounded-lg border border-bgSecondary bg-bgSecondaryLight mt-1 items-center relative h-5 w-full xs:w-80">
                    <div className="absolute left-0.5 w-1/3 h-3.5 rounded-lg bg-primaryBright"/>
                </div>
            </div>
        </>
    )
}