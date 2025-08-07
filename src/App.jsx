import Navbar from "./Components/Navigate/navigate.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Programs from "./Components/Programs/Program.jsx"
import Title from "./Components/Title/title.jsx"
import About from "./Components/ABOUT/about.jsx"
function App(){
return <div>
        <Navbar/>  
        <Hero/>
        <br/>
        <Title name={"Who We Are...??"} />
        <Programs/>
        <About/>
    </div>
}

export default App