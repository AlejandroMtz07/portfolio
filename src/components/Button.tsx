
type ButtonProps = {
    text: string,
    path: string
}

export default function Button({ text, path }: ButtonProps) {
    console.log(path);
    return (
        <div className="bg-[#8b8b8b] w-52 h-10 text-white font-mc text-center
        text-xl shadow-lg border-2 border-black hover:bg-[#365b71] hover:cursor-pointer"
        >
            {text}
        </div>
    )
}
