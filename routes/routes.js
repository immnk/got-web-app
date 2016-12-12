var appRouter = function (app) {

    app.get('/getBattles', function (req, res) {
        var json_responses;
        var getItemsForSale = "SELECT * FROM sql6148985.battles";
        console.log(getItemsForSale);

        fetchData(function (err, result) {
            if (err) {
                throw err
            }
            else {
                if (result.length > 0) {
                    res.send(result);
                }
                else {
                    json_responses = { "statusCode": 401 };
                    res.send(json_responses);
                }
            }
        }, getItemsForSale)
    });

    function fetchData(callback, sqlQuery) {
        console.log("\nSql Query" + sqlQuery);
        app.connection.query(sqlQuery, function (err, rows, fields) {
            if (err) {
                console.log("Error Message:" + err);
            } else {
                console.log("DB results" + rows);
                callback(err, rows);
            }
        });
    }
}

module.exports = appRouter;
