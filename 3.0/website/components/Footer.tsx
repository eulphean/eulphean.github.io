let title = "© 2024 Amay Kataria, All Rights Reserved"
export default function Footer() {
    const footer = "flex justify-center fixed left-0 right-0 bottom-2 text-secondaryBright text-base";
    return (
        <>
            <div className={footer}>
                {title}
            </div>
        </>
    )
}