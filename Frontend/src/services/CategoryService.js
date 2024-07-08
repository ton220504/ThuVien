import httpAxios from "../httpAxios";

const CategoryService={
    get_list: ()=>{
        return httpAxios.get("category/index");
    },
    store:(data)=>{
        return httpAxios.post("category/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`category/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`category/delete/${id}`, data);
    }
}

export default CategoryService;