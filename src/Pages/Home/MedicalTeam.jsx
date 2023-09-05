import team from "../../img/team.png";
import Title from "../../shared/Title";

const MedicalTeam = () => {
  return (
    <div className="max-w-screen-2xl mx-auto text-center">
      <Title
        title={"Our Team Memebers"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ad?"
        }
      />
      <img src={team} alt="" className="w-3/6 mx-auto" />
    </div>
  );
};

export default MedicalTeam;
