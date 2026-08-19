const ExpenseList = () => {
  const Items = [
    {
      description: "Milk",
      amount: 10,
      category: "Groceries",
    },
    {
      description: "Eggs",
      amount: 5,
      category: "Groceries",
    },
    {
      description: "Electricity",
      amount: 15,
      category: "Utilities",
    },
  ];
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Items.map((item, index) => (
          <tr key={index + "0"}>
            <td key={item.description}>{item.description}</td>
            <td key={item.amount + ""}>{item.amount}</td>
            <td key={item.category + index}>{item.category}</td>
            <td key={index + "1"} className="text-danger">
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
