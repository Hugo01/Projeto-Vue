import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService{
    
 //GET POSTS

 static async getPosts(){
        const res = await axios.get(url);
        const data = res.data;
       
       
        return data.map(post => ({
                ...post,
                data: new Date(post.data)
        
            }))
        
   
 }

 //Criar POSTS
static inserir(texto){
    return axios.post(url, {
        texto
    });
}

 //DELETAR POSTS

 static deletar(id){
     return axios.delete(`${url}${id}`)
 }
}
export default PostService