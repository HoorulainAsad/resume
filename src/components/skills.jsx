import React from 'react'

export default function Skills({items}){
  const list = items || ['JavaScript','React','Node.js','CSS','HTML']
  return (
    <div className="skills-list">
      {list.map((s,i)=>(<div className="tag" key={i}>{s}</div>))}
    </div>
  )
}
