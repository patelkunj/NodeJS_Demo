let express = require('express');
let router = express.Router();

const dbSecurity = require("../../config/dbSecurity");
const clientResponse = require("../../config/responseFile");
/* component */
const _supercategory = require("../../component/component_master/supercategory");

router.get('/apiSelection/', function (request, response) {
    try {

        let strResult = _supercategory.dbSelection(request, response);
        let strFlag = strResult.flag;
        let strQuery = strResult.query;

        if (strFlag == false) return clientResponse.errorData([], response, strQuery.message);

        let dbConnect = dbSecurity.dbConnection();
        dbConnect.query(strQuery, (err, result, fields) => {
            dbConnect.end();
            if (err) clientResponse.errorData(err, response);
            else if (result.length == 0)
                clientResponse.emptyData(result, response, "");
            else {
                clientResponse.sendDrop(result, response, "");
            }
        });

    } catch (error) {
        clientResponse.emptyData([], response, error.message);
    }
});

module.exports = router;