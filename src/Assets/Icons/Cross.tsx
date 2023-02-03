import "./Icon.scss";

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

function Cross2(props: Props) {
  return (
    <div className="Icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 18 18"
      >
        <path
          className="Icon__fill"
          fill={props.color}
          fillRule="evenodd"
          d="M18 15.683l-6.697-6.699L18 2.297 15.683 0 8.989 6.692 2.299 0 0 2.3l6.698 6.705L0 15.7 2.3 18l6.71-6.703L15.704 18z"
        />
      </svg>
    </div>
  );
}

Cross2.defaultProps = {
  color: "#FFFFFF",
  width: "18",
  height: "18",
};

export default Cross2;
