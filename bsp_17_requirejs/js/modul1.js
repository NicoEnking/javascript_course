/*global
define
 */
define([], function () {

    "use strict";
    var basket = [];

    // ES5
    return Object.create({
        addItem: function (item) {
            basket.push(item);
        },
        getAllItems : function () {
            return basket.slice();
        }
    }, {
        version : {
            value: "2.3.4"
        }
    });
});