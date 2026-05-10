
type ButtonProps = {
    text: string,
    path: string
}

export default function Button({ text, path }: ButtonProps) {
    return (
        <div className="font-mc text-center w-52 h-10
            bg-[#8b8b8b] text-white border-black
            text-xl shadow-lg border-2
            hover:bg-[#305c76] hover:cursor-pointer rounded-md"
        >
            {text}
        </div>
    )
}
