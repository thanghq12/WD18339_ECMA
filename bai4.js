// arrow function 

const add = (a,b) => {
    return a + b
}
// nếu như chỉ có 1 biểu thức chúng ta hoàn có thể
// viết ngắn gọn như sau 
const add1 = (a,b) => a +b ;
// viết hàm sau đó truyền tham số chạy được luông
const add2 = ((a,b)=>{
    return a + b
})(7,8)
console.log(add2);

const tinhDienTich = ((...hcn)=>{
    for(let {cr,cd} of hcn) {
        console.log(`Diện tích là ${cr * cd}`)
    }
})({cr:5,cd:8},{cr:9,cd:10})
tinhDienTich
// sử dụng arrow function để viết hàm tính diện tích 
//của nhiều hình chữ nhật với tham số truyền vào là 
// nhiều đối tượng hình chữ nhật 

//1 số hàm có sẵn sử dụng arrow function 
// map được sử dụng để tạo ra 1 mảng mới bằng cách 
// ánh xạ tất cả các phần tử của 1 mảng cũ 
let numbers = [1,2,3,4,5,6];
let doubleNumbers = numbers.map((num)=>num * 2);
console.log(doubleNumbers);
//tạo 1 mảng list hcn như sau 
let hcn = [{cd:8,cr:6},{cd:7,cr:6},{cd:9,cr:6}];
let dienTich = hcn.map(({cd,cr})=> cd * cr);
console.log(dienTich);
//sử dụng map để tạo ra 1 mảng 
//lưu diện tích của các hình chữ
// nhật trên
let numberString = ["1","2","3","4","5","6"];
// tạo ra  1 mảng mới biến các chuỗi số thành các chữ số
// [1,2,3,4,5,6]
let teacher = [{id:1,name:"Thắng"},{id:2,name:"Tú"}];
// tạo ra 1 mảng mới chỉ để lưu tên của giảng viên 
let students = [
    {id:1,name:"Huy",namsinh:2003,toan:7,ly:8,hoa:9},
    {id:2,name:"Toàn",namsinh:2003,toan:0,ly:0,hoa:10}
]
let infoStudent = students.map((student)=>{
    return {
        id :student.id,
        name : student.name
    }
})
//tạo ra 1 mảng mới là infoStudent chỉ lưu thông tin 
// dạng như sau của từng student
// tuoi = năm hiện tại - năm sinh 
//điểm tb = toan+ly + hoa/3
// {id,name,tuoi,diemtb}
// console.log(123);
// console.log(1233333);
// console.log(1232323213123);
console.log(1232323213123); console.log(1232323213123); 
console.log(1232323213123);
