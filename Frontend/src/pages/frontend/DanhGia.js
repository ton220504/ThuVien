import { Link } from "react-router-dom";

const DanhGia = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link to="jfngkfdg">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/dungbaogiodianmotminhtaiban1.jpg?v=1558509664663" style={{ width: "220px", height: "300px" }}></img>
                        </Link>
                        <p>Đừng bao giờ đi ăn 1 mình</p>
                        <p className="text-danger">71.000 đ</p>
                    </div>
                    <div className="col-3">
                        <Link>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/thauhieunguoimuagiaimatangtruo.jpg?v=1558499249693" style={{ width: "220px", height: "300px" }}></img>
                        </Link>
                        <p>Thấu hiểu người mua</p>
                        <p className="text-danger">101.000 đ</p>
                    </div>
                    <div className="col-3">
                        <Link>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/camnangkinhdoanhquanlysuthaydo.jpg?v=1558497093103" style={{ width: "220px", height: "300px" }}></img>
                        </Link>
                        <p>Quản lý sự thay đổi</p>
                        <p className="text-danger">42.000 đ</p>
                    </div>
                    <div className="col-3">
                        <Link>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/13nguyentacnghigiaulamgiauthin.jpg?v=1558497091647" style={{ width: "220px", height: "300px" }}></img>
                        </Link>
                        <p>13 nguyên tắc nghỉ giàu làm giàu</p>
                        <p className="text-danger">221.000 đ</p>
                    </div>
                </div>
                <h2 className="text-danger text-center">Đánh giá</h2>
                <p>Cảm ơn bạn đã đồng hành cùng chúng tôi trong thời gian vừa qua</p>
                <p>Hãy để lại phản hồi, thắc mắc của bạn nhé</p>
                <div className="my-3">
                    <textarea rows={7} className="form-control" placeholder="Thêm phản hồi"></textarea>
                </div>
                <button className="btn btn-success">Gửi</button>

            </div>
        </div>
    );
}
export default DanhGia;