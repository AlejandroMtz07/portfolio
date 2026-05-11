import { useNavigate } from "react-router-dom"

type ButtonProps = {
    type: string
    text: string,
    path: string
}

//TODO Use the path prop to redirect to another page using React Router DOM
export default function Button({ text, path, type }: ButtonProps) {

    const navigate = useNavigate();

    const sendMailOrRedirect = () => {
        if (type == "button") {
            navigate(path)
        }
        if (type == "mail") {
            window.location.href = "mailto:alejandro23juanito@gmail.com";
        }
    }

    return (

        <div className="font-mc text-center w-52 h-8 text-white text-xl hover:cursor-pointer 
        bg-[url('../assets/button_bg_image.png')] hover:bg-[url('../assets/button_hover_image.png')]
        border-t-[#AAA] border-l-[#AAA] border-b-[#565656] border-r-[#565656] border-4 
        outline-2 outline-black" onClick={sendMailOrRedirect}
        >
            {text}
        </div>

    )
}
