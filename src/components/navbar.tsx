function Navbar() {
  return (
    <header className="py-3 rounded-3xl mt-3 flex items-center justify-between">
      <h1 className="font-bold text-2xl">Ibra.dev</h1>
      <nav className="flex gap-x-8 font-bold transition-all">
        <a className="hover:underline cursor-pointer">Proyectos</a>
        <a className="hover:underline cursor-pointer">Experiencia</a>
        <a className="hover:underline cursor-pointer">Habilidades</a>
        <a className="hover:underline cursor-pointer">Contacto</a>
      </nav>
    </header>
  );
}
export default Navbar;
