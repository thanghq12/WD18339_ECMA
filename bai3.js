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
        birth:1996,
        team : 1 // web  , 2 mobile 
    },
    {
        name:"Tú",
        birth:1993,
        team: 1 //web
    },
    {
        name:"Sơn",
        birth:1993,
        team: 2 //mobile 
    },
]
//tạo 2 arrayobject là teacherMobilePoly ,teacherWebPoly
// có sẵn 3 GV ở 
//trong mỗi arrayobject // duyệt mảng arrTeacherPoly để tìm 
// GV vào trong team web nhét vào mảng teacherWebPoly
// GV nào trong team mobile nhé vào mẩng teacherMobilePoly
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
// console.log(arrayTeacherPoly);

function tich3so(a,b,c) {
    return a * b * c;
}
//sử dụng bình thường 
tich3so(3,4,5);
// sử dụng spreed array để truyền vào trong đối số 
let number = [2,4,5];
console.log(tich3so(...number));
//Rest Parameter 
// dùng để trong trường hợp không biết rõ trong hàm có bao nhiêu đối số 
function restTest(...args) {
    console.log(args);
}
restTest(1,{id:5},3,4,5,6,7,8,9,10);
function tinhChuVi(...hcn) {
    for(let {chieudai,chieurong} of hcn ) {
        console.log(`diện tích là ${chieudai * chieurong}`);
        console.log(`chu vi  là ${(chieudai + chieurong) * 2}`);
    }
}
tinhChuVi({chieudai:5,chieurong:6},{chieudai:7,chieurong:8})
//xây dựng 1 hàm tính diện tích và chu vi của nhiều hĩnh nhật 
// với mỗi đôi số truyền vào sẽ là 1 object {chieudai:5,chieurong:4}
