import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { optional, z } from "zod";
import categories from "../categories";
const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be minimum 3 charecters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "amount is required" })
    .min(0.1)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});
type FormData = z.infer<typeof Schema>;
interface Props {
  addExpenses: (data: FormData) => void;
}
const ExpenseForm = ({ addExpenses }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(Schema) });
  const onSubmit = (data: FormData) => {
    addExpenses(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true, required: true })}
          id="amtount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="categories" className="form-label">
          Select Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="categories"
          className="form-select"
        >
          <option key="" value="">
            Select a catergory
          </option>
          {categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
