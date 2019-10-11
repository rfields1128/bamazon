var mysql = require("mysql");
var prompt = require("prompt")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kaplan@21!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) {
        console.log("error connecting to db")
        console.log(err);
        return;
    }
    console.log("connected as id " + connection.threadId + "\n");

})

connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        var itemid = res[i].item_id;
        var productname = res[i].product_name;
        var departmentname = res[i].department_name;
        var price = res[i].price;
        var stock = res[i].stock_quantity;
        console.log("-------------------------")
        console.log(itemid);
        console.log(productname);
        console.log(departmentname);
        console.log(price);
        console.log(stock);
        console.log("-------------------------")
    }

    prompt.start();

    console.log('\n Which Item would you like to buy?');
    prompt.get(['buyItemID'], function (err, result) {
        var buyItemID = result.buyItemID;
        console.log("You selected item #" + buyItemID + '.');
        console.log("\n How many do you wish to buy?")
        prompt.get(['buyItemQuanity'], function (err, result) {
            var buyItemQuanity = result.buyItemQuanity;
            console.log("you selected to buy " + buyItemQuanity + " of these.");

            connection.query("SELECT stock_quantity FROM products WHERE ?", [{ item_id: buyItemID }], function (err, res) {
                if (err) throw err;
                if (res[0] == undefined) {
                    console.log("sorry, we found no items with the id " + buyItemID);
                    connection.end();
                } else {
                    var bamazonQuantity = res[0].stock_quantity;
                    if (bamazonQuantity >= buyItemQuanity) {
                        var newInvetory = parseInt(bamazonQuantity) - parseInt(buyItemQuanity);
                        connection.query('UPDATE Products SET ? WHERE ?', [{ stock_quantity: newInvetory }, { item_id: buyItemID }], function (err, res) {
                            if (err) throw err; 
                        });
                        
                    }
                    else{
                        console.log('Sorry... We only have ' +  bamazonQuantity + ' of those items. Order cancelled.');
                        connection.end(); // end the script/connection
                      }
            
                }
            })
        })

    })
})

