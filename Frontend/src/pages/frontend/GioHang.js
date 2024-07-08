import { useState } from "react";
import { Link } from "react-router-dom";

const GioHang = () => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(71000);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - 71000);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + 71000);
    };

    return (

        <>
            <div className="container">
                <h3>Giỏ hàng của bạn</h3>
                <div className="card-body">
                    <table class="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>

                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Thành tiền</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/dungbaogiodianmotminhtaiban1.jpg?v=1558509664663" style={{ width: "110px", height: "150px" }}></img>
                                        </div>
                                        <div className="col-9">
                                            <p>Đừng bao giờ đi ăn 1 mình</p>
                                            <p>Giá: <strong className="text-danger">71.000 đ</strong></p>
                                        </div>
                                    </div>


                                </td>
                                <td>
                                    <div className="quantity">
                                        <button className="decrease" onClick={decreaseQuantity}>-</button>
                                        <span className="quantity-display">{quantity}</span>
                                        <button className="increase" onClick={increaseQuantity}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <strong className="text-danger">{totalPrice.toLocaleString()} đ</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-end me-4">
                    <p>Tổng:</p>
                    <strong className="text-danger">{totalPrice.toLocaleString()} đ</strong>
                    <div>
                        <Link to="/thanh-toan"><button type="submit" className="btn btn-success ">Thanh toán</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default GioHang;