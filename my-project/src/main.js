
// import Navigo from "navigo";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import PostDetail from "./pages/postDetail";
import {render,router} from "./libs"
import AddPostPage from "./pages/addPost";
import UpdatePostPage from "./pages/updatePost";
// xây dựng hàm reder component ra html 

// const render = (container,component) => {
//     document.querySelector(container).innerHTML = component();
// }
// gán component HomePage vào div app 
// dòng này mặc định khai báo như thế này 
// const router = new Navigo('/', {linksSelector:"a"});
// định nghĩa router cho từng page
const app= document.querySelector('#app')
router.on('/home',function () {
    render(app,HomePage);
})
router.on('/contact',function() {
    render(app,ContactPage);
})

router.on('/add-post',function() {
    render(app,AddPostPage);
})
router.on('/edit-post/:id',function({data}) {
    render(app,()=> UpdatePostPage(data.id));
})
//router param
///detailpost/8/9 <=> id = 8 <=> idpost = 9 
router.on('/detailpost/:id',function({data}){
    render(app,() => PostDetail(data.id))
})
router.resolve();

// HomePage();
// navigo // sử dụng npm để cài navigo 
// mở terminal gõ lệnh npm i navigo

//tạo 1 list data product trong db,json gồm 
// id ,tensp,gia,trangthai 
// sử dụng taiwind kết hợp với route xây dựng ra 
//1 trang danh sách sản phẩm
//1 trang chi tiết sản phẩm 