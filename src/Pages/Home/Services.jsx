import { NavLink } from "react-router-dom";
import service from "../../../src/img/services.png";
import teeth from "../../../src/img/tooth.png";

const Services = () => {
  const active = "bg-[#F7A582] px-4 py-4 rounded lg:mx-5 font-semibold";
  const inActive = "text-black mx-5";
  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-2 ">
        <div className="">
          <img src={service} alt="" />
        </div>
        <div className="lg:-ms-20 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold">Our Services</h2>

          <p className="pb-8 pt-5  w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>

          <div className="tabs tabs-boxed my-5 bg-gray-100 py-4 ">
            <div className="mx-auto">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : inActive)}
              >
                Cavity Protection
              </NavLink>
              <NavLink
                to="dd"
                className={({ isActive }) => (isActive ? active : inActive)}
              >
                Cosmetic Dentisty
              </NavLink>
              <NavLink
                to="aa"
                className={({ isActive }) => (isActive ? active : inActive)}
              >
                Oral
              </NavLink>
            </div>
          </div>

          <img className="w-full" src={teeth} alt="" />
          <h2 className="text-2xl font-bold mt-10">
            Electro Gastrology Therapy
          </h2>
          <p className=" pt-5  w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error
          </p>
          <p className="pb-8 pt-5  w-full">
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <button className="btn btn-outline btn-warning">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
