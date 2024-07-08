import httpAxios from "../httpAxios";

const TopicService={
    get_list: ()=>{
        return httpAxios.get("topic/index");
    },
    store:(data)=>{
        return httpAxios.post("topic/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`topic/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`topic/delete/${id}`, data);
    }
}

export default TopicService;