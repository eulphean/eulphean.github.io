export default function Signup () {
    return (
        <div className="flex flex-col">
            <div>Meanwhile, stay up to date with my newsletter</div>
            <div className="bg-white w-52 flex flex-col items-center">
                <input className="w-full border text-center" placeholder="Name" />
                <input className="w-full border text-center" placeholder="Email" />
                <button className="bg-black text-white w-20">Sign Up</button>
            </div>
        </div>

    )
}