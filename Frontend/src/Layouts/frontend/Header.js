import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/logo.webp";
import user from "../../assets/Logo/user.png";
import dienthoai from "../../assets/Logo/dienthoai.png";
import giohang from "../../assets/Logo/giohang.png";
import MainHD from "./MainHD";

const Header = () => {
    return (
        <>
            <section className="header border-bottom">
                <div >
                    <img style={{ width: "100%" }} src="https://bizweb.dktcdn.net/100/355/156/themes/894790/assets/bg_banner_top.png?1665392028818"></img>
                </div>
                <div className="container ">

                    <div className="row">
                        <div className="col-md-2 my-2">
                            <Link to="">
                                <img src="https://bizweb.dktcdn.net/100/355/156/themes/894790/assets/logo.png?1676262889168" className="img-fluid" alt="logo" />
                            </Link>
                        </div>
                        <div className="col-md-4 py-4">
                            <form action="/search" method="get" className="header-search-form input-group search-bar m-2" role="search">
                                <input name="query" required className="tim-kiem  form-control" placeholder="Tìm sản phẩm..." autocomplete="off" type="text" />

                                <button type="submit" className="btn icon-fallback-text border bg-light" aria-label="Tìm kiếm" title="Tìm kiếm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" ></path>
                                    </svg>
                                </button>
                                <ul className="ul-header">
                                    <div className="container border bg-white" style={{width:"400px", height:"80px"}}>
                                        <div className="row">
                                            <div className="col-4">
                                                <img className="mt-3"  src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/dungbaogiodianmotminhtaiban1.jpg?v=1558509664663" style={{height:"50px", width:"40px"}}></img>
                                            </div>
                                            <div className="col-8 mt-3">
                                                <p className="text-black">Đừng bao giờ đi ăn 1 mình</p>
                                                <p className="text-danger">71.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </ul>

                            </form>


                        </div>



                        <div className="col-md-6 ">

                            <div className="container pt-4">
                                <div className="row">
                                    <Link id="cs" className="nav-link  text-black  my-2 col-2" to="/dang-nhap"><a>Đăng nhập</a></Link>
                                    <Link id="cs" className="nav-link  text-black  my-2 col-2" to="/dang-ky"><a>Đăng ký</a></Link>
                                    <Link id="cs" className="nav-link  text-black  my-2 col-2" to="/gio-hang">
                                        <img src="https://th.bing.com/th/id/R.7223ffdfbc105f28e28c1a397e349f7a?rik=E%2fEWsBuFt0IqQw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fshopping-cart-icon-transparent-70.png&ehk=d2fZs9KimhbpN5mzb2eYvSdAqD9LPT6ppHV3YKm20mU%3d&risl=&pid=ImgRaw&r=0" style={{ height: "30px", width: "30px" }}></img>
                                        <a>Giỏ hàng</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>
            <section className="header bg-black py-2 ">
                <div className="container">
                    <section className="Header-nav">
                        <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
                            <div className="container-fluid">

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className=" menu collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul id="menu-ul" className=" navbar-nav">
                                        <li className="nav-item me-4">
                                            <a ><Link className="nav-link active" aria-current="page" to="/">Trang chủ</Link></a>
                                        </li>
                                        <li className="nav-item me-4">
                                            <Link className="nav-link active" aria-current="page" to="#">Giới thiệu</Link>
                                        </li>



                                        <li className="nav-item">
                                            <Link className="nav-link active " aria-current="page" to="/danh-gia">Đánh giá sách</Link>
                                        </li>
                                        {/* <MainHD/> */}


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </section>
                </div>
            </section>
        </>

    );
}
export default Header;