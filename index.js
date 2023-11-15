console.log("hello")
console.clear()


function month_name(month_num){
 switch (month_num){
    case 1:
        console.log("It's January month !");
        break;
        case 2:
        console.log("It's Febuary month !");
        break;
        case 3:
        console.log("It's March month !");
        break;
        case 4:
        console.log("It's April month !");
        break;
        case 5:
        console.log("It's May month !");
        break;
        case 6:
        console.log("It's June month !");
        break;
        case 7:
        console.log("It's July month !");
        break;
        case 8:
        console.log("It's August month !");
        break;
        case 9:
        console.log("It's September month !");
        break;
        case 10:
        console.log("It's October month !");
        break;
        case 11:
        console.log("It's November month !");
        break;
        case 12:
        console.log("It's December month !");
        default:
            console.error("Invalid input given...!")
 }
}
month_name(15)