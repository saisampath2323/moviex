import axios from 'axios';

const BASE_URL='https://api.themoviedb.org/3';
//const  TB_TOKEN=process.env.NEXT_APP_TMDB_TOKEN;
const TB_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTVmNzIyYjc1NTgxNjA3ZDMxYzZlYjNmYzYzZjY4NyIsInN1YiI6IjY1MjU3MjcwNjI5YjJjMDEzOWE2ZjE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtLM-H3TD0R1a1rg0YGZaqIfEVO_x6FCXZwArO_Svlg'

const headers ={
    Authorization:"bearer " + TB_TOKEN,
};
export const fenchapii= async(url,params)=>{
try{
    const{data}=await axios.get(BASE_URL+url,{
headers,params

    })
    return data;
}
catch(err){
console.log(err);
}
}