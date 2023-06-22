import React from "react";

const User = ({ data }) => {
  return (
    <table className="table">
      <tbody>
        {data.map((data, index) => (
          <tr className="container-fluid ">
            <td>
              <img
                src={data.image}
                alt="pfp"
                style={{ height: "75px", borderRadius: "50%" }}
              />
            </td>
            <td className="d-flex flex-column">
              <div className="fs-3 align-items-start text-start p-0 fw-bold ">
                {data.name}
              </div>
              <div className="fs-5 align-items-start text-start p-0 mb-2">
                {data.email}
              </div>
            </td>
            <td className="fs-5 align-items-start ">{data.address}</td>
            <td>
              {data.gender === "male" ? (
                <div className="fs-5 align-items-start bg-info bg-gradient text-white rounded-pill p-1 h-25">
                  male
                </div>
              ) : (
                <div className="fs-5 align-items-start bg-danger bg-gradient text-white rounded-pill p-1 h-25">
                  female
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default User;
