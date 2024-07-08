import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo/fire.png";



const KhuyenMai = (props) => {
    const km = props.km;
    return (
        <div className="dienthoai">
            <div className="row rounded-4 border m-1 bg-white " >


                <div className="hinh">
                    <Link to={km.link}><img src={km.hinh} style={{ height: "100%", width: "100%" }} /></Link>
                </div>

                <h6>{km.ten}</h6>
                <p className="text-decoration-line-through">{km.gia}</p>
                <p className="text-danger"><strong>&nbsp;{km.giagiam}</strong>&nbsp;</p>
                <div className="container">
                    <p className=" rounded-4  bg-light">Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>
                </div>



            </div>
        </div>
    );
}
export default KhuyenMai;