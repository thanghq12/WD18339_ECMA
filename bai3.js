let days1 = ["mon","tue","wed"];
let days2 = ["thu","sat","sun"];
// let days = days1.concat(days2);
//spreed array là 1 tính năng trong ES6 cho phép 
//rải rác các phần tử của một mảng vào vị trí khác
// hoặc sao chép các phần tử của một mảng vào một 
// mảng mới 
let days = [...days1,...days2];
// console.log(days);
let days1Cop = [...days1];
//sao chép days1
let students = ["huy","an","hùng","lan"];
// sử dụng detructuring để tạo ra 2 biến lưu 

// huy là lớp trưởng
// an,hùng,lan là sinh viên 
let [loptruong,...sinhvien] = students;
let arrayTeacherPoly = [
    {
        name:"Thắng",
        birth:1996
    },
    {
        name:"Tú",
        birth:1993
    },
]
let arrayTeacherIntern = [
    {
        name : "hiển",
        birth:2000,
        score :5
    },
    {
        name : "hiếu",
        birth:1998,
        score :6
    },
    {
        name : "hiếu 1",
        birth:1998,
        score :8
    }
]
// duyệt mảng arrayTeacherIntern nếu gv nào có score > 5 thì sẽ đẩy
//vào arrayObject arrayTeacherPoly
for(let {name,birth,score} of arrayTeacherIntern) {
    if(score > 5) {
        arrayTeacherPoly = [...arrayTeacherPoly,{name,birth}]
    }
}
console.log(arrayTeacherPoly);