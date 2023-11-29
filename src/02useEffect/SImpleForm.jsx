import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SImpleForm = () => {
    const [formState, setformState] = useState({
        username: 'Luis',
        email: 'luis@gmail.com'
    });

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setformState({...formState, [name]: value});
    }

    useEffect(() => {
        //console.log('useEffect')
    }, [])

    useEffect(() => {
        //console.log('formState changed')
    }, [formState])

    useEffect(() => {
        //console.log('email changed')
    }, [email])
    


  return (
    <>
        <h2>Simple Form</h2>
        <hr />
        <input type="text" className="form-control" onChange={onInputChange} name="username" value={username} id="" />
        <input type="text" className="form-control mt-2" onChange={onInputChange} name="email" value={email} id="" />

        {
            username === "Luis2" && <Message />
        }
    </>
  )
}
