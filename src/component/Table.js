import { data } from "../data";

export const Table = (props) => {
  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <th className="brand-div width-20 "> Brand</th>
          <th className="brand-div width-20"> Description</th>
          <th className="brand-div"> Members</th>
          <th className="brand-div"> Categories</th>
          <th className="brand-div width-20"> Tags</th>
          <th className="brand-div "> Next Meeting</th>
          <th className="brand-div ">
            {" "}
            <i className="fa-solid fa-plus"></i>
          </th>
        </tr>
        {props.searchInput
          ? data
              .filter((brand) => brand.name === props.searchInput)
              .map((brand) => (
                <tr>
                  <td className="flex brand-div padding">
                    <input
                      className="check-box"
                      type="checkbox"
                      name=""
                      value=""
                    />
                    <img className="brand-image" src={brand.imageUrl} alt="" />{" "}
                    <p>{brand.name}</p>
                  </td>
                  <td className="brand-div">
                    <p className="description">{brand.description}</p>
                  </td>
                  <td className="flex brand-div ">
                    <img src="/mobile-logo.png" alt="" />
                    <img src="/mobile-logo.png" alt="" />
                    <img src="/mobile-logo.png" alt="" />
                    <img src="/mobile-logo.png" alt="" />
                    <img src="/mobile-logo.png" alt="" />
                    <img src="/mobile-logo.png" alt="" />
                  </td>
                  <td className="brand-div">
                    <div className="flex around">
                      {brand.categories.map((c) => (
                        <div className="categories">{c}</div>
                      ))}
                    </div>
                  </td>
                  <td className="brand-div">
                    <p className=" tags-table">{brand.Tags}</p>
                  </td>
                  <td className="brand-div tags-table">
                    <p className="meeting">{brand.nextMeeting}</p>
                  </td>
                  <td className="brand-div tags-table">
                    <p className=""></p>
                  </td>
                </tr>
              ))
          : data.map((brand) => (
              <tr>
                <td className="flex brand-div padding">
                  <input
                    className="check-box"
                    type="checkbox"
                    name=""
                    value=""
                  />
                  <img className="brand-image" src={brand.imageUrl} alt="" />{" "}
                  <p>{brand.name}</p>
                </td>
                <td className="brand-div">
                  <p className="description">{brand.description}</p>
                </td>
                <td className="flex brand-div ">
                  <img src="/mobile-logo.png" alt="" />
                  <img src="/mobile-logo.png" alt="" />
                  <img src="/mobile-logo.png" alt="" />
                  <img src="/mobile-logo.png" alt="" />
                  <img src="/mobile-logo.png" alt="" />
                  <img src="/mobile-logo.png" alt="" />
                </td>
                <td className="brand-div">
                  <div className="flex around">
                    {brand.categories.map((c) => (
                      <div
                        style={{
                          backgroundColor: c.backgroundColor,
                          color: c.textColor,
                        }}
                        className="categories"
                      >
                        {c.name}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="brand-div">
                  <p className=" tags-table">{brand.Tags}</p>
                </td>
                <td className="brand-div tags-table">
                  {brand.nextMeeting.map((meeting) => (
                    <p
                      style={{
                        backgroundColor: meeting.backgroundColor,
                        color: meeting.textColor,
                      }}
                      className="meeting"
                    >
                      {meeting.name}
                    </p>
                  ))}
                </td>
                <td className="brand-div tags-table">
                  <p className=""></p>
                </td>
              </tr>
            ))}

        <tr>
          <td className="brand-div   font-size5  ">10count</td>

          <td className="brand-div font-size5">Add Calculation</td>
          <td className="brand-div font-size5">Add Calculation</td>
          <td className="brand-div font-size5">Add Calculation</td>
          <td className="brand-div font-size5">Add Calculation</td>
          <td>
            <p className=""></p>{" "}
          </td>
          <td>
            {" "}
            <p className=""></p>
          </td>
        </tr>
      </table>
    </div>
  );
};
