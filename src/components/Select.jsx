import React from 'react'

export default function Select({className,label,id,name,value,onChange,errors}) {
    const categoryValue = ['Grocery','Clothes','Bills','Education','Medicine']
  return (
     <div className={className}>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option hidden>Select {label}</option>
      {categoryValue.map((category)=>{
        return <option key={category} value={category}>{category}</option>
      })}
    </select>
    <p className="error">{errors}</p>
  </div>
  )
}
