var method = {};

method.masterData = (request) => {
    let superCategoryId = request.body.superCategoryId || 0;
    let createdBy = request.body.createdBy || 0;
    let superCategoryTitle = request.body.superCategoryTitle || '';
    return {
        superCategoryId,
        createdBy,
        superCategoryTitle
    };
};

method.select = function (strwhere) {
    var strquery = "select * from tblsupercategory where 1 = 1 " + strwhere;
    return strquery;
};

method.selectall = function (strwhere) {
    var strquery = "select superCategoryId,createdDate,createdBy,superCategoryTitle from tblsupercategory where 1 = 1 " + strwhere;
    return strquery;
};

method.selectcolumn = function (strcolumn, strwhere) {
    var strquery = "select " + strcolumn + " from tblsupercategory where 1 = 1 " + strwhere;
    return strquery;
};

method.getcount = function (strwhere) {
    var strquery = "select count(*) as cnt from  tblsupercategory where 1=1 " + strwhere;
    return strquery;
};

method.delete = function (strwhere) {
    var strquery = "delete from tblsupercategory where 1 = 1 and superCategoryId = " + strwhere;
    return strquery;
};

method.deleteString = function (strwhere) {
    var strquery = "delete from tblsupercategory where 1 = 1 " + strwhere;
    return strquery;
};

method.insert = function (pera) {
    var strquery = "insert into tblsupercategory (createdBy, superCategoryTitle) values ('" + pera.createdBy + "', '" + pera.superCategoryTitle + "')";
    return strquery;
};

method.insertString = function () {
    var strquery = "insert into tblsupercategory (createdBy, superCategoryTitle) values ";
    return strquery;
};

method.update = function (pera) {
    var strquery = "update tblsupercategory set createdBy = '" + pera.createdBy + "', superCategoryTitle = '" + pera.superCategoryTitle + "' where superCategoryId = '" + pera.superCategoryId + "' ";
    return strquery;
};

method.updateColumn = function (column, id) {
    var strquery = "update tblsupercategory set " + column + " where superCategoryId = " + id + " ";
    return strquery;
};

exports.data = method;