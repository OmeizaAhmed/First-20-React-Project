import MenuList from "./MenuList"


export default function MenuItem( { item }:any ){
  console.log(item)
  return(
  item.children && item.children.length > 0? <MenuList list={item.children}/>: <li>{item.label}<span>+</span></li>
  )
}