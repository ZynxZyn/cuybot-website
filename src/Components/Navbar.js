import './css/style.css';

function Navbar() {
    return (
        <div className="Navbar">
            <header id="header">
            <h1 class="logo">CuyBot</h1>
            <nav>
                <ul class="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Commands</a></li>
                    <li><a href="#">Developers</a></li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default Navbar;