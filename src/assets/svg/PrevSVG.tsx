import Svg, {Path, SvgProps} from 'react-native-svg';

function PrevSVG(props: SvgProps) {
  return (
    <Svg
      width="50px"
      height="50px"
      viewBox="0 -2 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M59.999 3645.868v6.263c0 .714-1.145 1.122-1.781.694l-4.219-2.685v1.991c0 .714-.573 1.122-1.209.694l-4.311-3.132c-.514-.347-.681-1.04-.167-1.387l4.478-3.13c.636-.43 1.209-.022 1.209.692v1.991l4.219-2.684c.636-.429 1.781-.02 1.781.693"
        transform="translate(-104 -3805) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default PrevSVG;
