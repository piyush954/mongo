import SmallDataBox from "../../Components/SmallDataBox/SmallDataBox";
import Data from "../../Data/headerData.json";
import PagesProfileDetails from "./PagesProfileDetails";
import PagesProfileOverview from "./PagesProfileOverview";
import CSS from "./Body.module.css";

const TopDataBox = () => {
  return (
    <>
      <div className="d-lg-flex justify-content-between align-items-center">
        {Data.map((items) => (
          <SmallDataBox
            per={items.per}
            key={items.Paragraph}
            num={items.num}
            prime={items.prime}
            Paragraph={items.Paragraph}
          />
        ))}
      </div>
    </>
  );
};

const BodyData = () => {
  return (
    <>
      <div className="d-flex">
        <div className={`flex-fill ${CSS.heightNinty} overflow-auto`}>
          <TopDataBox key={Data} Data={Data} />
          <PagesProfileOverview />
        </div>
        <div className="col-lg-3">
          <PagesProfileDetails />
        </div>
      </div>
    </>
  );
};

export default BodyData;
