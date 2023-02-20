import { Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const InputText = ({ name, label, ...props }) => (
  <div>
    <label htmlFor={name}>{label} </label>
    <input type={name} id={name} {...props} />
  </div>
);

function App() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: { name: "", email: "", age: "" },
  });

  //   console.log("watch", watch());
  //   console.log("errors", errors);
  //   console.log("touchedFields", touchedFields);

  const onValid = (data) => {
    console.log("onValid", data);
    reset();
  };

  const onInValid = (data) => {
    console.log("onInValid", data);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <InputText name={"name"} label="Name" {...field} />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <InputText name={"email"} label="Email" {...field} />
          )}
        />

        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <InputText name={"age"} label="Age" {...field} />
          )}
        />

        <Controller
          control={control}
          name="number"
          render={({ field }) => <Input {...field} />}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
