import { LineChart, Line } from "recharts";
import "../../src/style.css";
import data from "../../Data/graphData.json";

const SmallDataBox = (props) => {
  // const ran = Math.random();
  return (
    <>
      <div className="d-flex flex-fill bg-white rounded-2 py-3 me-3 mt-sm-2 mt-lg-0 mt-md-2">
        <div className="p-2 d-flex align-items-center justify-content-center">
          <LineChart width={95} height={30}>
            <Line
              data={data}
              type="monotype"
              dataKey="uv"
              stroke="#8884d8"
              strokeWidth={4}
            />
          </LineChart>
        </div>
        <div className="">
          <p
            style={{ fontSize: 30, fontWeight: 600 }}
            className="align-items-center d-flex mb-0"
          >
            {props.num}
            <span
              style={{ fontSize: 12, fontWeight: 400 }}
              className={`ps-2 ${props.prime}`}
            >
              {props.per}
            </span>
          </p>
          <p className="mb-o" style={{ fontSize: 15, fontWeight: 400 }}>
            {props.Paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallDataBox;
