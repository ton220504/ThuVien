const Brand = require("../models/Brand");
const BrandController = {
   index: (req, res) => {
      Brand.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               brands: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               brands: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },
   
   show: (req, res) => {
      const id = req.params.id;
      Brand.show(id, function (data) {
         if (data == null) {
            return res.status(200).json({
               brands: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               brands: data,
               status: true,
               message: "Tai du lieu thanh cong",
            });
         }
      });
   },

  store: (req, res)=>{
      const bodyData = req.body;
      const mydata={
          name: bodyData.name,
         
         sort_order: bodyData.sort_order,
          slug: bodyData.slug,
          image: bodyData.image,
          updated_at: "2024-3-28 10:10:19",
          updated_by: 0,
          description: bodyData.description,
          created_at: "2024-3-28 10:10:19",
          created_by: 1,
          status: bodyData.status,
      };

      Brand.store(mydata, function(data){
          return res.status(201).json({
            brands: data,
              status: true,
              message: "Them du lieu thanh cong",
          });
      });
  },
  edit: (req, res) => {
      const id = req.params.id;
      const bodyData = req.body;
      //Lấy dũ liệu form
      const mydata = {
         name: bodyData.name,
        
         sort_order: bodyData.sort_order,
          slug: bodyData.slug,
          image: bodyData.image,
          updated_at: "2024-3-28 10:10:19",
          updated_by: 0,
          description: bodyData.description,
          created_at: "2024-3-28 10:10:19",
          created_by: 1,
          status: bodyData.status,
      };
      Brand.edit(mydata, id, function (data) {
         //data thứ mà nó trả về
         console.log(data);
      });
   },
   delete: (req, res) => {
      const id = req.params.id;
      Brand.delete(id, function (data) {
         console.log(data);
      });
   },
};
module.exports = BrandController;
