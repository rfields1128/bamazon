var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kaplan@21!",
    database:  "bamazon"
});

connection.connect(function(err){
    if(err){
        console.log("error connecting to db")
        console.log(err);
        return;
    }
    console.log("connected as id " + connection.threadId + "\n");
    
})

connection.query("SELECT * FROM products", function(err, res){
    if(err) throw err;
    for (var i = 0; i < res.length; i++){
        var itemid = res[i].item_id; 
        var productname = res[i].product_name;
        var departmentname = res[i].department_name;
        var price = res[i].price;
        var stock = res[i].stock_quantity;
        console.log(itemid);
        console.log(productname);
        console.log(departmentname);
        console.log(price);
        console.log(stock);
    }
})

