const db = require("../config");
class Products{
    fetchProducts(req, res) {
        const query = `
            SELECT productID, productName, Descrip, quantity, Price, imageUrl 
            FROM products
        `;
        db.query(query, (err, data) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results:data,
          });
        });
      }

      fetchProduct(req, res) {
        const query = `
            SELECT productID, productName, Descrip, quantity, Price, imageUrl 
            FROM products 
            WHERE productID = ${req.params.id}
        `;
        db.query(query, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          });
        });
      }

      deleteProduct(req, res) {
        const query = `
            DELETE FROM products WHERE productID = ${req.params.id}
        `;
    
        db.query(query, [req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "product record was deleted successfully",
          });
        });
      }

      updateProduct(req, res){
        const query = `
            UPDATE products SET ? WHERE productID = ${req.params.id}
        `
        db.query(query, [req.body, req.params.id], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product udpated successfully"
            })
        })
    }

      createProduct(req, res){
        const query = `
            INSERT INTO products SET ?
        `
        db.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product inserted successfully"
            })
        })
    }
    }


    module.exports = Products;











