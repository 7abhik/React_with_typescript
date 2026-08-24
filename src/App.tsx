// import Form from "./components/Form";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
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
    {
      id: 4,
      description: "Movies",
      amount: 50,
      category: "Entertainment",
    },
  ]);
  const [selectedCategory, setSelectedCatgory] = useState("");
  const isVisibleCategories = expenses.filter((e) =>
    selectedCategory ? e.category === selectedCategory : expenses,
  );
  return (
    <div>
      {/* <Form /> */}
      <ExpenseForm
        addExpenses={(data) => {
          setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
        }}
      />
      <ExpenseFilter
        handleExpenseFilter={(selectedCategory) =>
          setSelectedCatgory(selectedCategory)
        }
      />
      <ExpenseList
        expenses={isVisibleCategories}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      />
    </div>
  );
}
export default App;
