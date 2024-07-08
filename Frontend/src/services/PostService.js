import httpAxios from "../httpAxios";

const PostService={
    get_list: ()=>{
        return httpAxios.get("post/index");
    },
    store:(data)=>{
        return httpAxios.post("post/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`post/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`post/delete/${id}`, data);
    }
   
    
}

export default PostService;