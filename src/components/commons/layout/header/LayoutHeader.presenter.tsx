import WeatherComponent from "../../../../../pages/Weather";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>💎 Solo</InnerLogo>

        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>Sign In</InnerButton>
          <InnerButton onClick={props.onClickMoveSignUp}>Sign Up</InnerButton>
        </div>
      </InnerWrapper>
      <WeatherComponent />
    </Wrapper>
  );
}
