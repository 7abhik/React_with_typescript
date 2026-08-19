import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
function App() {
  return (
    <div>
      {/* <Form /> */}
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}
export default App;
