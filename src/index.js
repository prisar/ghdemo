import { ok } from "assert";
import { userInfo } from "os";


let arr = [1, 2, 3];

arr = arr.forEach(x => {
    x = x + 2;
    console.log(x);
});

// ...arr

const user = {
    username: 'ram',
    firstname: 'ram',
    lastname: 'babu',
};

// destructing
const { username } = user;


// console.log(arr);

// IIFE - immidiately invoked function Exec

(function (a, b) {
    return a+b;

})(1, 2);

(function () {
    return a+b;

})();

200 -> ok
404 -> 
403 -> UnAuthorized, 
500 -> Internal Server Error


301 -> 
try {
    //djdjd

} catch (ex) {
    APIError(ex.message);
}

ES6

