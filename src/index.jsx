import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import downIcon from "./assets/down.png";
import closeIcon from "./assets/close.png";
import searchIcon from "./assets/search.png";
const SelectSearch = ({
  options = [],
  selectedOption,
  setSelectedOption = () => {},
  handleChange = null,
  multi = false,
  label = "Select",
  searchPlaceholder = "Search",
  notFound = "No data found",
}) => {
  const [mainOptions, setMainOptions] = useState([]);
  const [receivedOptions, setReceivedOptions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const containerRef = useRef(null);
  const optionConRef = useRef(null);
  const [dropUp, setDropUp] = useState(false);

  //set states when component mount
  useEffect(() => {
    setReceivedOptions(() =>
      options?.map((item) => ({ ...item, isSelected: false }))
    );
    setMainOptions(() =>
      options?.map((item) => ({ ...item, isSelected: false }))
    );
  }, []);

  //click on dropdown
  const handleClickDropDown = () => {
    setOpen(!open);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = 200; // your dropdown height
      const spaceBelow = window.innerHeight - rect.bottom;

      // if not enough space below, open upwards
      setDropUp(spaceBelow < dropdownHeight);
    }
  };

  //close dropdown when clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef?.current &&
        !containerRef?.current?.contains(event.target) &&
        !optionConRef?.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //when mouse on the drop down
  const onMouseEnterDropDown = () => {
    setShowClear(true);
  };

  //when mouse leaves from the drop down
  const onMouseLeaveFromDropDown = () => {
    setShowClear(false);
  };

  //multi selection handler
  const handleSelectOption = (selectedItem) => {
    setReceivedOptions((pre) =>
      pre?.map((item) => ({
        ...item,
        isSelected:
          item?.value === selectedItem?.value
            ? !selectedItem?.isSelected
            : item?.isSelected,
      }))
    );
    setMainOptions((pre) =>
      pre?.map((item) => ({
        ...item,
        isSelected:
          item?.value === selectedItem?.value
            ? !selectedItem?.isSelected
            : item?.isSelected,
      }))
    );
    if (handleChange) {
      let { isSelected, ...rest } = selectedItem;
      return handleChange(rest);
    }
    if (selectedOption?.some((item) => item?.value === selectedItem?.value)) {
      setSelectedOption((pre) =>
        pre.filter((item) => item?.value !== selectedItem?.value)
      );
    } else {
      let { isSelected, ...rest } = selectedItem; //removing modified data(isSelected) and kept only original data
      setSelectedOption((pre) => [...pre, rest]);
    }
  };
  //single selection handler
  const handleSingleSelectOption = (selectedItem) => {
    setOpen(false);
    setShowClear(false);

    setReceivedOptions((pre) =>
      pre?.map((item) => ({
        ...item,
        isSelected:
          item?.value === selectedItem?.value
            ? !selectedItem?.isSelected
            : item?.isSelected,
      }))
    );
    setMainOptions((pre) =>
      pre?.map((item) => ({
        ...item,
        isSelected:
          item?.value === selectedItem?.value
            ? !selectedItem?.isSelected
            : item?.isSelected,
      }))
    );

    let { isSelected, ...rest } = selectedItem; //removing modified data(isSelected) and kept only original data
    if (handleChange) {
      return handleChange(rest);
    }

    setSelectedOption([rest]);
  };

  //click on select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setReceivedOptions((pre) =>
        pre?.map((item) => ({ ...item, isSelected: true }))
      );
      setMainOptions((pre) =>
        pre?.map((item) => ({ ...item, isSelected: true }))
      );
      if (handleChange) {
        return handleChange(options);
      }
      setSelectedOption(options);
    } else {
      setReceivedOptions((pre) =>
        pre?.map((item) => ({ ...item, isSelected: false }))
      );
      setMainOptions((pre) =>
        pre?.map((item) => ({ ...item, isSelected: false }))
      );
      setSelectedOption([]);
    }
  };

  //search
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    let filterData = mainOptions?.filter((item) => {
      return item?.name?.toLowerCase()?.includes(e.target.value?.toLowerCase());
    });

    setReceivedOptions(filterData);
  };
  return (
    <div
      className="main-select-container"
      data-as="options"
      onMouseEnter={onMouseEnterDropDown}
      onMouseLeave={onMouseLeaveFromDropDown}
    >
      <div
        ref={containerRef}
        className="selected-items"
        onClick={handleClickDropDown}
      >
        {selectedOption?.length > 0 ? (
          <>
            <span className="ellipsis-text">
              {selectedOption
                ?.slice(0, 4)
                .map((item) => item?.name)
                .join(", ")}
              {selectedOption?.length > 4 && (
                <span className="more-span">, Rest..</span>
              )}
            </span>
          </>
        ) : (
          <span>{label}</span>
        )}
      </div>
      <div className="right-tools">
        {selectedOption?.length > 0 && showClear && (
          <div className="close-div">
            <img
              className="close zoom-anim"
              title="Clear"
              onClick={() => {
                setSelectedOption([]);
                setReceivedOptions((pre) =>
                  pre?.map((item) => ({ ...item, isSelected: false }))
                );
                setMainOptions((pre) =>
                  pre?.map((item) => ({ ...item, isSelected: false }))
                );
              }}
              src={closeIcon}
              alt="close"
            />
          </div>
        )}
        <img
          className={`down-arrow zoom-anim ${open && "up-arrow"}`}
          src={downIcon}
          alt="arrow"
        />
      </div>
      {open && (
        <div
          className={`option-container ${dropUp ? "drop-up" : "drop-down"}`}
          ref={optionConRef}
          id="options"
        >
          <div className="search-container">
            {multi && (
              <div className="select-all">
                <label className="select-all-label" htmlFor="selectAll">
                  <input
                    type="checkbox"
                    id="selectAll"
                    checked={mainOptions?.every((item) => item?.isSelected)}
                    onChange={handleSelectAll}
                  />
                  <span>Select all</span>
                </label>
              </div>
            )}
            <div className="search-wrapper">
              <input
                className="search-input "
                type="text"
                placeholder={searchPlaceholder}
                value={searchInput}
                onChange={handleSearch}
              />
              <img className="search-icon" src={searchIcon} alt="search" />
              {searchInput && (
                <img
                  onClick={() => {
                    setReceivedOptions(mainOptions);
                    setSearchInput("");
                  }}
                  className="close-img zoom-anim"
                  src={closeIcon}
                  alt="close"
                />
              )}
            </div>
          </div>
          <ul>
            {receivedOptions?.length > 0 ? (
              <>
                {receivedOptions?.map((item, i) => (
                  <li
                    className={
                      !multi && selectedOption[0]?.name === item?.name
                        ? "active"
                        : ""
                    }
                    key={i}
                    onClick={() =>
                      !multi ? handleSingleSelectOption(item) : null
                    }
                  >
                    <label htmlFor={item?.name}>
                      {multi && (
                        <input
                          type="checkbox"
                          checked={item?.isSelected}
                          value={item?.value}
                          onChange={() =>
                            multi ? handleSelectOption(item) : null
                          }
                          id={item?.name}
                        />
                      )}
                      <span>{item?.name}</span>
                    </label>
                  </li>
                ))}
              </>
            ) : (
              <li className="no-data-found">
                <span>{notFound}</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectSearch;
