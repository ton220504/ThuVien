import httpAxios from "../httpAxios";

const ContactService={
    get_list: ()=>{
        return httpAxios.get("contact/index");
    },
    store:(data)=>{
        return httpAxios.post("contact/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`contact/edit/${id}`, data);
    },
    delete:(data, id)=>{
        return httpAxios.delete(`contact/delete/${id}`, data);
    }
}

export default ContactService;