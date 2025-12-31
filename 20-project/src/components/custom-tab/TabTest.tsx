import Tabs from "./Tabs";

function RandomComponent(){
  return <h1>This a random Component</h1>
}

const data = [
  {label: "Tab 1",
    content: "This is the content for Tab 1"
  },
  {label: "Tab 2",
    content: "This is the content for Tab 2"
  },
  {
    label: "Tab 3",
    content: <RandomComponent />

  }
]

function handleTabFunction(index: number){
  console.log(data[index].label)
}


export default function TabTest(){

  return(
    <Tabs tabContents={data} onChange={handleTabFunction}/>
  )

}