import React, { useState } from "react";

export default function ExpensesForm({ setExpensesData }) {
  // const [title,setTitle] = useState('')
  // const [category,setCategory] = useState('')
  // const [amount,setAmount] = useState('')
  const [expenses, setExpenses] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setExpensesData((prevState) => [
      ...prevState,
      { ...expenses, id: crypto.randomUUID() },
    ]);
    // const data = getFormData(e.target)
    // const dataWithId = {...data,id:crypto.randomUUID()}
    // setExpensesData((prevState)=>[...prevState,dataWithId])
  };
  // const getFormData = (form)=>{
  //   const formData = new FormData(form);
  //   const newData = {}
  //   for (const [key,value] of formData.entries()) {
  //     newData[key] = value
  //   }
  //   return newData
  // }
  const handlerChange = (e) => {
    console.log(e.target);
    const {name,value} = e.target
    setExpenses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expenses.title}
          onChange={handlerChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expenses.category}
          onChange={handlerChange}
        >
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
        <input
          id="amount"
          name="amount"
          value={expenses.amount}
          onChange={handlerChange}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
