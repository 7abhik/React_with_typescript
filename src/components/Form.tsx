import { useForm, FieldValues } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(errors);
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input
          {...register("name", { minLength: 3, required: true })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Nume should be minimum 3 charecters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Age is required</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
