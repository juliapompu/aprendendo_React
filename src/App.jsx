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
function App(){
  let message = "Olá Mundo!";
  return(
    <div>
      <h1>{message}</h1>

     <button onClick={{() => {
        message = "Olá foi mudado!";
        }>
        Muda mensagem
        </button>
    </div>
   )
 }

export default App
