import Svg, {Path, SvgProps} from 'react-native-svg';

function NextSVG(props: SvgProps) {
  return (
    <Svg
      width="50px"
      height="50px"
      viewBox="0 -2 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M99.684 3649.694l-4.477 3.13c-.636.43-1.207.022-1.207-.692v-1.991l-4.22 2.684c-.635.429-1.78.02-1.78-.693v-6.263c0-.714 1.145-1.122 1.78-.694l4.22 2.685v-1.991c0-.714.571-1.122 1.207-.694l4.309 3.132c.514.347.682 1.04.168 1.387"
        transform="translate(-144 -3805) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default NextSVG;
