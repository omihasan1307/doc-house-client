import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-xl font-bold mx-10 my-10">Add a new Doctor</h1>

      <div className="lg:mx-10 border px-8 lg:px-14 py-14 rounded-2xl shadow-lg lg:w-[50%] mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Name
            </label>
            <br />
            <input
              {...register("name")}
              className="px-4 py-2 border rounded-lg my-2 w-full "
              type="text"
              placeholder="Enter Doctor's Name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Email
            </label>
            <br />
            <input
              {...register("email")}
              className="px-4 py-2 border rounded-lg my-2 w-full "
              type="email"
              placeholder="Enter Doctor's Email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Specialty
            </label>
            <br />
            <select
              {...register("doctorSpecialty")}
              className="px-4 py-2 border rounded-lg my-2 w-full"
            >
              Pick One
              <option value="Cosmetic"> Cosmetic Dentisty</option>
              <option value="Orthodontics">Teeth Orthodontics</option>
              <option value="Cavity">Cavity Protection</option>
              <option value="Cleaning">Teeth Cleaning </option>
              <option value="Pediatric">Pediatric Dental </option>
              <option value="Oral">Oral Surgery </option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Image
            </label>
            <br />
            <input
              {...register("photoUrl")}
              className="px-4 py-2 border rounded-lg my-2 w-full "
              type="file"
            />
          </div>
          <button className="w-full py-2 rounded-lg border bg-[#07332F] text-white">
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
