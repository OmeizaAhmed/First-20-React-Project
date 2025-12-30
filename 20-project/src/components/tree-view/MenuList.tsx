import MenuItem from "./MenuItem";

export default function MenuList( {list = [] }:any ){
  

  return(
    <div>
      <ul>
      {
        list.map( (item: {label:string; to: string; [key:string]: unknown}) => (
          <MenuItem item={item} key={item.label}/>
        ))
      }
      </ul>
    </div>
  )
  
}