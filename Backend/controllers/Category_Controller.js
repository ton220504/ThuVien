const Category = require("../models/Category");
const CategoryController = {
   index: (req, res) => {
      Category.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               categorys: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               categorys: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },
   show: (req, res) => {
      const id = req.params.id;
      Category.show(id, function (data) {
         if (data == null) {
            return res.status(200).json({
               categorys: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               categorys: data,
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
         parent_id: bodyData.parent_id,
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

      Category.store(mydata, function(data){
          return res.status(201).json({
              categorys: data,
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
         parent_id: bodyData.parent_id,
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
      Category.edit(mydata, id, function (data) {
         //data thứ mà nó trả về
         console.log(data);
      });
   },
   delete: (req, res) => {
      const id = req.params.id;
      Category.delete(id, function (data) {
         console.log(data);
      });
   },
};
module.exports = CategoryController;
