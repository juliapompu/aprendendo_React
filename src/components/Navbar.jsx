// export default function Navbar() {
//   return (
//     <nav className="bg-pink-600 text-white px-6 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Elas no Jogo</h1>
//       <ul className="flex gap-6">
//         <li><a href="#home" className="hover:text-pink-200">Início</a></li>
//         <li><a href="#sobre" className="hover:text-pink-200">Sobre</a></li>
//         <li><a href="#projetos" className="hover:text-pink-200">Projetos</a></li>
//         <li><a href="#contato" className="hover:text-pink-200">Contato</a></li>
//       </ul>
//     </nav>
//   )
// }


export default function Navbar() {
  return (
    <nav className="bg-pink-600 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">Elas no Jogo</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-pink-200">Início</a></li>
        <li><a href="#sobre" className="hover:text-pink-200">Sobre</a></li>
        <li><a href="#projetos" className="hover:text-pink-200">Projetos</a></li>
        <li><a href="#contato" className="hover:text-pink-200">Contato</a></li>
      </ul>
    </nav>
  )
}
