/**
 * Created by an_wch on 2017/9/25.
 */
const config = require('../config.json');
module.exports = function () {
    var greeter = document.createElement('div');
    greeter.textContent = config.greetText;
    return greeter;
}