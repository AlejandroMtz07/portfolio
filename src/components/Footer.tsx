
export default function Footer() {
    return (
        <footer className="w-full h-32 text-center mt-40 p-10 font-mc 
                text-lg bg-[url('../assets/grass-border.jpg')] text-white flex items-center justify-center"
        >
            <div className="flex flex-row lg:gap-10 gap-3">
                <div className="flex h-10">
                    <a href="https://www.facebook.com/alejandro.martinez.693463"
                        rel="noopener noreferrer" target="_blank" className="h-10"
                    >
                        <img src="../assets/icons/facebook_icon.png" alt="Facebook icon" className="h-10" />
                    </a>
                    <a href="https://www.instagram.com/ale.mtz237/"
                        rel="noopener noreferrer" target="_blank"
                    >
                        <img src="../assets/icons/instagram_icon.png" alt="Instagram icon" className="h-10" />
                    </a>
                    <a href="https://github.com/AlejandroMtz07"
                        rel="noopener noreferrer" target="_blank"
                    >
                        <img src="../assets/icons/github_icon.png" alt="Instagram icon" className="h-10" />
                    </a>
                </div>
                <div className="border-l-black border-l-2 flex items-center 
                    align-middle text-black text-2xl"
                >
                    <p className="lg:ml-10 ml-2">Juan Alejandro Santos Martinez</p>
                </div>
            </div>
        </footer>
    )
}
