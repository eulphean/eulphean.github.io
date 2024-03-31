let title = "© 2024 Amay Kataria, All Rights Reserved"
export default function Footer() {
    const footer = "text-secondaryBright text-xs lg:text-lg";
    return (
        <>
            <div className={footer}>
                {title}
            </div>
        </>
    )
}