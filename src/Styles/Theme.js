const BOX_BORDER = "1px solid #e6e6e6";
const BORDER_RADIUS = "4px";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  maxWidth: "935px",
  bgColor: "#FAFAFA",
  blackColor: "#262626",
  darkGreyColor: "#999",
  lightGreyColor: "#c7c7c7",
  redColor: "#ED4956",
  blueColor: "#3897f0",
  darkBlueColor: "#003569",
  boxBorder: "1px solid #e6e6e6",
  borderRadius: "4px",
  whiteBox: `border:${BOX_BORDER};
             border-radius:${BORDER_RADIUS};
             background-color:white;
            `
};
/* Styled-component에
이렇게 한 번 해두면 색깔 검색할 필요없이
바로 props.theme.blueColor로 접근이 가능한 개사기 모듈

하지만 styled-components에서만 쓸 수 있어서 
이 프젝에 많이 쓰일것 같지는 않다는 게 함정
 */