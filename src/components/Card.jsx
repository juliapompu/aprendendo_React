// export default function Card({ titulo, descricao, imagem }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden">
//       <img src={imagem} alt={titulo} className="w-full h-40 object-cover" />
//       <div className="p-4">
//         <h3 className="font-bold text-lg text-pink-600">{titulo}</h3>
//         <p className="text-gray-600 mt-2">{descricao}</p>
//       </div>
//     </div>
//   )
// }


export default function Card({ titulo, descricao, imagem }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={imagem} alt={titulo} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg text-pink-600">{titulo}</h3>
        <p className="text-gray-600 mt-2">{descricao}</p>
      </div>
    </div>
  )
}
