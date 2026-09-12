import logo from '../assets/logo.png'
function Nav() {
    
    return(
        <nav className="sticky top-0 z-50 bg-amber-50">

            <div className="flex justify-around">
            <div>
                 <img src={logo} alt="logo-Image"></img>
            </div>
           
            <div>
                <ul className="flex gap-7">
                     <li><a href="#home">Home</a></li>
                    <li><a href="#technologies">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
    
              </div>
              <div className="flex gap-2">
                 <button className="text-gray-400 hover:text-primary">Sign In</button>
                 <button className="btn btn-secondary rounded-full">Sign Up</button>
              </div>
             
     </div>
        </nav>
        
    )
}
export default Nav;