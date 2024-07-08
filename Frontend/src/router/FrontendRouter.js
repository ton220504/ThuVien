import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Product from "../pages/frontend/Product";
import ProductCategory from "../pages/frontend/ProductCategory";
import ProductDetail from "../pages/frontend/ProductDetail";
import DangNhap from "../pages/frontend/DangNhap"
import DangKy from "../pages/frontend/DangKy";
import GioHang from "../pages/frontend/GioHang";
import DanhGia from "../pages/frontend/DanhGia";
import ChiTiet from "../pages/frontend/ChiTiet";
import ThanhToan from "../pages/frontend/ThanhToan";
import muon from "../pages/frontend/muon";

const FrontendRouter =[
    {path: "/", component: Home},
    {path: "/san-pham", component: Product},
    {path: "/san-pham:slug", component: ProductCategory},
    {path: "/chi-tiet-san-pham:slug", component: ProductDetail},
    {path: "/lien-he", component: Contact},
    {path: "/dang-nhap", component: DangNhap},
    {path: "/dang-ky", component: DangKy},
    {path: "/gio-hang", component: GioHang},
    {path: "/danh-gia", component: DanhGia},
    {path: "/chi-tiet", component: ChiTiet},
    {path: "/thanh-toan", component: ThanhToan},
    {path: "/muon", component: muon},

];
export default FrontendRouter;