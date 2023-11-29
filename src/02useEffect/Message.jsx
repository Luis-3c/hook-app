import { useEffect } from "react"

export const Message = () => {
    
    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            const cords = {x,y};
            console.log(cords);
        }
        
        window.addEventListener('mousemove', onMouseMove)

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    
  return (
    <>
        <h3>User already exists</h3>
    </>
  )
}
