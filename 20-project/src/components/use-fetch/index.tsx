import { useEffect, useState } from "react";


export default function UseFetch(url:string, option={}){
  const [ data, setData ] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState<string | null>(null)

  async function fetchData(){
    try{
      setLoading(true);
      const res = await fetch(url, {...option});
      if(!res.ok){
        throw new Error(res.statusText)
      }
      const data = await res.json()
      setData(data)
      console.log(data)
      setLoading(false);
    } catch(e){
      setLoading(false)
      if (e instanceof Error){
        setError(e.message)
      }
    }
  }
  useEffect(()=>{
    fetchData()
  }, []);

  return {data, error, loading}
}