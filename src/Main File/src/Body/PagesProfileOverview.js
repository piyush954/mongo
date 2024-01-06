import { GoDotFill } from "react-icons/go";
import { FaCircleQuestion } from "react-icons/fa6";
import CSS from "./Body.module.css";
import {
  LineChartOne,
  DotLineChartOne,
  BarLineOne,
  StraightAnglePieChart,
  StackedAreaChart,
} from "../../Components/Graph/ProfileOverViewBarGraph";
import NameNum from "../../Components/Name and Number/NameNum";
import Data from "../../Data/ProfileActionData.json";

const MidSectionOne = () => {
  return (
    <>
      <div className="mt-3 d-lg-flex gap-3">
        <div className="bg-white col-lg-8">
          <div className="d-flex align-items-center justify-content-between p-4">
            <h5>Followers</h5>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <span
                className={`${CSS.PurpleColor} d-flex align-items-center justify-content-center`}
              >
                <GoDotFill />
                <p className="mb-0">Income</p>
              </span>
              <span
                className={`${CSS.RedColor} d-flex align-items-center justify-content-center`}
              >
                <GoDotFill />
                <p className="mb-0">Outcome</p>
              </span>
            </div>
          </div>
          <LineChartOne />
        </div>
        <div className="bg-white flex-fill me-3">
          <div className="d-flex align-items-center justify-content-between px-4 py-3">
            <h4 className="mb-0">Action</h4>
            <FaCircleQuestion className={`${CSS.PurpleColor}`} />
          </div>
          {Data.map((items) => (
            <NameNum Name={items.Name} Num={items.Num} key={items.Name} />
          ))}
        </div>
      </div>
    </>
  );
};

const MidSectionTwo = () => {
  return (
    <>
      <div className="mt-3 gap-3 d-flex me-3">
        <div className="bg-white flex-fill">
          <div className="d-flex align-items-center justify-content-between px-4 py-3">
            <h4 className="mb-0">Interaction</h4>
            <FaCircleQuestion className={`${CSS.PurpleColor}`} />
          </div>
          <DotLineChartOne />
        </div>
        <div className="bg-white flex-fill">
          <div className="d-flex align-items-center justify-content-between px-4 py-3">
            <h4 className="mb-0">Best Time</h4>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <span className="d-flex align-items-center justify-content-center gap-2">
                <p className={`mb-0 fw-medium ${CSS.PurpleColor}`}>Days</p>
                <p className={`mb-0 fw-medium ${CSS.LightPurpleColor}`}>
                  Hours
                </p>
              </span>
              <FaCircleQuestion className={`${CSS.PurpleColor}`} />
            </div>
          </div>
          <BarLineOne />
        </div>
      </div>
    </>
  );
};

const MidSectionThree = () => {
  return (
    <>
      <div className="mt-3 gap-3 d-flex me-3">
        <div className="bg-white col-lg-4">
          <div className="d-flex align-items-center justify-content-between p-3">
            <h4 className="mb-0">Gender</h4>
            <FaCircleQuestion className={`${CSS.PurpleColor}`} />
          </div>
          <StraightAnglePieChart />
        </div>
        <div className="bg-white flex-fill">
          <div className="d-flex align-items-center justify-content-between px-4 py-3">
            <h4 className="mb-0">Age Range</h4>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <span className="d-flex align-items-center justify-content-center gap-2">
                <p className={`mb-0 fw-medium ${CSS.PurpleColor}`}>All</p>
                <p className={`mb-0 fw-medium ${CSS.LightPurpleColor}`}>Men</p>
                <p className={`mb-0 fw-medium ${CSS.LightPurpleColor}`}>
                  Women
                </p>
              </span>
              <FaCircleQuestion className={`${CSS.PurpleColor}`} />
            </div>
          </div>
          <StackedAreaChart />
        </div>
      </div>
    </>
  );
};

function PagesProfileOverview() {
  return (
    <>
      <MidSectionOne />
      <MidSectionTwo />
      <MidSectionThree />
    </>
  );
}

export default PagesProfileOverview;
