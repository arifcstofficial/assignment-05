import logo from "../assets/logo.png"

function Footer() {

    return (
        <div className="mt-35 mb-25 flex">
            <div className="flex-1">
                <img src={logo}></img>
                <p className="my-4 text-gray-600">Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <div className="flex gap-2 font-semibold text-gray-600">
                    <p>Github</p>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                </div>

            </div>

            <div className="flex gap-30 mx-35">
           <div>

                    <h1 className="font-semibold text-black">PRODUCT</h1>
                    <div className="text-gray-600 my-4">
                        <p>Home</p>
                        <p>Technologies</p>
                        <p>Projects</p>

                    </div>

                </div>

                <div>

                    <h1 className="font-semibold text-black">COMPANY</h1>
                    <div className="text-gray-600 my-4">
                        <p>About</p>
                        <p>Contacts</p>
                        <p>Careers</p>

                    </div>

                </div>

                <div>

                    <h1 className="font-semibold text-black">LEGAL</h1>
                    <div className="text-gray-600 my-4">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;