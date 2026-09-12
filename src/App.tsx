import './App.css'
import Nav from './components/nav'
import Banner from './components/banner'
import ExploreTechnologies from './components/ExploreTechnologies/ExploreTechnologies'

function App() {
 
  return (
    <div className="container mx-auto px-20">
         <Nav></Nav>
        <Banner></Banner>
        <ExploreTechnologies></ExploreTechnologies>
    </div>
   
  )
}

export default App
