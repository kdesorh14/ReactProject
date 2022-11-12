// component - a template to return JSX
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Thy Blog</h1>
      <div className="='links">
      <a href='/'>Home</a>
      <a href='/create'>New Blogeth</a>
      </div>
      

    </nav>
  );
}
 
export default Navbar;