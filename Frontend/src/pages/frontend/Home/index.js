import "../../frontend/Home/index.css";
//  import "./CoutDown.js";

import ChinhSach from "./ChinhSach";
import Slider from "./Slider";
import Category from "./Category";

import Data from "../../../data_fake/data.json";


import DanhMuc from "./DanhMuc";
import ListDM from "../../../data_fake/ListDanhMuc.json";

import Iphone from "./Iphone";
import ListIP from "../../../data_fake/iPhone.json";

import KhuyenMai from "./KhuyenMai";
import ListIPKM from "../../../data_fake/khuyenmai.json";

import fire from "../../../assets/Logo/fire.png";

import ListIpad from "../../../data_fake/ipad.json";
import Ipad from "./Ipad";

import ListMac from "../../../data_fake/macbook.json";
import Macbook from "./Macbook";

import ListWatch from "../../../data_fake/watch.json";
import Watch from "./Watch";

import Thongtin from "./Thongtin";
import { Link } from "react-router-dom";


{/* ------------------------------------------------------------------------------------------------------- */ }




const Home = () => {
    const listchinhsach = [
        { name: "MIễn phí vận chuyển", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_1.svg?1706429532485", des: "Hóa đơn trên 5 triệu" },
        { name: "Quà tặng hấp dẫn", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_2.svg?1706429532485", des: "Hóa đơn trên 10 triệu" },
        { name: "Chứng nhận chất lượng", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_3.svg?1706429532485", des: "Quà tặng chính hãng" },
        { name: "Hotline: 1900 6789", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_4.svg?1706429532485", des: "Hỗ trợ 24/7" },
    ];



    {/* ------------------------------------------------------------------------------------------------------- */ }
    const listcat = Data.categorys;
    const ListDanhMuc = ListDM.DanhMucs;
    const ListIphone = ListIP.iPhones;
    const ListKM = ListIPKM.khuyenmais;
    const ListIPD = ListIpad.ipads;
    const ListMB = ListMac.macbooks;
    const ListW = ListWatch.watchs;

    {/* ------------------------------------------------------------------------------------------------------- */ }







    return (

        <section className="maincontainer ">
            <div className="slider">
                <Slider />
            </div>
            <div className="container center">
                <img src="https://bizweb.dktcdn.net/100/355/156/themes/894790/assets/bg_title_flashsale.png?1665392028818"></img>
            </div>
            <div>
                <h2 className="text-danger text-center">Tất Cả Sách</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Link to="chi-tiet">
                                <img  src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/dungbaogiodianmotminhtaiban1.jpg?v=1558509664663" style={{width:"220px",height:"300px"}}></img>
                            </Link>
                            <p>Đừng bao giờ đi ăn 1 mình</p>
                            <p className="text-danger">71.000 đ</p>
                        </div>
                        <div className="col-3">
                            <Link>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/thauhieunguoimuagiaimatangtruo.jpg?v=1558499249693" style={{width:"220px",height:"300px"}}></img>
                            </Link>
                            <p>Thấu hiểu người mua</p>
                            <p className="text-danger">101.000 đ</p>
                        </div>
                        <div className="col-3">
                            <Link>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/camnangkinhdoanhquanlysuthaydo.jpg?v=1558497093103" style={{width:"220px",height:"300px"}}></img>
                            </Link>
                            <p>Quản lý sự thay đổi</p>
                            <p className="text-danger">42.000 đ</p>
                        </div>
                        <div className="col-3">
                            <Link>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/13nguyentacnghigiaulamgiauthin.jpg?v=1558497091647" style={{width:"220px",height:"300px"}}></img>
                            </Link>
                            <p>13 nguyên tắc nghỉ giàu làm giàu</p>
                            <p className="text-danger">221.000 đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default Home;