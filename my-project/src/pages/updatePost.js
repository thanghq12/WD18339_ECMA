import { useEffect, useState } from "../libs"

const UpdatePostPage = (id) => {
    const [post,setPost] = useState({});
    useEffect(()=> {
        fetch(`http://localhost:3001/posts/${id}`)
        .then(response => response.json())
        .then(data=> setPost(data))
    },[]) // nếu có [] component đó chỉ được gọi 1 lần
    return `
        <div>
            <form action="" id="update-form">
               Title <input type="text" id="title" value="${post.title}"/>
               Views <input type="text" id="views" value="${post.views}"/>
               <button> Add New </button>
            </form>
        </div>
    `
}
export default UpdatePostPage;