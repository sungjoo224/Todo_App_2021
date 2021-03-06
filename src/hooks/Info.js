import React,{useState, useEffect} from 'react'

function Info() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        console.log("랜더링이 완료되었습니다");
        console.log({name,nickname});
    },[name,nickname]);

    const onchangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onchangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div> <b>이름:</b> {name} </div>
                <div> <b>닉네임:</b> {nickname} </div>
            </div>
        </div>
    )
}

export default Info;