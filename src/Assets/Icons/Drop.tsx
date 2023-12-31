import "./Icon.scss";

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

function Drop(props: Props) {
  return (
    <div className="Icon">
      <svg
        height={props.height}
        width={props.width}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        enableBackground="new 0 0 50 50"
      >
        <path
          fill={props.color}
          d="M23.779,40.594c6.617,0,12-5.188,12-11.564c0-2.114-0.599-4.184-1.749-6.012L24.599,9.035
	c-0.186-0.276-0.497-0.441-0.829-0.441c-0.333,0-0.644,0.166-0.829,0.441l-9.436,14.018c-1.129,1.798-1.726,3.865-1.726,5.976
	C11.779,35.406,17.162,40.594,23.779,40.594z M15.181,24.144l8.59-12.76l8.584,12.726c0.933,1.482,1.425,3.184,1.425,4.92
	c0,5.274-4.486,9.564-10,9.564s-10-4.291-10-9.564C13.779,27.295,14.271,25.596,15.181,24.144z"
        />
      </svg>
    </div>
  );
}

Drop.defaultProps = {
  color: "black",
  width: "17",
  height: "17",
};

export default Drop;
