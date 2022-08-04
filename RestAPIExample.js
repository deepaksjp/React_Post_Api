import React, {useState} from 'react';

const RestAPIExample = () => {
    let [name, setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [mob, setMob] = useState(null);
    const saveData = () => {
        let data = {name, email, mob};
        fetch('http://localhost:3300/user',{method:'POST',
        headers:{
            Accept:"application/json",
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data),
   
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res)
        })
    })
}
    return (
        <div>
            <label for="name">Name : </label>
            <input type='text'  id='name' onChange={e=>setName(e.target.value)} /> <br/><br/>
            <label for="email">Email : </label>
            <input type='text' onChange={e=>setEmail(e.target.value)} /> <br/><br/>
            <label for="mob">Mob : </label>
            <input type='text' onChange={e=>setMob(e.target.value)} /> <br/><br/>
        <button onClick={saveData}>Submit</button>
        </div>
    );
};

export default RestAPIExample;