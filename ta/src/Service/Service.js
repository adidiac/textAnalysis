import axios from 'axios'
function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}';
}
export function service(setResult,text)
{
    axios.post('http://localhost:3001/add',
    {
        data:text
    }).then(res=>{
        if(res.status==200)
        {
            console.log(res.data)
            if(!isEmptyObject(res.data))
                setResult(res.data);
            else
                alert("Please type something before submit!")
        }
        else
        {
            alert("Error");
        }
    })
}