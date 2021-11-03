const ticket_value = 200;
var value_01 = null;
    var f_01 = function() {
    value_01 = parseInt(document.getElementById("value_01").value)
}
    var f_02 = function() {
        var value_02 = document.getElementById("value_02").value;
        switch(value_02) {
            case "op_01": ticket_value_02 = ticket_value * 0.8; 
                break;
            case "op_02": ticket_value_02 = ticket_value * 0.5;
                break;
            case "op_03": ticket_value_02 = ticket_value * 0.15;
                break;
            default: console.log("Error: category_invalid");
        }
    }

    var f_03 = function() {
        if (value_01 >= 1) {
            document.getElementById("result_01").innerHTML = +(value_01 * (ticket_value - ticket_value_02))+" $";
        } else {
            console.log("Error: number_invalid");
        }
    }

    var f_04 = function() {
        document.getElementById("result_01").innerHTML = "";
    }