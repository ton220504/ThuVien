import httpAxios from "../httpAxios";

const BrandService={
    get_list: ()=>{
        return httpAxios.get("brand/index");
    },
    store:(data)=>{
        return httpAxios.post("brand/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`brand/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`brand/delete/${id}`, data);
    }
}

export default BrandService;