import { Link } from "react-router-dom";

const DangKy = () => {
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 border my-4" style={{ height: "470px", width: "300px" }}>
                    <h3 className="text-success text-center">Đăng Ký</h3>
                    <p>Nếu bạn đã có tài khoản, <strong className="text-success">Đăng nhập tại đây</strong></p>
                    <div className="my-3">
                        <input type="text" className="form-control"  placeholder="Nhập tên" />
                    </div>
                    <div className="my-3">
                        <input type="phone" className="form-control"  placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="my-3">
                        <input type="email" className="form-control"  placeholder="Nhập email" />
                    </div>
                    <div className="my-3">
                        <input type="password" className="form-control"  placeholder="Nhập mật khẩu" />
                    </div>
                    <Link to="/"><button type="submit" className="btn btn-success form-control ">Đăng ký</button></Link>
                   
                    <p className="text-center mt-3">Hoặc đăng ký bằng</p>
                    <div className="container">
                    <div className="row">
                        <img className="col-6 center" src="https://th.bing.com/th/id/OIP.arezqGrVeKUAmuKTaXGGEgHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{height:"50px", width:"100px"}}></img>
                        <img className="col-6 center" src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" style={{height:"50px", width:"100px"}}></img>
                    </div>
                    </div>
                    
                    
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}
export default DangKy;