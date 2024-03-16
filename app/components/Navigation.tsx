const Navigation = () => {
    return (
      <ul className="flex border-b bg-gray-800"> {/* Agregar bg-gray-800 para el fondo gris */}
        <li className="mr-1">
          <a className=" inline-block py-2 px-4 text-blue-500 bg-gray-800 hover:text-blue-800 font-semibold " href="./home">Home</a>
        </li>
        <li className="mr-1">
          <a className=" inline-block py-2 px-4 text-blue-500 bg-gray-800 hover:text-blue-800 font-semibold " href="./">Inicio</a>
        </li>
        <li className="mr-1">
          <a className=" inline-block py-2 px-4 text-blue-500 bg-gray-800 hover:text-blue-800 font-semibold " href="./acerca">Acerca</a>
        </li>
        <li className="mr-1">
          <a className=" inline-block py-2 px-4 text-gray-400 bg-gray-800 hover:text-purple-600 font-semibold " href="./contacto">Contacto</a>
        </li>
      </ul>
    );
  };
  
  export default Navigation;