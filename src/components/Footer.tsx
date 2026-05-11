
export default function Footer() {
    return (
        <footer className="w-full h-40 text-center mt-40 p-10 font-mc 
                text-lg bg-[url('../assets/grass-border.jpg')] text-white"
        >
            <div className="grid grid-cols-2 justify-between">
                <div className="flex flex-row h-10">
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
                <div>
                    
                </div>
            </div>
        </footer>
    )
}
