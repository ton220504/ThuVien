const ThanhToan = () => {
    return (
        <div className="container" style={{ height: "500px" }}>
            <div className="row">
                <div className="col-7">
                    <div className="row">
                        <div className="col-6">
                            <h4 className="text-center">Thông tin</h4>
                            <div className="my-3">
                                <input type="text" className="form-control" placeholder="Nhập tên" />
                            </div>
                            <div className="my-3">
                                <input type="email" className="form-control" placeholder="Nhập MSSV" />
                            </div>
                            <div className="my-3">
                                <input type="phone" className="form-control" placeholder="Nhập SĐT" />
                            </div>
                            <div className="my-3">
                                <input type="text" className="form-control" placeholder="Địa chỉ" />
                            </div>
                            <div className="my-3">
                                <input type="text" className="form-control" placeholder="Tỉnh" />
                            </div>
                            <div className="my-3">
                                <input type="text" className="form-control" placeholder="Quận(huyện)" />
                            </div>
                            <div className="my-3">
                                <textarea type="text" className="form-control" placeholder="Ghi chú" />
                            </div>
                        </div>
                        <div className="col-6">
                            <h4 className="text-center">Vận chuyển</h4>
                            <div className="alert alert-info form-control mb-4">
                                <strong>Vui lòng nhập thông tin giao hàng</strong>
                            </div>
                            <h4 className="text-center">Thanh toán</h4>
                            <div className="form-control">
                                <div className="form-check my-2">
                                    <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" />Thanh toán khi giao hàng
                                    <label className="form-check-label" for="radio1"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5 bg-light">
                    <h5 className="border-bottom pb-4">Đơn hàng(1)</h5>
                    <div className="row ms-4 border-bottom pb-4">
                        <div className="col-3">
                            <img src="https://bizweb.dktcdn.net/thumb/thumb/100/355/156/products/dungbaogiodianmotminhtaiban1.jpg?v=1558509664663"></img>
                        </div>
                        <div className="col-6">
                            <p>Đừng bao giờ đi ăn 1 mình</p>
                        </div>
                        <div className="col-3">
                            <p>71.000 đ</p>
                        </div>
                    </div>
                    <div className="input-group mb-3 mt-3 border-bottom pb-4">
                        <button className="btn btn-success" type="button">Áp dụng</button>
                        <input type="text" className="form-control" placeholder="Nhập mã giảm giá"/>
                    </div>
                    <div className="row">
                        <div className="col-6">Thành tiền</div>
                        <div className="col-6 text-end">71.000 đ</div>
                    </div>
                    <div className="row my-3 border-bottom pb-3">
                        <div className="col-6">Phí vận chuyển</div>
                        <div className="col-6 text-end">-</div>
                    </div>
                    <div className="row my-3 border-bottom pb-3">
                        <div className="col-6 text-success">Tổng</div>
                        <div className="col-6 text-end text-success">71.000 đ</div>
                    </div>
                    <button className="btn btn-success " type="button">Mua</button>
                </div>
            </div>
        </div>
    );
}
export default ThanhToan;