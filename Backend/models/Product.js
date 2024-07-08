const db = require("../configs/database");


 const Product ={
   getAll: function  (result)  {
      db.query("SELECT * FROM db_product", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, product, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(product);
         }
      });
   },


    store: function (product, result){
      db.query("INSERT INTO db_product SET ?", product, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (product, id, mycallback) => {
      var sql = `UPDATE db_product SET ? WHERE id = '${id}'`;
      db.query(sql, product, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   delete: (id, mycallback) => {
      var sql = `DELETE FROM db_product WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
   getBySlug: async (slug, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE slug='${slug}'`;
      await db.query(sql, function (err, product) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(product[0]);
         }
      });
   },

 };
 //Có rất nhiều phương thức ở đâu
 module.exports = Product;
 