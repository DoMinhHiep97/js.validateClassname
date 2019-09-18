function validateClassName(str) {
    let redExp=/^[CAP][0-9]{4}[GHIKLM]$/;
    return redExp.test(str);
}
let str1="C0318G";
console.log(validateClassName(str1));
let str2="M0318G";
console.log(validateClassName(str2));
let str3="P0323A";
console.log(validateClassName(str3));