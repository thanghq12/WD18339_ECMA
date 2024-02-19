import { router, useEffect } from "../libs";

const AddPostPage = () => {
    useEffect(()=> {
        // viết code trong useEffect 
        const addForm = document.querySelector('#add-form');
        const title = document.querySelector('#title');
        const views = document.querySelector('#views');
        addForm.addEventListener("submit",(e)=>{
            e.preventDefault(); // ngăn sự kiện load lại trang 
            let newPost  = {
                "title": title.value,
                "views": views.value
            }
            fetch("http://localhost:3001/posts",{
                method : 'POST', // đối với API thêm thì method là POST
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newPost) // ép lại kiểu data để gửi lên API
            }).then(()=>router.navigate("/contact"))
        })
    })
    return `
        <div>
            <form action="" id="add-form">
               Title <input type="text" id="title"/>
               Views <input type="text" id="views"/>
               <button> Add New </button>
            </form>
        </div>
    `
}

export default AddPostPage;