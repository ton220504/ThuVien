import { useState } from "react";
import { Link } from "react-router-dom";

const ChiTiet = () => {
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
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="my-4" src="https://bizweb.dktcdn.net/thumb/large/100/355/156/products/dungbaogiodianmotminhtaiban1.jpg?v=1558509664663"></img>
                </div>
                <div className="col-6">
                    <h3 className="mt-4">Đừng bao giờ đi ăn 1 mình</h3>
                    <p>Giá: <strong className="text-danger">71.000 đ</strong></p>
                    <div className="quantity pt-5">
                        <button className="decrease" onClick={decreaseQuantity}>-</button>
                        <span className="quantity-display">{quantity}</span>
                        <button className="increase" onClick={increaseQuantity}>+</button>
                    </div>
                    <div className="row">
                        <div className=" col-6 mt-5">
                            
                        <Link to="/gio-hang"><button type="submit" className="btn btn-light ">Thêm giỏ hàng</button></Link>
                            
                        </div>
                        <div className=" col-6 mt-5">
                        <Link to="/thanh-toan"><button type="submit" className="btn btn-success ">mua sách</button></Link>
                        </div>
                        <div className=" col-6 mt-5">
                        <Link to="/muon"><button type="submit" className="btn btn-success ">mượn sách</button></Link>
                        </div>
                    </div>
                </div>

                <div className="col-2"></div>
            </div>
            <h2 className="text-center text-success">Nội dung</h2>
            <p className="pb-5">"Trong chúng ta ai cũng có khả năng quyến rũ người khác - cho dù đó là đồng nghiệp, người xa lạ, bạn bè, hay sếp của mình. Nhưng có khả năng khác với biết cách vận dụng nó, và đó là lý do tại sao có những người đi qua cuộc đời này lặng lẽ như những cái bó</p>
        </div>
    );
}
export default ChiTiet;