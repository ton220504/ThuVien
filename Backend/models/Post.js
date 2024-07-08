const db = require("../configs/database");

const Post={
   getAll: function  (result)  {
      db.query("SELECT * FROM db_post", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, post, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(post);
         }
      });
   },


    store: function (post, result){
      db.query("INSERT INTO db_post SET ?", post, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (post, id, mycallback) => {
      var sql = `UPDATE db_post SET ? WHERE id = '${id}'`;
      db.query(sql, post, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   delete: (id, mycallback) => {
      var sql = `DELETE FROM db_post WHERE id = '${id}'`;
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
 module.exports = Post;
 