import "./Icon.scss";

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

function Search(props: Props) {
  return (
    <div className="Icon">
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="5.89688"
          transform="matrix(-1 0 0 1 6.39698 6.39688)"
          stroke={props.color}
        />
        <path
          d="M11 11L16 16"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

Search.defaultProps = {
  color: "#D7D7D7",
  width: "17",
  height: "17",
};

export default Search;
