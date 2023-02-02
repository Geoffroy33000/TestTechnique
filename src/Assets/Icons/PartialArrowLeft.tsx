import "./Icon.scss";

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

function PartialArrowLeft(props: Props) {
  return (
    <div className="Icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 6 9"
      >
        <path
          className="Icon__fill"
          fill={props.color}
          fillRule="evenodd"
          d="M5.796 1.47c.338-.407.246-.982-.204-1.286a1.108 1.108 0 0 0-1.223 0L.292 3.857a.854.854 0 0 0 0 1.286l4.077 3.673c.451.305 1.089.222 1.427-.183a.845.845 0 0 0 0-1.102L2.442 4.5 5.806 1.47h-.01z"
        />
      </svg>
    </div>
  );
}

PartialArrowLeft.defaultProps = {
  color: "#FFFFFF",
  width: "6",
  height: "9",
};

export default PartialArrowLeft;
