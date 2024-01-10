// var ,let,    const 
// let a = 5;
// let a = 6;
var a = 5;
//
if(1<2) {
    let a = 6;
    var b = 8;
}
//sai 
console.log(b);
console.log(a);
const c = 9;
// template string
let name = "thanghq";
let age = 24; 
// let msg = "hello" + name + "tuổi " + age;
let msg = `hello ${name}      


                 b b  tuổi ${age + 5}`;
console.log(msg);
//tạo ra các biến  
// ten,namsinh,diachi,gioitinh gán giá trị 1/0 (1 là ông 0 là bà )
// - tính tuổi = Năm hiện tại - năm sinh ( get current year in javascript)
//sử dụng console.log để hiển thị ra câu lệnh 
// sau :
// Ông/Bà Nguyễn Văn A 27 tuổi có/không đủ điều
// kiện đi nghĩa vụ quân sự 
// biết nếu giới tính = 1 hiển thị trong msg là ông
// nếu giới tính = 0 hiển thị trong msg là bà 
// biết độ tuổi đi nghĩa vụ quân sự từ 18 - 27 
// let ten = "Nguyễn Văn A";
// let namSinh = 2004;
// let tuoi = new Date().getFullYear() - namSinh;
// let diaChi = "Trịnh văn bô";
// let gioiTinh = 1;
// let ckGioiTinh = gioiTinh == 1 ? "Ông" : "Bà";
// let ckDieuKien = tuoi >= 18 && tuoi <= 27 ? "Đủ đk" : "Ko đủ";
// let message = `${ckGioiTinh} ${ten} ${tuoi} tuổi ${ckDieuKien} đi NVQS`;
// console.log(message);
//------Mảng------
let arr = [5,6,7,8];
for(let i = 0; i < arr.length ; i ++) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}
//hiển thị các phần tử trong mảng là số chẵn 
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
let studentObject1 = [
    {
        ten:"nguyen van a",
        tuoi:18,
        diachi:"Trinh van bô"
    },
    {
        ten:"nguyen van b",
        tuoi:19,
        diachi:"Trinh van bô 1"
    }
]
// let studenObject2 = {}
for(let i = 0 ; i < studentObject1.length ; i ++) {
    console.log(studentObject1[i]);
}
for(let item of studentObject1) {
    console.log(item);
}
//khai báo 1 list array object student gồm 
//ten,diachi,diemtoan,diemly,diemhoa 
//đếm xem trong danh sách sinh viên đấy có bao nhiêu bạn có điểm
// trung bình >=7 và bao nhiêu bạn có điểm trung bình < 7
// biết điểm trung bình = (diemtoan + diemly+diemhoa)/3
