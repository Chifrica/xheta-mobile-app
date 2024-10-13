import { SvgXml } from "react-native-svg";

export default (props: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="24" height="24" fill="url(#pattern0_2157_15972)"/>
<defs>
<pattern id="pattern0_2157_15972" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2157_15972" transform="scale(0.0078125)"/>
</pattern>
<image id="image0_2157_15972" width="128" height="128" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

    
  `;
  const prop = { ...props, xml };
  return <SvgXml {...prop} />;
};
