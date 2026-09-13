import logo from "../assets/logo.png"

function Footer() {

    return (
        <div className="mt-35 mb-25 flex">
            <div className="flex-1">
                <img src={logo}></img>
                <p className="my-4 text-gray-600">Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <div className="flex gap-2 font-semibold text-gray-600">
                    <p><a href="#github">Github</a></p>
                    <p><a href="#twitter">Twitter</a></p>
                    <p><a href="#linkedIn">Linkedin</a></p>
                </div>

            </div>

            <div className="flex gap-30 mx-35">
           <div>

                    <h1 className="font-semibold text-black">PRODUCT</h1>
                    <div className="text-gray-600 my-4">
                        <p><a href="#home">Home</a></p>
                        <p><a href="#technologies">Technologies</a></p>
                        <p><a href="Projects">Projects</a></p>

                    </div>

                </div>

                <div>

                    <h1 className="font-semibold text-black">COMPANY</h1>
                    <div className="text-gray-600 my-4">
                        <p><a href="about">About</a></p>
                        <p><a href="contacts">Contacts</a></p>
                        <p><a href="careers">Careers</a></p>

                    </div>

                </div>

                <div>

                    <h1 className="font-semibold text-black">LEGAL</h1>
                    <div className="text-gray-600 my-4">
                        <p><a href="#privacyPolicy">Privacy Policy</a></p>
                        <p><a href="#termsofservice">Terms of Service</a></p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;