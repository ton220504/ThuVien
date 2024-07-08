import httpAxios from "../httpAxios";

const orderdetailService={
    get_list: ()=>{
        return httpAxios.get("orderdetail/index");
    }
}

export default orderdetailService;