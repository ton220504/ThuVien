import httpAxios from "../httpAxios";

const menuService={
    get_list: ()=>{
        return httpAxios.get("menu/index");
    },
    store:(data)=>{
        return httpAxios.post("menu/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`menu/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`menu/delete/${id}`, data);
    },
    list: (parent_id, limit)=>{
        return httpAxios.get(`menu/list/${parent_id}/${limit}`);
    },
}

export default menuService;