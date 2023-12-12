import { useState } from "react";
import "./style.css";
import { getDate } from "../../../../utils/getDate";
import { generateTimes } from "../../../../utils/randomTimes";
import SVG from "./SVG";

export default function Select({
  type,
  formData,
  setFormData,
  availableTimes,
  setAvailableTimes,
  timeDisplay,
  setTimeDisplay
}) {
  let options;
  const [displayName, setDisplayName] = useState(type);
  if (type === 'Time') setTimeDisplay(prevName => (type))

  switch (type) {
    case "Date":
      options = getDate().days;
      break;
    case "Occasion":
      options = ["Birthday", "Anniversary", "Engagement"];
      break;
    case "Time":
      options = availableTimes;
      break;
    case "Guests":
      options = [1, 2, 3, 4, 5, 6, 7, 8];
      break;
    default:
      // Handle the case when 'name' doesn't match any of the specified values
      options = [];
      break;
  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevValue) => !prevValue);
  };

  const handleOptionClick = (e) => {
    if (e.target.className === "day") {
        setTimeDisplay(prevName => ('Time'));
      setAvailableTimes((previousTimes) => {
        setFormData((previousFormData) => ({ ...previousFormData, Time: "",Date: `${getDate().year}-${getDate().month}-${e.target.id}` }));
        return generateTimes(e.target.id);
      });
    }
    if (e.target.className != "day") {
      setFormData((prevData) => ({
        ...prevData,
        [type]: e.target.id,
      }));
    }

    ///////////////////////////////////////////////
    setOpen((prevValue) => false);
    setDisplayName((prevDisplayName) => e.target.id)
    // For displaying time reset when the date is selected
    
};

  return (
    <div className="select-field">
      <div
        className={`select-button ${
            formData[`${type}`] && "select-button-clicked"
        }`}
        onClick={handleClick}
      >
        <SVG type={type} formData={formData[`${type}`]}/>
        
        <span
          className={`select-main-text ${
            formData[`${type}`] && `change-text-color`
          }`}
        >
          {/* {displayName !== 'Time' && displayName} */}
          {formData[`${type}`]? formData[`${type}`]: type }
        </span>
        <svg
          width="33"
          height="21"
          className={open && `rotate-svg`}
          viewBox="0 0 33 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.2065 0.839949C30.1012 -0.266718 28.3065 -0.266718 27.2012 0.839949L16.0211 13.1733L4.83983 0.839949C3.7345 -0.266718 1.9398 -0.266718 0.834463 0.839949C-0.270871 1.94662 -0.270871 3.74663 0.834463 4.8533L13.8411 19.2C14.4398 19.8 15.2385 20.0666 16.0211 20.0133C16.8038 20.0666 17.6012 19.8 18.1999 19.2L31.2065 4.8533C32.3119 3.74663 32.3119 1.94662 31.2065 0.839949Z"
            fill={formData[[`${type}`]] ? "#edefee" : "#495E57"}
          />
        </svg>
      </div>
      <div
        className={`select-options ${
          open ? `display-select-options` : `hide-select-options`
        }`}
      >
        {type === "Date" && (
          <div className="date-option" value="0">
            <div className="month-container">{getDate().monthName}</div>
            <div className="day-container">
              {options.map((day) => (
                <div id={day} onClick={handleOptionClick} className="day">
                  {day}
                </div>
              ))}
            </div>
          </div>
        )}

        {type !== "Date" && options.map((el) => (
            <div onClick={handleOptionClick} className={`option ${type}`} id={el}>
            {el}
          </div>
        ))}



        
        {type === "Time" && options.length === 0 && (
          <div className="option" value="0">
            Pick a date first
          </div>
        )}
      </div>
    </div>
  );
}
