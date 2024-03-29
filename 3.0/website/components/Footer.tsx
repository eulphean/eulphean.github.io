let title = "© 2024 Amay Kataria, All Rights Reserved"
export default function Footer() {
    const footer = "flex items-center justify-center text-secondaryBright text-xs sm:text-base";
    return (
        <>
            <div className={footer}>
                {title}
            </div>
        </>
    )
}