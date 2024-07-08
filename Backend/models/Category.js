const db = require("../configs/database");


 

const Category={
   getAll: function  (result)  {
      db.query("SELECT * FROM db_category", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_category WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, Category, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(Category);
         }
      });
   },


    store: function (Category, result){
      db.query("INSERT INTO db_category SET ?", Category, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (Category, id, mycallback) => {
      var sql = `UPDATE db_category SET ? WHERE id = '${id}'`;
      db.query(sql, Category, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   delete: (id, mycallback) => {
      var sql = `DELETE FROM db_category WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
}
 //Có rất nhiều phương thức ở đâu
 module.exports = Category;
 