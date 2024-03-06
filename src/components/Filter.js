import { useState } from "react";

export const Filter = () => {
  const [dropdownOpenIndex, setDropdownIndex] = useState(null);
  const openDropdown = (index) => {
    setDropdownIndex(dropdownOpenIndex === index ? null : index);
  };
  return (
    <>
      <div className="short-by flex between margin1">
        <div className="flex ">
          <div>
            <div className="margins">
              <div
                className="flex between  paddings radius brands hover"
                onClick={() => openDropdown(0)}
              >
                <div className="flex ">
                  <p>
                    <i className="fa-solid fa-circle-notch"></i>
                  </p>
                  <p className="product ">All Brands</p>
                </div>
                <p>
                  <i className="fa-solid fa-caret-down "></i>
                </p>
              </div>
              {dropdownOpenIndex === 0 && (
                <div className="box-shadow">
                  <p className="margins paddingm">Brand1</p>
                  <p className="margins paddingm">Brand2</p>
                  <p className="margins paddingm">Brand3</p>
                  <p className="margins paddingm">Brand4</p>
                  <p className="margins paddingm">Brand5</p>
                  <p className="margins paddingm gray"> + Add new tab</p>
                </div>
              )}
            </div>
          </div>
          <div className="margins margin-left  ">
            <div
              className="flex between  paddings radius desk hover"
              onClick={() => openDropdown(1)}
            >
              <div className="flex">
                <p className="product ">Desk</p>
              </div>
              <p>
                <i className="fa-solid fa-caret-down "></i>
              </p>
            </div>
            {dropdownOpenIndex === 1 && (
              <div className="box-shadow">
                <p className="margins paddingm">Desk1</p>
                <p className="margins paddingm">Desk2</p>
                <p className="margins paddingm">Desk3</p>
                <p className="margins paddingm">Desk4</p>
                <p className="margins paddingm">Desk5</p>
                <p className="margins paddingm gray"> + Add new tab</p>
              </div>
            )}
          </div>
          <div className="margins margin-left">
            <div
              className="flex between  paddings radius tags hover"
              onClick={() => openDropdown(2)}
            >
              <div className="flex ">
                <p className="product  ">Tags</p>
              </div>
              <p>
                <i className="fa-solid fa-caret-down "></i>
              </p>
            </div>
            {dropdownOpenIndex === 2 && (
              <div className="box-shadow">
                <p className="margins paddingm">Tag1</p>
                <p className="margins paddingm">Tag2</p>
                <p className="margins paddingm">Tag3</p>
                <p className="margins paddingm">Tag4</p>
                <p className="margins paddingm">Tag5</p>
                <p className="margins paddingm gray"> + Add new tab</p>
              </div>
            )}
          </div>
          <div>
            <div className="flex paddings border radius margin-left margins gray hover">
              <p>
                <i className="fa-solid fa-arrow-up-a-z"></i>
              </p>
              <p>Sort</p>
            </div>
          </div>
          <div>
            <div className="flex paddings border margin-left radius margins gray hover">
              <p>
                <i className="fa-solid fa-filter"></i>
              </p>
              <p className=" radius">Filter</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className=" flex paddings margin-left radius ">
            <p>
              <i className="fa-solid fa-list-check"></i>
            </p>
            <p className=" margin-left">Meetings</p>
          </div>
          <div className="flex paddings margin-left radius">
            <p>
              <i className="fa-solid fa-file-import"></i>
            </p>
            <p className=" margin-left">Import/Export</p>
          </div>
        </div>
      </div>
    </>
  );
};
