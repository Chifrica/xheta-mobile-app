import { SvgXml } from "react-native-svg";

export default (props: any) => {
  const xml = `<svg width=${props.size || 16} height=${props.size || 16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.18414 5.76748C4.423 5.5378 4.80282 5.54525 5.0325 5.78411L8 8.93431L10.9675 5.78411C11.1972 5.54525 11.577 5.5378 11.8159 5.76748C12.0547 5.99715 12.0622 6.37698 11.8325 6.61584L8.4325 10.2158C8.31938 10.3335 8.16321 10.4 8 10.4C7.83679 10.4 7.68062 10.3335 7.5675 10.2158L4.1675 6.61584C3.93782 6.37698 3.94527 5.99715 4.18414 5.76748Z" fill="#686868"/>
</svg>
    
  `;
  const prop = { ...props, xml };
  return <SvgXml {...prop} />;
};
