import styled from "styled-components";
import defaultImg from "../../asset/image/Default_Hero.jpg";

interface ImageProps {
  img: string;
}

const StyledHero = styled.header<ImageProps>`
  min-height: calc(100vh - 66px);
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 4rem;
`;

export default StyledHero;
