import { createContext, useEffect, useState } from "react";
import featureFlagsDataService from "./data";

export const FeatureFlagsContext = createContext<{loading: boolean, enableFlags:unknown}| null>(null)
export default function FeatureFlagGlobalState({children}:{children: React.ReactNode}){

  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [enableFlags, setEnableFlags] = useState<unknown>();

  async function fetchFeatureFlags(){
    try{
      setLoading(true)
      const data = await featureFlagsDataService();
      setEnableFlags(data)
      setLoading(false)
    } catch(e){
      setLoading(false)
      if (e instanceof Error){
        setErrMessage(e.message)
      }
    }
  }

  useEffect(()=>{
    fetchFeatureFlags()
  },[])

  if(errMessage) return <div>{errMessage}</div>

  return(
    <FeatureFlagsContext.Provider value={{loading, enableFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}