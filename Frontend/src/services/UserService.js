import httpAxios from "../httpAxios";

const UserService={
    get_list: ()=>{
        return httpAxios.get("user/index");
    },
    store:(data)=>{
        return httpAxios.post("user/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`user/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`user/delete/${id}`, data);
    }
}

export default UserService;