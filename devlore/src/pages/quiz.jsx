import {useLocation } from 'react-router-dom';
export default function Quiz(){
    const { state } = useLocation();
    const url = state.url;
    console.log(url);
    return(
        <div>
            <h1>Quiz page</h1>
        </div>
    )
}