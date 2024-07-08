const statistics = () => {
    return (
        <div className="container">
            <div className="row" >
                <div className="col-4 border m-4" style={{ height: "550px", width: "300px" }}>
                    <h3 className="text-danger text-center">Chi tiết</h3>
                    <p>1.	Quản trị viên truy cập vào chức năng báo cáo thống kê trên hệ thống.</p>
                    <p>2.	Hệ thống hiển thị giao diện cho phép quản trị viên chọn các tiêu chí và thời gian cho báo cáo.</p>
                    <p>3.	Quản trị viên chọn các tiêu chí và thời gian muốn bao gồm trong báo cáo, ví dụ: số lượng sách, số lượng người đọc, số lần mượn/trả sách trong tháng.</p>
                    <p>4.	Hệ thống tự động tạo báo cáo thống kê dựa trên các tiêu chí được chọn.</p>
                    <p>5.	Quản trị viên xem báo cáo được tạo và có thể lưu lại hoặc xuất ra dạng file để sử dụng.</p>
                    <button className="btn btn-success">Xuất file dưới dạng</button>
                </div>

                <div className="col-6 border my-4" style={{ height: "550px", width: "600px" }}>
                    <h3 className="text-success text-center border-bottom py-4">Thống kê báo cáo</h3>
                    <div className="row border-bottom py-4">
                        <div className="col-6">
                            <h3>Tất cả sách:</h3>
                        </div>
                        <div className="col-3">
                            <p>120</p>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success">Thêm</button>
                        </div>
                    </div>
                    <div className="row border-bottom py-4">
                        <div className="col-6">
                            <h3>Tất cả người đọc</h3>
                        </div>
                        <div className="col-3">
                            <p>12</p>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="row border-bottom py-4">
                        <div className="col-6">
                            <p>Số lượt mượn sách trong ngày</p>
                        </div>
                        <div className="col-3">
                            <p>5</p>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="row  py-4">
                        <div className="col-6">
                            <p>Số lượt trả sách trong ngày</p>
                        </div>
                        <div className="col-3">
                            <p>5</p>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success">Chỉnh sửa</button>
                        </div>
                    </div>

                </div>
                <div className="col-2">
                    <div>
                        <label>
                            <strong>Thêm chi tiết</strong>
                        </label>
                        <textarea rows={7} className="form-control" ></textarea>
                    </div>
                    <div>
                        <label>
                            <strong>Đánh giá</strong>
                        </label>
                        <textarea rows={7} className="form-control" ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default statistics;