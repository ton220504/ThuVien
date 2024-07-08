import { Link } from "react-router-dom";

const DangNhap = () => {
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 border my-4" style={{ height: "400px", width: "300px" }}>
                    <h3 className="text-success text-center">Đăng Nhập</h3>
                    <p>Nếu bạn chưa có tài khoản, <strong className="text-success">Đăng ký tại đây</strong></p>
                    
                    <div className="my-3">
                        <input type="email" className="form-control"  placeholder="Nhập email" />
                    </div>
                    <div className="my-3">
                        <input type="password" className="form-control"  placeholder="Nhập mật khẩu" />
                    </div>
                    <Link to="/"><button type="submit" className="btn btn-success form-control ">Đăng nhập</button></Link>
                    <p>Quên mật khẩu</p>
                    <p className="text-center">Hoặc</p>
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
export default DangNhap;