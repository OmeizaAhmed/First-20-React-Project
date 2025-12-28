import { useState } from 'react'
import data from "./data"
import "./styles.css"


export default function Accordion() {
  const [selected, setSelected] = useState<string[]>([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(currentId: string) {
    if (enableMultiSelection) {
      setSelected(prev => {
        if(prev.includes(currentId)){
          return prev.filter(item => item !== currentId)
        }
         return[...prev, currentId]})
    } else {
      setSelected(prev => prev.includes(currentId)? [] : [currentId])
    }
  }

  function toggleSelection(){
    if(enableMultiSelection){
      setSelected(prev => [prev[prev.length - 1]])
    }
    setEnableMultiSelection(prev => !prev)
  }
  return (
    <div className="acc-wrapper">
      <button onClick={() => toggleSelection()}>{enableMultiSelection ? 'Disable Multi Selection':'Enable Multi Selection'}</button>
      <div className="accordian">
        {
          data && data.length > 0 ?
            data.map((dataItem) => (
              <div className="item">
                <div onClick={(() => handleSingleSelection(dataItem.id))} className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  selected.includes(dataItem.id) ?
                    <div className='acc-content'>{dataItem.answer}</div>
                    : null
                }
              </div>
            )

            ) :
            <div>No data</div>
        }
      </div>
    </div>)
}