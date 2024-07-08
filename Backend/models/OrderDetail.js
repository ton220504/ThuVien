const db = require("../configs/database");

const OrderDetail = (orderdetail) => {
    this.id = orderdetail.id;
    this.name = orderdetail.name;
    this.slug = orderdetail.slug;
    this.status = orderdetail.status;
 };
 

 OrderDetail.getAll = (result) => {
    db.query("SELECT * FROM db_orderdetail", function (err, data) {
       if (err) throw err;
       result(data);
    });
 };
 //Có rất nhiều phương thức ở đâu
 module.exports = OrderDetail;
 