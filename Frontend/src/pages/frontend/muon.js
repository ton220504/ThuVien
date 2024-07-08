const muon = () => {
    return (
        <div className="container" style={{ height: "500px" }}>
            <div className="row">
                <div className="col-7">
                    <div className="row">
                        <div className="">
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
                    
                    <button className="btn btn-success " type="button">Mượn</button>
                </div>
            </div>
        </div>
    );
}
export default muon;