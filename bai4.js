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

