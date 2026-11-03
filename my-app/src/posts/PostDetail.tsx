import {useEffect, useState} from "react";
import type {Post} from './Posts'
import { useParams, useNavigate  } from "react-router-dom";
import axios from 'axios';

const PostDetail = () => {
    
    // posts/2 = '2'는 문자열임
    const {id} = useParams<{id: string}>();

    // Post | null - null도 자료형이므로 필수 기입함
    const [post, setPost] = useState<Post | null>(null);

    const navigate = useNavigate();

    // 해당 id의 글 가져오기
    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = 
                    await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
                    setPost(response.data);

                }catch(error){
                alert("게시글을 가져오는 중 오류가 발생했습니다.")
            }
        };
        if (id) {
            fetchPost();
        }

    }, [id])

    if(!post)
        return <div>로딩 중 ......</div>

    return(
        <div>
            <h2>게시글 내용</h2>
            <p>번호: {post.id}</p>
            <p>작성자 ID: {post.userId}</p>
            <p>제목: {post.title}</p>
            <p>내용: {post.body}</p>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </div>
    )
}
export default PostDetail;