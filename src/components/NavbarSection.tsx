const NavbarSection = () => {
  return (
    <>
      <div className="navbar hidden lg:flex lg:fixed z-1 bg-black/50 text-white shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Experience</a></li>
            <li><a>Project</a></li>
            <li><a>Resume</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  )
}

export default NavbarSection