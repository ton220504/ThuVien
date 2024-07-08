const Post = require("../models/Post");
const PostController = {
   index: (req, res) => {
      Post.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               posts: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               posts: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },

   show: (req, res) => {
      const id = req.params.id;
      Post.show(id, function (data) {
         if (data == null) {
            return res.status(200).json({
               topics: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               topics: data,
               status: true,
               message: "Tai du lieu thanh cong",
            });
         }
      });
   },

   store: (req, res) => {
      const bodyData = req.body;
      const mydata = {
         title: bodyData.title,
         detail: bodyData.detail,
         type: bodyData.type,
         topic_id:bodyData.topic_id,
         slug: bodyData.slug,
         image: bodyData.image,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };

      Post.store(mydata, function (data) {
         return res.status(201).json({
            topics: data,
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
         title: bodyData.title,
         detail: bodyData.detail,
         type: bodyData.type,
         topic_id:bodyData.topic_id,
         slug: bodyData.slug,
         image: bodyData.image,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };
      Post.edit(mydata, id, function (data) {
         //data thứ mà nó trả về
         console.log(data);
      });
   },
   delete: (req, res) => {
      const id = req.params.id;
      Post.delete(id, function (data) {
         console.log(data);
      });
   },
};
module.exports = PostController;
