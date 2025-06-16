import React from "react";

export default function ExpensesForm({setExpensesData}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = getFormData(e.target)
    const dataWithId = {...data,id:crypto.randomUUID()}
    setExpensesData((prevState)=>[...prevState,dataWithId])
  };
  const getFormData = (form)=>{
    const formData = new FormData(form);
    const newData = {}
    for (const [key,value] of formData.entries()) {
      newData[key] = value
    }
    return newData
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option hidden>Select Category</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
