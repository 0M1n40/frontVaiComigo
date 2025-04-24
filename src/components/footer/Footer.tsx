import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="bg-[#0D334D] text-white py-6">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-sm">
                        <p>© {data} VaiComigo! All rights reserved.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-sm">Acesse nossas redes sociais</p>
                        <div className="flex gap-2">
                            <a href="https://www.linkedin.com/school/generationbrasil/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={24} weight="light" />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramLogo size={24} weight="light" />
                            </a>
                            <a href="https://www.facebook.com/seu_usuario" target="_blank" rel="noopener noreferrer">
                                <FacebookLogo size={24} weight="light" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
