import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandService from "../../../services/BrandService";



const Brand = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        const image = document.querySelector("#image");
        formdata.append("name", name);
        formdata.append("image", image.files.length === 0 ? "" : image.files[0]);
       
        formdata.append("description", description);
        formdata.append("status", status);
        formdata.append("sort_order",0);
        formdata.append("slug", "hh-hh-h");


        (async function () {
            const result = await BrandService.store(formdata);
            console.log(result);
        })();
    };









    const [brands, setBrand] = useState([]);
    useEffect(function () {
        (async () => {
            const result = await BrandService.get_list();
            setBrand(result.brands);
        })();
    });
    return (
        <form onSubmit={handleSubmit} >
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thương hiệu</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label>
                                    <strong>Tên thương hiệu</strong>
                                </label>
                                <input type="text" placeholder="Tên thương hiệu" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Mô tả</strong>
                                </label>
                                <textarea rows={6} className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Hình</strong>
                                </label>
                                <input id="image" type="file" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Trạng thái</strong>
                                </label>
                                <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} >
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>


                            <button className="btn btn-success" onClick={handleSubmit} >Lưu[Thêm]</button>
                        </div>
                        <div className="col-md-8">
                            <div className="row py-3">
                                <div className="col-6">
                                    <select className="form-menu me-2">
                                        <option value="1">Hành động</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <button type="submit">Áp dụng</button>
                                </div>

                                <div className="col-6">
                                    <input className="form me-2" type="search" aria-label="Search" />
                                    <button type="submit">Tìm kiếm</button>
                                </div>
                            </div>
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tên thương hiệu</th>
                                        <th scope="col">Tên slug</th>
                                        <th scope="col">ID</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    
                                    {brands && brands.length > 0 && brands.map((brand, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">1</th>
                                                <th scope="row">{brand.image}</th>
                                                <th scope="row">{brand.name}</th>
                                                <th scope="row">{brand.slug}</th>
                                                <th scope="row">{brand.id}</th>
                                            </tr>
                                        )

                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Brand;