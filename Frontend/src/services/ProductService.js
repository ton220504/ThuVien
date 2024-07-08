import httpAxios from "../httpAxios";

const ProductService={
    get_list: ()=>{
        return httpAxios.get("product/index");
    },
    store:(data)=>{
        return httpAxios.post("product/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`product/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`product/delete/${id}`, data);
    }
}

export default ProductService;