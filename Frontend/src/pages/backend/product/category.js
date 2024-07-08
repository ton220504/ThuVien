
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";



const Category = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [parent_id, setParent_id] = useState("");
    const [status, setStatus] = useState(1);


    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        const image = document.querySelector("#image");
        formdata.append("name", name);
        formdata.append("image", image.files.length === 0 ? "" : image.files[0]);
        formdata.append("parent_id", parent_id);
        formdata.append("description", description);
        formdata.append("status", status);
        formdata.append("sort_order",0);
        formdata.append("slug", "hh-hh-h");


        (async function () {
            const result = await CategoryService.store(formdata);
            console.log(result);
        })();
    };


    const [categorys, setCategory] = useState([]);
    useEffect(function () {
        (async () => {
            const result = await CategoryService.get_list();
            setCategory(result.categorys);
        })();
    });
    return (
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Danh mục sản phẩm</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label>
                                    <strong>Tên danh mục</strong>
                                </label>
                                <input type="text" placeholder="Tên danh mục" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Mô tả</strong>
                                </label>
                                <textarea rows={6} className="form-control"value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Danh mục</strong>
                                </label>
                                <select className="form-control" value={parent_id} onChange={(e) => setParent_id(e.target.value)}>
                                    <option value="">Danh mục cha</option>
                                    {categorys && categorys.map((cat, index)=>{
                                        return(
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        );
                                    })}
                                </select>
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
                                <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
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
                                        <th scope="col">Tên danh mục</th>
                                        <th scope="col">Tên slug</th>
                                        <th scope="col">ID</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {categorys && categorys.length > 0 && categorys.map((category, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">1</th>
                                                <th scope="row">{category.image}</th>
                                                <th scope="row">{category.name}</th>
                                                <th scope="row">{category.slug}</th>
                                                <th scope="row">{category.parent_id}</th>
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
export default Category;