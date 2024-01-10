let color = ["red","green","blue"];
//
// let firstColor = color[0];
// let secondColor = color[1];
// let thirdColor = color[2];

//es6  detructuring array
let [, ,thirdColor] = color;
console.log(`${thirdColor}`);

let infoStudent = ["hoàng quang thắng",1996,"Trịnh văn bô"];
// detructuring object 
let person = {name: "thang",age : 30,city :"hà nội"};
// let name = person.name;
let {name:a,age:b,city:c} = person;
console.log(`${a} , ${b}, ${c}`);

let sinhVien = {
    monhoc : [
        {
            toan: 9,
            ly :10,
            hoa : 6
        }
    ]
}
let {
    monhoc : [
        {
            toan: t1,
            ly : l1,
            hoa : h1
        }
    ]
} = sinhVien

console.log(`${t1} , ${l1}, ${h1}`); 

//không sử dụng detructuring lấy giá trị toán lý hóa 
// sử dụng detructuring để lấy giá trị toan , ly ,hoa
// sử dụng detructuring trong for
let arrTeacher = [
    {
        ten:"Hoàng Quang Thắng",
        namsinh:1996,
        tinhtranghonnhan : 0, // 0 là độc thân 1 đã có vợ 
        luong: 3000, 
        monhoc : ["ECMA","PHP2"]
    },
    {
        ten:"Vũ Anh Tú",
        namsinh:1993,
        tinhtranghonnhan : 0, // 0 là độc thân 1 đã có vợ 
        luong: 6000, 
        monhoc : ["ECMA","PHP2"]
    },
]
for(let { ten,namsinh,tinhtranghonnhan,luong,monhoc } of arrTeacher) {
    console.log(`${ten} ,${namsinh}`);
}
// thêm 3 giảng viên nữa có những thuộc tính tương tự vào
// array list trên 
//hiển thị đầy đủ thông tin của giảng viên trong array list trên 
// kiểm tra những giảng viên nào trên 30 tuổi và tình trạng hôn nhân 
// là độc thân hiển thị ra là ế 
// đếm xem có bao nhiêu giảng viên dạy được môn học ECMA 





