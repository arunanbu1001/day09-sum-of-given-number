let a = 3472;
let s = 0;
while(a > 0)
{
    reminder = a % 10;
    s = s + reminder;
    a = a - reminder;
    a = a / 10;
}
console.log("sum of given number:"+s);
