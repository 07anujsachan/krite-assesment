export const Footer = () => {
  return (
    <div className="border radius flex between width-50">
      <div className="flex border radius paddings">
        <p>
          <i className="fa-regular fa-square-check "></i>
        </p>
        <p className="margin-left">Selected</p>
      </div>
      <div className="flex border radius paddings">
        <p>
          <i className="fa-solid fa-box-archive"></i>
        </p>
        <p className="margin-left">Archive</p>
      </div>
      <div className="flex border radius paddings">
        <p>
          <i className="fa-solid fa-trash"></i>
        </p>
        <p className="margin-left">Delete</p>
      </div>
      <div className="flex border radius paddings">
        <p className="margin-left">More</p>
        <p>
          <i className="fa-solid fa-caret-down"></i>
        </p>
      </div>
    </div>
  );
};
