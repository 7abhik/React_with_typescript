import categories from "../categories";
interface Props {
  handleExpenseFilter: (category: string) => void;
}
const ExpenseFilter = ({ handleExpenseFilter }: Props) => {
  return (
    <select
      className="form-select"
      id="categories"
      onChange={(event) => handleExpenseFilter(event.target.value)}
    >
      <option key="all" value="">
        {" "}
        All Categories
      </option>
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default ExpenseFilter;
