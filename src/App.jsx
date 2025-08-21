// function App(){
//   let message = "Olá Mundo!";
//   return(
//     <div>
//       <h1>{message}</h1>


//       <button>Muda mensagem</button>
//     </div>
//   )
// }

//export default App;

//states
// function App(){
//   let message = "Olá Mundo!";
//   return(
//     <div>
//       <h1>{message}</h1>

//      <button onClick={{() => {
//         message = "Olá foi mudado!";
//         }>
//         Muda mensagem
//         </button>
//     </div>
//    )
//  }

// export default App


import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato"

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Home />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
