import { useRef } from "react";
import UseFetch from "../use-fetch";


export default function ScrollToTopBottom(){
  const {data, error, loading}: {data: any, error:string|null, loading: boolean} = UseFetch("https://dummyjson.com/products?limit=100")
  const bottomRef = useRef<HTMLDivElement | null>(null)

  function handleScrollToTop(){
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  function handleScrollToBottom(){
    if(bottomRef && bottomRef.current){
      bottomRef.current.scrollIntoView({behavior: "smooth"})
    }
  }


  if(loading) return <div>Loading... Please Wait</div>
  if(error) return <div>{error}</div>

  return(
    <div>
      {
        data?.products && data.products.length?
        <div>
          <h1>Scroll From Top To Bottom and Vice Versa</h1>
          <button onClick={handleScrollToBottom}>scroll to bottom</button>
          <div>{data.products.map((product: {title:string, id:string}) => (
            <div key={product.id}>{product.title}</div>
          ))}</div>
          <button onClick={handleScrollToTop}>scroll to top</button>
          <div ref={bottomRef}>
            <p>end of the page</p>
          </div>
        </div>
        :null

      }
    </div>
  )
}