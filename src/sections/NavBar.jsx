const NavBar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-999 bg-transparent backdrop-blur-xs py-6 px-52">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-arizona text-4xl">Solis</h1>

        <div className="flex flex-row gap-10 items-center">
            <div className="flex flex-row gap-8 tracking-wider">
                <a href="#">About</a>
                <a href="#">Pricing</a>
                <a href="#">Contact Us</a>
            </div>
            <a href="#" className="primary-cta">Book a Consultation</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
