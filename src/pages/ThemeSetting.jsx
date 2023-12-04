import { useContext } from "react";
import { UserContext } from "../context/UserStore";
import { ButtonContainer, TransBtn } from "../component/HomeComponent";

const ThemeSetting = () => {
  const context = useContext(UserContext);
  const { setColor } = context;
  const themeColorChange = (color) => {
    setColor(color);
  };

  return (
    <>
      <ButtonContainer>
        <TransBtn>컬러 테마 설정</TransBtn>
      </ButtonContainer>
      <ButtonContainer>
        <TransBtn color="orange" onClick={() => themeColorChange("orange")}>
          오렌지
        </TransBtn>
        <TransBtn color="green" onClick={() => themeColorChange("green")}>
          그린
        </TransBtn>
        <TransBtn
          color="lightgray"
          onClick={() => themeColorChange("lightgrey")}
        >
          밝은회색
        </TransBtn>
        <TransBtn color="darkgray" onClick={() => themeColorChange("darkgrey")}>
          어두운 회색
        </TransBtn>
        <TransBtn
          color="royalblue"
          onClick={() => themeColorChange("royalblue")}
        >
          로얄 블루
        </TransBtn>
      </ButtonContainer>
    </>
  );
};
export default ThemeSetting;
