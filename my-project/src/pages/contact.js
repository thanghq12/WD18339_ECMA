import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header"
import {router, useEffect, useState} from "../libs/index.js";
// import { posts,comments } from '../../db.json'
const ContactPage = function() {
    // state
    const [posts,setPost] = useState([]);
    // khởi tạo post = []
    // setPost đẻ set giá trị cho post
    //useEffect (callback,deps)
    // callback đối số đầu tiên đay là hàm truyền vào
    //deps - depenencies là những tác động dẫn đến gọi useEffect
    //1 .useEffect(callback)
    // - callback đưoược gọi khi component rerender (mỗi lần
    //compnent hieenr thị lại thì sẽ thực hieenj gọi calback
    //2 . useEffect(callback,[])
    //- callback chỉ được gọi lần đầu tiên -> dùng cho load danh sách
    //3 . useEffect(callback,[deps])
    // - callback được gọi mỗi khi deps được thục hiện
    useEffect(()=>{
        //callapi bằng fetch
        fetch("http://localhost:3001/posts")
            .then((reponse)=> reponse.json())
            .then((data) =>setPost(data))
    },[])
    //xóa
    useEffect(()=>{
        // 1 mảng nút delete 
        const btnDeletes = document.querySelectorAll(".btn-delete");
        for(let btn of btnDeletes) {
            btn.addEventListener("click",()=> {
                let id = btn.dataset.id; // lấy id ngta click để xóa
                fetch(`http://localhost:3001/posts/${id}`,{
                    method: 'DELETE'
                }).then(()=> router.navigate("/contact"))
            })
        }
    })
    console.log((posts))
    return `
        ${HeaderComponent()}
        <h1>Đây là trang contact</h1>
        <table border=1>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>views</th>
                <th>hành động</th>
            </tr>
            ${posts.map(function (post) {
               return `<tr>
                    <th>${post.id}</th>
                    <th>${post.title}</th>
                    <th>${post.views}</th>
                    <th>
                        <a href="/edit-post/${post.id}">sửa</a>
                        <button data-id="${post.id}" class="btn-delete">Delete </button>
                    </th>
                </tr>`
            })}
        </table>
        <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
        ${FooterComponent()}
    `
}
// tạo ra 1 trang đổ bảng comment
export default ContactPage;