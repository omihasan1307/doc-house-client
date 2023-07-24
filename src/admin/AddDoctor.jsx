import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_APP_Image_Upload_token;

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.photoUrl[0]);

    axios.post(img_hosting_url, formData).then((res) => {
      if (res.data.success) {
        const imgUrl = res?.data?.data?.display_url;
        const { name, email, doctorSpecialty, price } = data;
        const doctor = {
          doctorName: name,
          doctorEmail: email,
          doctorSpecialty,
          fees: parseFloat(price),
          doctorImg: imgUrl,
          role: "doctor",
        };

        axios
          .post(
            "https://doc-house-server-omihasan1307.vercel.app/doctorList",
            doctor
          )
          .then((res) => {
            if (res.data === "user already exists") {
              enqueueSnackbar(`Hi , Your doctor already added `, {
                variant: "error",
              });
            } else {
              reset();
              enqueueSnackbar(`Hi , Your doctor has been added `, {
                variant: "success",
              });
            }
          });
      }
    });
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
              {...register("name", { required: true })}
              className="px-4 py-2 border rounded-lg my-2 w-full "
              type="text"
              placeholder="Enter Doctor's Name"
            />
            <p className="text-red-600 mx-5 ">
              {errors.name && <span>Doctor's Name is required</span>}
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Email
            </label>
            <br />
            <input
              {...register("email", { required: true })}
              className="px-4 py-2 border rounded-lg my-2 w-full "
              type="email"
              placeholder="Enter Doctor's Email"
            />
            <p className="text-red-600 mx-5 ">
              {errors.email && <span>Doctor's Email is required</span>}
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Fees
            </label>
            <br />
            <input
              {...register("price", { required: true })}
              className="px-4 py-2 border rounded-lg my-2 w-full "
              type="number"
              placeholder="Enter Doctor's Feed"
            />
            <p className="text-red-600 mx-5 ">
              {errors.price && <span>Doctor's Email is required</span>}
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Specialty
            </label>
            <br />

            <select
              defaultValue="Pick One"
              {...register("doctorSpecialty", { required: true })}
              className="px-4 py-2 border rounded-lg my-2 w-full"
            >
              <option disabled>Pick One</option>
              <option> Cosmetic Dentisty</option>
              <option>Teeth Orthodontics</option>
              <option>Cavity Protection</option>
              <option>Teeth Cleaning </option>
              <option>Pediatric Dental </option>
              <option>Oral Surgery </option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-semibold px-4">
              Image
            </label>
            <br />
            <input
              {...register("photoUrl", { required: true })}
              className="px-4 py-2 border rounded-lg my-2 w-full "
              type="file"
            />
            <p className="text-red-600 mx-5 ">
              {errors.photoUrl && <span>Doctor's Email is required</span>}
            </p>
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
