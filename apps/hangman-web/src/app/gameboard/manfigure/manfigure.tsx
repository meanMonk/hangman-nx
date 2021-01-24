import React from 'react';

export const ManFigure = ({ wrong }) => {
  let errors = wrong.length;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="156.567"
      height="186"
      viewBox="0 0 156.567 186"
    >
      <g id="Group_7" data-name="Group 7" transform="translate(-558 -219)">
        {/* rod */}
        <g id="Group_6" data-name="Group 6">
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="5"
            height="180"
            transform="translate(614 219)"
            fill="#a683b9"
          />
          <rect
            id="Rectangle_2"
            data-name="Rectangle 2"
            width="74"
            height="6"
            transform="translate(614 219)"
            fill="#a683b9"
          />
          <rect
            id="Rectangle_8"
            data-name="Rectangle 8"
            width="123"
            height="6"
            transform="translate(558 399)"
            fill="#a683b9"
          />
        </g>
        {errors > 0 && (
          <rect
            id="Rectangle_3"
            data-name="Rectangle 3"
            width="5"
            height="34"
            transform="translate(683 219)"
            fill="#c10a0a"
          />
        )}
        {/* body */}
        {errors > 2 && (
          <g id="Group_3" data-name="Group 3">
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="6"
              height="44"
              rx="3"
              transform="translate(684 277)"
              fill="#c10a0a"
            />
          </g>
        )}
        {/* hand */}
        {errors > 3 && (
          <g id="Group_4" data-name="Group 4">
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(662.424 270.548)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M13.677,6.183a1.876,1.876,0,0,1,2.1,2.014L14.393,27.712a2.625,2.625,0,0,1-2.411,2.322,1.876,1.876,0,0,1-2.1-2.014L11.266,8.506A2.625,2.625,0,0,1,13.677,6.183Z"
                transform="matrix(0.799, 0.602, -0.602, 0.799, 36.244, -6.116)"
                fill="#c10a0a"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M1.6-.407A2.641,2.641,0,0,1,3.964,1.977L5.4,21.989a1.863,1.863,0,0,1-2.041,2.064A2.641,2.641,0,0,1,1,21.67L-.439,1.657A1.863,1.863,0,0,1,1.6-.407Z"
                transform="translate(1.933 9.845) rotate(-47)"
                fill="#c10a0a"
              />
            </g>
          </g>
        )}
        {/* leg */}
        {errors > 4 && (
          <g id="Group_5" data-name="Group 5">
            <path
              id="Path_3"
              data-name="Path 3"
              d="M2.777-.158A2.38,2.38,0,0,1,5.4,2.37L3.971,26.547a3.149,3.149,0,0,1-2.935,2.845,2.38,2.38,0,0,1-2.619-2.528L-.158,2.686A3.149,3.149,0,0,1,2.777-.158Z"
              transform="matrix(-0.799, -0.602, 0.602, -0.799, 667.652, 337.572)"
              fill="#c10a0a"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M2.72.164A3.164,3.164,0,0,1,5.6,3.072L7.084,27.761A2.367,2.367,0,0,1,4.528,30.34a3.164,3.164,0,0,1-2.885-2.908L.164,2.743A2.367,2.367,0,0,1,2.72.164Z"
              transform="translate(714.793 331.219) rotate(133)"
              fill="#c10a0a"
            />
          </g>
        )}
        {/* HEAD */}
        {errors > 1 && (
          <g id="Group_2" data-name="Group 2">
            <ellipse
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="15"
              cy="13.5"
              rx="15"
              ry="13.5"
              transform="translate(671 252)"
              fill="#c10a0a"
            />
            <g
              id="Ellipse_2"
              data-name="Ellipse 2"
              transform="translate(689 258)"
              fill="none"
              stroke="#ebdede"
              strokeWidth="1"
            >
              <ellipse cx="1.5" cy="2.5" rx="1.5" ry="2.5" stroke="none" />
              <ellipse cx="1.5" cy="2.5" rx="1" ry="2" fill="none" />
            </g>
            <g
              id="Ellipse_3"
              data-name="Ellipse 3"
              transform="translate(679 258)"
              fill="none"
              stroke="#ebdede"
              strokeWidth="1"
            >
              <ellipse cx="1.5" cy="2.5" rx="1.5" ry="2.5" stroke="none" />
              <ellipse cx="1.5" cy="2.5" rx="1" ry="2" fill="none" />
            </g>
            <g
              id="Ellipse_4"
              data-name="Ellipse 4"
              transform="translate(679 268)"
              fill="none"
              stroke="#ebdede"
              strokeWidth="1"
            >
              <ellipse cx="7" cy="3" rx="7" ry="3" stroke="none" />
              <ellipse cx="7" cy="3" rx="6.5" ry="2.5" fill="none" />
            </g>
          </g>
        )}
      </g>
    </svg>
  );
};
