import review1 from "../../img/review1.png";
import review2 from "../../img/review2.png";
import quote from "../../img/Quote_1_.png";
import Title from "../../shared/Title";

const Reviews = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 lg:px-0">
      <Title
        title={"What Our Patients Says"}
        subtitle={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></Title>
      <div className="grid lg:grid-cols-2 gap-10 mt-16 mb-10">
        <div className="shadow rounded-xl px-16 py-16">
          <div className="flex justify-between">
            <div className="flex items-center ">
              <img src={review1} alt="" />
              <div className="ms-5">
                {" "}
                <h2 className="text-xl font-bold">Awlad Hossain</h2>
                <h2 className="text-gray-400 mt-1">Business Man</h2>
              </div>
            </div>
            <img src={quote} alt="" />
          </div>
          <div className="mt-10 text-gray-500">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </div>
        </div>

        <div className="shadow rounded-xl px-16 py-16">
          <div className="flex justify-between">
            <div className="flex items-center ">
              <img src={review2} alt="" />
              <div className="ms-5">
                {" "}
                <h2 className="text-xl font-bold">Farhana Hossain </h2>
                <h2 className="text-gray-400 mt-1">HouseWife</h2>
              </div>
            </div>
            <img src={quote} alt="" />
          </div>
          <div className="mt-10 text-gray-500">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
