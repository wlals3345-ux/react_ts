import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type {Post} from "./Posts"
import axios from 'axios';


const AddPost = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            const newPost: Omit<Post, 'id'> = {userId: 1, title, body};
            const response=
                await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
                console.log("");
                setTitle("");
                setBody("");
                alert("게시글이 성공적으로 등록")
                navigate('/');
        }catch(error){
            alert("게시글 등록 중 오류가 발생했습니다.")
        }

    }
    return (
        <div>
            <h2>글쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <input 
                    type="text"
                    placeholder="제목입력 ㄱ"
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>

                <div>
                    <textarea 
                        rows={5}
                        placeholder="내용을 입력하세요 内容を入力てください。"
                        onChange={(e) => setBody(e.target.value)}
                   />
                </div>
                <button type="submit">등록</button>


            </form>
        </div>
    )    
}
export default AddPost;