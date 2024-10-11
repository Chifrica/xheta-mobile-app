import { SvgXml } from "react-native-svg";

export default (props: any) => {
  const xml = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.875C10.8452 1.875 11.125 2.15482 11.125 2.5V12.2411L13.8081 9.55806C14.0521 9.31398 14.4479 9.31398 14.6919 9.55806C14.936 9.80214 14.936 10.1979 14.6919 10.4419L10.9419 14.1919C10.6979 14.436 10.3021 14.436 10.0581 14.1919L6.30806 10.4419C6.06398 10.1979 6.06398 9.80214 6.30806 9.55806C6.55214 9.31398 6.94786 9.31398 7.19194 9.55806L9.875 12.2411V2.5C9.875 2.15482 10.1548 1.875 10.5 1.875ZM3 13.125C3.34518 13.125 3.625 13.4048 3.625 13.75V15.625C3.625 16.3154 4.18464 16.875 4.875 16.875H16.125C16.8154 16.875 17.375 16.3154 17.375 15.625V13.75C17.375 13.4048 17.6548 13.125 18 13.125C18.3452 13.125 18.625 13.4048 18.625 13.75V15.625C18.625 17.0057 17.5057 18.125 16.125 18.125H4.875C3.49429 18.125 2.375 17.0057 2.375 15.625V13.75C2.375 13.4048 2.65482 13.125 3 13.125Z" fill="#03363D"/>
</svg>  
  `;
  const prop = { ...props, xml };
  return <SvgXml {...prop} />;
};
