import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
      <a href="/">Signin</a>
      <a href="/">Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
