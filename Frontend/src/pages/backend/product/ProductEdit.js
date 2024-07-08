import { useEffect, useState } from "react";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";

const ProductEdit =()=>{
    


    const [brands, setBrands]= useState([]);
    const [categorys, setCategorys]=useState([]);
    useEffect(function(){
        (async ()=>{
            const result_brand= await BrandService.get_list();
            const result_category= await CategoryService.get_list();
            setBrands(result_brand.brands);
            setCategorys(result_category.categorys);
        })();
    },[]);
    return(
        <form >
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-danger">Sửa sản phẩm</strong>
                    </div>
                    <div className="col-6 text-end"></div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3">
                            <label>
                                <strong>Tên sản phẩm</strong>
                            </label>
                            <input type="text" placeholder="Tên sản phẩm"  className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Chi tiết sản phẩm</strong>
                            </label>
                            <textarea rows={7} className="form-control" ></textarea>
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Mô tả</strong>
                            </label>
                            <textarea rows={6} className="form-control" ></textarea>
                        </div>

                        <button className="btn btn-danger" >Sửa</button>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label>
                                <strong>Danh mục</strong>
                            </label>
                            <select className="form-control" >
                                <option value="">Chọn danh mục</option>
                                {categorys && categorys.map((cat, index)=>{
                                    return(
                                        <option key={index} value={cat.id}>{cat.name}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Thương hiệu</strong>
                            </label>
                            <select className="form-control" >
                                <option value="">Chọn thương hiệu</option>
                                {brands && brands.map((bra, index)=>{
                                    return(
                                        <option key={index} value={bra.id}>{bra.name}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Giá</strong>
                            </label>
                            <input type="number" placeholder="Giá" className="form-control"  />
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Giá khuyến mãi</strong>
                            </label>
                            <input type="number" placeholder="Giá khuyến mãi" className="form-control"  />
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Số lượng</strong>
                            </label>
                            <input type="number" placeholder="Số lượng" className="form-control"  />
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Hình</strong>
                            </label>
                            <input id="image" type="file" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label>
                                <strong>Danh mục</strong>
                            </label>
                            <select className="form-control" >
                                <option value="1">xua ban</option>
                                <option value="2">chua xua ban</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
}
export default ProductEdit;