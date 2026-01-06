import { useEffect } from "react"


export default function useOutside(ref: any, handler: any){

  function handleEvent(event:any){
    if(!ref.current || ref.current.contains(event.target)){
      return
    }
    handler(event)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleEvent)
    document.addEventListener('touchstart', handleEvent)

    return () => {
      document.removeEventListener('mousedown', handleEvent)
      document.removeEventListener('touchstart', handleEvent)
    }
  }, [ref, handler])
}