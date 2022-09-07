import { useRouter } from "next/router";
import { useState } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

import { FlexBox, InnerBox } from "../common/atoms/BasicStyles";
import { AccentBtn } from "../common/atoms/Btns";
import {
  BtnMenuMobile,
  FlexBoxHeader,
  FlexBoxMenus,
  FlexBoxMenusMobile,
  UnderlineBtnMenu,
  UnderlineBtnTitle,
} from "./Header.style";

//# 헤더 타입
interface IHeaderProps {
  isDarkMode: boolean; //>  다크 모드 여부
  toggleTheme: () => void; //> 테마 변경 함수
}

/** \# 헤더 */
export function Header(props: IHeaderProps) {
  //# 테마 전환
  const [isMobileMenuOn, setIsMobileMenuOn] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMobileMenuOn((prevState) => !prevState);
  };

  //# 라우팅
  const router = useRouter();
  const goToMain = () => {
    router.push("/");
  };

  const goToTag = () => {
    router.push("/tag");
  };

  const goToCreate = () => {
    router.push("/create");
  };

  //# 메뉴 모음
  const Menus = () => (
    <>
      <FlexBox justifyContent="flex-end">
        <UnderlineBtnMenu onClick={goToTag}>태그</UnderlineBtnMenu>
      </FlexBox>
      <FlexBox justifyContent="flex-end">
        <UnderlineBtnMenu onClick={goToCreate}>시험 만들기</UnderlineBtnMenu>
      </FlexBox>
      <FlexBox justifyContent="flex-end">
        <AccentBtn onClick={props.toggleTheme}>
          {props.isDarkMode ? <FaSun /> : <FaMoon />}
        </AccentBtn>
      </FlexBox>
    </>
  );

  return (
    <InnerBox>
      <FlexBoxHeader>
        <UnderlineBtnTitle onClick={goToMain}>땡땡능력시험</UnderlineBtnTitle>
        <FlexBoxMenus>
          <Menus />
        </FlexBoxMenus>
        <BtnMenuMobile isMobileMenuOn={isMobileMenuOn} onClick={toggleMenu}>
          <FaBars />
        </BtnMenuMobile>
      </FlexBoxHeader>
      {isMobileMenuOn ? (
        <FlexBox justifyContent="flex-end">
          <FlexBoxMenusMobile>
            <Menus />
          </FlexBoxMenusMobile>
        </FlexBox>
      ) : null}
    </InnerBox>
  );
}
