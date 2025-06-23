import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpensesForm({ setExpensesData }) {
  // const [title,setTitle] = useState('')
  // const [category,setCategory] = useState('')
  // const [amount,setAmount] = useState('')
  const [expenses, setExpenses] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const validate = (formData) => {
    const errorData = {};
    if (!formData.title) {
      errorData.title = "Title is required";
    }
    if (!formData.category) {
      errorData.category = "Category is required";
    }
    if (!formData.amount) {
      errorData.amount = "Amount is required";
    }
    setErrors(errorData);
    return errorData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expenses);
    if (Object.keys(validateResult).length) return;

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
    // console.log(e.target);
    const { name, value } = e.target;
    setExpenses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        className={"input-container"}
        label={"Title"}
        id={"title"}
        name={"title"}
        value={expenses.title}
        onChange={handlerChange}
        errors={errors.title}
      />
      <Select className={"input-container"}
        label={"Category"}
        id={"category"}
        name={"category"}
        value={expenses.title}
        onChange={handlerChange}
        errors={errors.category}/>
      <Input
        className={"input-container"}
        label={"Amount"}
        id={"amount"}
        name={"amount"}
        value={expenses.amount}
        onChange={handlerChange}
        errors={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
