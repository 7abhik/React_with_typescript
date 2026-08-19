import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
const Schema = z.object({
  desc: z.string().min(3),
  amt: z.number({ invalid_type_error: "amount is required" }),
  cat: z.string().min(3),
});
type FormData = z.infer<typeof Schema>;
interface Props {
  expense: FormData;
  addExpenses: () => void;
}
const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(Schema) });
  const onSubmit = (data: FieldValues) => {
    console.log("Submitted");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          {...register("desc")}
          id="desc"
          type="text"
          className="form-control"
        />
        {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
      </div>
      <div>
        <label className="form-label">Amount</label>
        <input
          {...register("amt", { valueAsNumber: true, required: true })}
          id="amt"
          type="number"
          className="form-control"
        />
        {errors.amt && <p className="text-danger">{errors.amt.message}</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          {...register("cat")}
          id="cat"
          type="string"
          className="form-control"
        />
        {errors.cat && <p className="text-danger">{errors.cat.message}</p>}
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
