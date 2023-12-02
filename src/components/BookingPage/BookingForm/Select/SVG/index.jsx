export default function SVG({ type, isOptionSelected }) {
  console.log(isOptionSelected);

  return (
    <>
      {type === "Occasion" && (
        <svg
          width="34.5px"
          height="37.5px"
          fill={isOptionSelected ? "#edefee" : "#495E57"}
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
      )}

      {type === "Date" && (
        <svg
          width="34.5px"
          height="37.5px"
          fill={isOptionSelected ? "#edefee" : "#495E57"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="m22 2.25h-3.25v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-3.25c-1.104 0-2 .895-2 1.999v17.75c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-17.75c0-1.104-.896-1.999-2-1.999zm.5 19.75c0 .276-.224.499-.499.5h-20.001c-.276 0-.5-.224-.5-.5v-17.75c.001-.276.224-.499.5-.499h3.25v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h3.25c.276 0 .499.224.499.499z"></path>
            <path d="m5.25 9h3v2.25h-3z"></path>
            <path d="m5.25 12.75h3v2.25h-3z"></path>
            <path d="m5.25 16.5h3v2.25h-3z"></path>
            <path d="m10.5 16.5h3v2.25h-3z"></path>
            <path d="m10.5 12.75h3v2.25h-3z"></path>
            <path d="m10.5 9h3v2.25h-3z"></path>
            <path d="m15.75 16.5h3v2.25h-3z"></path>
            <path d="m15.75 12.75h3v2.25h-3z"></path>
            <path d="m15.75 9h3v2.25h-3z"></path>
          </g>
        </svg>
      )}

      {type === "Time" && (
        <svg
          width="34.5px"
          height="37.5px"
          fill={isOptionSelected ? "#edefee" : "#495E57"}
          viewBox="0 0 24 24"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M24,12a1,1,0,0,1-2,0A10.011,10.011,0,0,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12Zm-8,1a1,1,0,0,0,0-2H13.723A2,2,0,0,0,13,10.277V7a1,1,0,0,0-2,0v3.277A1.994,1.994,0,1,0,13.723,13ZM1.827,6.784a1,1,0,1,0,1,1A1,1,0,0,0,1.827,6.784ZM2,12a1,1,0,1,0-1,1A1,1,0,0,0,2,12ZM12,22a1,1,0,1,0,1,1A1,1,0,0,0,12,22ZM4.221,3.207a1,1,0,1,0,1,1A1,1,0,0,0,4.221,3.207ZM7.779.841a1,1,0,1,0,1,1A1,1,0,0,0,7.779.841ZM1.827,15.216a1,1,0,1,0,1,1A1,1,0,0,0,1.827,15.216Zm2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,4.221,18.793Zm3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,7.779,21.159Zm14.394-5.943a1,1,0,1,0,1,1A1,1,0,0,0,22.173,15.216Zm-2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,19.779,18.793Zm-3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,16.221,21.159Z"></path>
          </g>
        </svg>
      )}

      {type === "Guests" && (
        <svg
          width="34.5px"
          height="37.5px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill={isOptionSelected ? "#edefee" : "#495E57"}
          class="bi bi-people-fill"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>{" "}
            <path
              fill-rule="evenodd"
              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
            ></path>{" "}
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>{" "}
          </g>
        </svg>
      )}
    </>
  );
}
