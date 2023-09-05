import about_us from "../../img/about_us.jpg";
const About = () => {
  return (
    <div className="my-16 px-8 lg:px-0">
      <div className="grid gap-10 lg:grid-cols-2 max-w-screen-2xl mx-auto">
        <div className="col-span-1">
          <img src={about_us} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 space-y-5">
          <h1 className="text-4xl font-bold my-5">About our Hospital</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, autem,
            ipsam culpa aspernatur perspiciatis tempora, vel magnam sapiente
            asperiores neque excepturi non odio exercitationem eligendi? Labore
            nemo voluptatem hic, dolor ea perferendis voluptas eveniet error
            voluptate amet eos alias sit doloremque rerum ipsum dolore illum
            aliquam ex iusto repudiandae. Suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, autem,
            ipsam culpa aspernatur perspiciatis tempora, vel magnam sapiente
            asperiores neque excepturi non odio exercitationem eligendi? Labore
            nemo voluptatem hic, dolor ea perferendis voluptas eveniet error
            voluptate amet eos alias sit doloremque rerum ipsum dolore illum
            aliquam ex iusto repudiandae. Suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, autem,
            ipsam culpa aspernatur perspiciatis tempora, vel magnam sapiente
            asperiores neque excepturi non odio
          </p>
          <button className="btn btn-outline btn-warning">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default About;
