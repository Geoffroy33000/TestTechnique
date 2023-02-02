import "./Icon.scss";

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

function Artichoke(props: Props) {
  return (
    <div className="Icon">
      <svg
        fill={props.color}
        height={props.height}
        width={props.width}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 487.483 487.483"
      >
        <g>
          <path
            d="M412.168,183.903l-2.187-8.712l-8.711-2.186c-8.225-2.064-16.7-3.527-25.322-4.394
		c-1.48-26.844-9.035-53.144-22.204-76.816l-4.366-7.849l-8.98,0.143c-5.755,0.091-11.625,0.496-17.55,1.192
		c-14.667-33.317-39.662-61.664-71.402-80.668L243.742,0l-7.706,4.614c-31.739,19.004-56.734,47.351-71.401,80.668
		c-5.924-0.696-11.794-1.101-17.549-1.192l-8.98-0.143l-4.366,7.848c-13.17,23.672-20.726,49.972-22.206,76.816
		c-8.622,0.867-17.096,2.33-25.321,4.394l-8.711,2.186l-2.187,8.711c-7.31,29.127-7.19,59.74,0.347,88.526
		c7.787,29.741,23.403,56.961,45.161,78.719c19.366,19.365,42.408,33.777,67.193,42.131l-0.033,94.204h111.511v-94.65
		c25.234-8.526,48.273-22.792,67.165-41.686c21.758-21.757,37.374-48.978,45.161-78.719
		C419.358,243.643,419.478,213.031,412.168,183.903z M345.871,168.087c-15.606,1.046-31.064,4.145-45.755,9.191
		c-1.055-2.016-2.139-3.997-3.263-5.945c-7.873-13.636-17.456-25.996-28.6-36.929c14.651-8.579,30.89-14.65,47.801-17.777
		c5.279-0.976,10.527-1.676,15.686-2.094C339.791,131.374,344.575,149.556,345.871,168.087z M243.742,35.294
		c20.926,14.343,37.783,33.751,48.883,56.155c-17.415,5.135-33.964,12.892-48.883,22.948
		c-14.919-10.056-31.468-17.813-48.883-22.949C205.958,69.045,222.816,49.637,243.742,35.294z M155.744,114.533
		c5.159,0.418,10.405,1.119,15.685,2.094c23.066,4.264,44.894,13.986,63.125,28.114c14.776,11.45,26.996,25.444,36.319,41.593
		c0.603,1.043,1.186,2.105,1.765,3.175c-10.309,5.69-19.974,12.358-28.886,19.998c-28.649-24.645-64.112-39.035-102.136-41.459
		C142.916,149.531,147.698,131.361,155.744,114.533z M142.036,329.935c-34.122-34.122-48.588-82.062-39.591-129.77
		c7.866-1.448,15.968-2.27,24.186-2.451c35.734-0.789,69.404,10.962,96.105,33.309c-15.976,19.455-27.604,42.304-33.941,66.872
		c-5.164,20.021-6.77,40.909-4.814,61.532C168.721,352.365,154.492,342.39,142.036,329.935z M217.994,457.483l0.02-57.17
		c8.197,1.148,16.57,1.748,25.063,1.748c0.24,0,0.483,0,0.724-0.001c8.613-0.034,17.202-0.716,25.694-1.994v57.418H217.994z
		 M345.447,329.935c-17.9,17.9-40.298,30.782-64.772,37.253c-12.042,3.184-24.487,4.823-36.991,4.872
		c-9.609,0.053-18.994-0.803-28.045-2.504c-8.816-47.338,5.359-94.976,38.803-128.968c0.287-0.292,0.563-0.591,0.836-0.892
		l0.064-0.071c12.456-12.43,27.01-22.377,43.259-29.565c19.326-8.548,40.844-12.829,62.253-12.345
		c8.218,0.181,16.319,1.003,24.186,2.451C394.035,247.874,379.568,295.814,345.447,329.935z"
          />
        </g>
      </svg>
    </div>
  );
}

Artichoke.defaultProps = {
  color: "black",
  width: "17",
  height: "17",
};

export default Artichoke;