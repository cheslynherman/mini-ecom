const db = require("../config");
class Products{
    fetchProducts(req, res) {
        const query = `
            SELECT productID, productName, Descrip, quantity, Price, imageUrl FROM products
        `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }

      fetchProduct(req, res) {
        const query = `
            SELECT productID, productName, Descrip, quantity, Price, imageUrl FROM products WHERE productID = ${req.params.id}
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

      updateProduct(req, res) {
        const query = `
            UPDATE products SET ? where productID = ${req.params.id}
        `;
    
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "product details were updated successfully",
          });
        });
      }

    }

    module.exports = Products;











