// import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Eggs",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Electricity",
      amount: 15,
      category: "Utilities",
    },
  ]);
  return (
    <div>
      {/* <Form /> */}
      {/* <ExpenseForm />/ */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      />
    </div>
  );
}
export default App;
