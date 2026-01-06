import UseWindowResize from ".";



export default function UseWindowResizeTest(){

  const {height, width} = UseWindowResize();
  
  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>Window height: {height}px</p>
      <p>Window width: {width}px</p>
    </div>
  )
  
}