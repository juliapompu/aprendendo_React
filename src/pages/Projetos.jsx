// import Card from "../components/Card"
// import projetos from "../data/projetos.json"

// export default function Projetos() {
//   return (
//     <section id="projetos" className="py-20 px-6 bg-gray-100">
//       <h2 className="text-3xl font-bold text-pink-600 mb-10 text-center">Projetos</h2>
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projetos.map((item, index) => (
//           <Card key={index} titulo={item.titulo} descricao={item.descricao} imagem={item.imagem} />
//         ))}
//       </div>
//     </section>
//   )
// }


// import Card from "../components/Card"
// import projetos from "../data/projetos.json"

// export default function Projetos() {
//   return (
//     <section id="projetos" className="py-20 px-6 bg-gray-100">
//       <h2 className="text-3xl font-bold text-pink-600 mb-10 text-center">Projetos</h2>
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projetos.map((item, index) => (
//           <Card
//             key={index}
//             titulo={item.titulo}
//             descricao={item.descricao}
//             imagem={item.imagem}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }


import Card from "../components/Card"
import projetos from "../data/projetos.json"

export default function Projetos() {
  return (
    <section id="projetos" className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-pink-600 mb-10 text-center">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projetos.map((item, index) => (
          <Card
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
    </section>
  )
}
