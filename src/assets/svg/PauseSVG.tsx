import Svg, {Path, SvgProps} from 'react-native-svg';

function PauseSVG(props: SvgProps) {
  return (
    <Svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 5v14m8-14v14"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PauseSVG;
