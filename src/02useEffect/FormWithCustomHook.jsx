import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    const {username, email, password} = formState;


  return (
    <>
        <h2>Form With Custom Hook</h2>
        <hr />
        <input type="text" className="form-control" onChange={onInputChange} name="username" value={username} placeholder="username" />
        <input type="text" className="form-control mt-2" onChange={onInputChange} name="email" value={email} placeholder="email"  />
        <input type="password" className="form-control mt-2" onChange={onInputChange} name="password" value={password} placeholder="password" />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
    </>
  )
}
