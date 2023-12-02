import { useState } from "react";
import "./style.css";

export default function Select() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(setClicked => !setClicked);
  }
  
  const customClickingStyles = {

  }

  return (
    <div className="select-field">
      <div className={`select-button ${clicked && `select-button-clicked`}`} onClick={handleClick} >
        <svg
          width="34.5px"
          height="37.5px"
          fill="#495E57"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 395.183 395.183"
          xml:space="preserve"
          stroke="#495E57"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g id="Layer_3_21_">
                <g>
                  <path d="M182.981,362.182c0-6.369-18.359-11.733-43.42-13.393V208.663c38.31-13.447,67.187-73.124,67.187-144.716 c0-22.911-2.957-44.601-8.232-63.947H47.837c-5.277,19.347-8.234,41.037-8.234,63.947c0,71.592,28.877,131.269,67.188,144.716 v140.125c-25.062,1.659-43.421,7.023-43.421,13.393c0,7.691,26.776,13.927,59.806,13.927S182.981,369.873,182.981,362.182z"></path>{" "}
                  <path d="M355.187,37.761L227.632,11.097c3.101,16.009,4.682,32.737,4.682,49.949c0,52.191-14.463,98.69-37.762,127.915 c6.993,15.337,16.521,27.247,28.157,34.279l-25.084,120c7.243,4.071,10.922,9.438,10.922,16.039 c0,13.209-15.153,19.904-33.132,23.205c8.408,2.986,18.326,5.766,29.069,8.013c32.33,6.757,59.814,6.133,61.391-1.396 c1.303-6.233-15.572-15.243-39.762-21.995l28.672-137.16c40.252-5.324,80.729-57.828,95.379-127.904 C354.849,79.615,356.394,57.779,355.187,37.761z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <span className="select-main-text">Occasion</span>
        <svg
          width="33"
          height="21"
          className={clicked && `rotate-svg`}
          viewBox="0 0 33 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.2065 0.839949C30.1012 -0.266718 28.3065 -0.266718 27.2012 0.839949L16.0211 13.1733L4.83983 0.839949C3.7345 -0.266718 1.9398 -0.266718 0.834463 0.839949C-0.270871 1.94662 -0.270871 3.74663 0.834463 4.8533L13.8411 19.2C14.4398 19.8 15.2385 20.0666 16.0211 20.0133C16.8038 20.0666 17.6012 19.8 18.1999 19.2L31.2065 4.8533C32.3119 3.74663 32.3119 1.94662 31.2065 0.839949Z"
            fill="#495E57"
          />
        </svg>
      </div>
      <div className={`select-options ${clicked && `clicked-select-options`}`}>
        <div className="option">Birthday</div>
        <div className="option">Birthday</div>
        <div className="option">Birthday</div>
      </div>
    </div>
  );
}
