let title = "© 2024 Amay Kataria, All Rights Reserved"
export default function Footer() {
    const footer = "text-secondaryBright text-xs lg:text-lg xl:text-xl";
    return (
        <>
            <div className={footer}>
                {title}
            </div>
        </>
    )
}