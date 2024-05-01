import Svg, {Path, SvgProps} from 'react-native-svg';

function SpeakerSvg(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.000000pt"
      height="26.000000pt"
      viewBox="0 0 512.000000 512.000000"
      color={'#EBF400'}
      {...props}>
      <Path
        d="M4103 4575c-45-19-121-92-146-140-15-28-21-59-22-105 0-78 10-98 123-237 279-344 456-749 529-1205 24-154 24-534 0-695-66-439-222-809-490-1165-101-136-117-168-117-240 0-67 26-124 80-178 55-55 111-80 180-80 103 0 149 35 287 220 202 269 364 591 466 930 295 971 66 2032-606 2812-58 67-121 98-199 98-29-1-67-7-85-15zM2226 4310c-22-12-327-260-677-551l-638-528-374-3-374-3-49-30c-30-19-60-49-79-79l-30-49-3-516c-2-458-1-521 14-559 23-61 60-101 119-128 50-24 53-24 411-24h361l634-526c349-289 654-537 679-552 116-69 279-6 326 127 19 53 19 3239 0 3293-16 46-51 88-96 118-52 35-170 40-224 10z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
      <Path
        d="M3358 3789c-93-14-186-98-214-195-24-84-10-133 73-252 37-53 84-127 106-166 234-424 210-983-59-1382-73-109-84-136-84-204 0-72 22-122 81-181 80-80 192-102 280-56 103 54 271 334 358 595 58 174 82 317 88 524 8 257-15 425-87 648-79 244-290 594-390 645-44 23-101 32-152 24z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  );
}

export default SpeakerSvg;