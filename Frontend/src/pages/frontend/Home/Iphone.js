import { Link } from "react-router-dom";

const iPhone = (props) => {
    const ip = props.iphon;
    return (

        <div className="iphone">
            <div className="row rounded-4 border m-1  bg-white shadow p-3 mb-5 " >
                <div className="iphinh">
                <Link to={ip.link}><img src={ip.hinh} style={{ height: "100%", width: "100%" }} /></Link>
                </div>
                <h6>{ip.ten}</h6>

                <p style={{ fontSize: "17px" }} className="text-decoration-line-through fw-light">{ip.gia}</p>
                <p className="text-danger" style={{ fontSize: "20px" }}><strong>&nbsp;{ip.giagiam}</strong>&nbsp;</p>


                <p className=" rounded-4  bg-light" style={{ fontSize: "14px" }}>Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>



            </div>
        </div>


    );
}
export default iPhone;
