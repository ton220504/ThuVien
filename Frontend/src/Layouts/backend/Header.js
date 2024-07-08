import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="Header">
            <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                           

                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/reader">Quản lý đọc giả</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/orders">Quản lý đơn hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/function">Quản lý mượn trả sách</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/products">Quản lý sách</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/users">Quản lý tài khoản</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/statistics">Thống kê báo cáo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}
export default Header;