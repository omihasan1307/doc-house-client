import logo from "../../src/img/logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content">
      <footer className="footer p-10 max-w-screen-2xl mx-auto">
        <div>
          <div className=" flex items-center font-bold ">
            <img className="w-10 bg-[#07332F] p-1 rounded" src={logo} alt="" />
            <p className="mx-4 text-xl">
              <span className="text-[#F7A582]">DOC </span> HOUSE
            </p>
          </div>
          <p className="mb-5 mt-2">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. has been since the printer took.
          </p>
          <button className="btn btn-outline btn-warning  ">Appoinment</button>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Doctors</a>
          <a className="link link-hover">Departments</a>
          <a className="link link-hover">Online Payment</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">My Account </a>
        </div>
        <div>
          <span className="footer-title">Doc House Services</span>
          <a className="link link-hover">Pediatric Clinic</a>
          <a className="link link-hover">Diagnosis Clinic</a>
          <a className="link link-hover">Cardiac Clinic</a>
          <a className="link link-hover">Laboratory Analysis</a>
          <a className="link link-hover">Gynecological Clinic</a>
          <a className="link link-hover">Personal Counseling</a>
          <a className="link link-hover">Dental Clinic </a>
        </div>
        <div>
          <span className="footer-title">Working Hours</span>
          <a className="link link-hover">Monday - 10 am to 7 pm</a>
          <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
          <a className="link link-hover">Thursday - 10 am to 7 pm</a>
          <a className="link link-hover">Friday - 10 am to 7 pm</a>
          <a className="link link-hover">Saturday - 10 am to 7 pm</a>
          <a className="link link-hover">Sunday - 10 am to 7 pm</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
