import styled, { css, keyframes } from 'styled-components';
import images from '../../../constants/images';

const BounceAnimation = keyframes`
  0% {
    transform: rotate(235deg) translateY(0)
  } 50% {
    transform: rotate(235deg) translateY(20px)
  } 100% {
    transform: rotate(235deg) translateY(0px)
  }
`;

const MarqueeAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

const Wrapper = styled.main<{
  isSet: boolean;
}>`
  align-items: center;
  background-color: #0b0c0f;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;

  ${(props) =>
    props.isSet &&
    css`
      flex-direction: row-reverse;
      justify-content: space-between;
    `}
`;

const BaseText = styled.p`
  font-size: 64px;
  color: #fff;
  padding-right: 10px;
`;

const MenuToggler = styled.div`
  background-color: #1df559;
  padding: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-bottom: 6rem;
  padding-left: 6rem;
  position: absolute;
  height: 265px;
  width: 265px;
  bottom: -70px;
  left: -70px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: url(${images.cursor}), auto;
  transform: rotate(-20deg);
`;

const MenuImage = styled.img`
  transform: rotate(30deg);
  margin-left: 16px;
  cursor: url(${images.cursor}), pointer;
`;

const Info = styled.div`
  background-color: #0b0c0f;
  border: solid #ffeb35;
  border-radius: 100%;
  border-width: 8px;
  width: 250px;
  height: 250px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  right: -130px;
  top: -130px;
  padding-top: 2rem;
  padding-right: 4rem;

  &:hover {
    cursor: url(${images.cursor}), pointer;

    p {
      transform: rotateX(180deg);

      &:hover {
        cursor: url(${images.cursor}), pointer;
      }
    }
  }
`;

const InfoText = styled.p`
  color: #ffeb35;
  font-size: 110px;
  transition: all 0.3s;
`;
const ListName = styled.p`
  font-size: 2.5rem;
  color: white;
  display: flex;
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Inline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const AroundList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 3rem 4rem 20rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-orientation: mixed;
  text-transform: uppercase;
  writing-mode: vertical-rl;
`;

const MenuIndicator = styled.h1`
  font-size: 120px;
  text-transform: uppercase;
  margin-right: 8rem;
  color: #e7e7e7;
`;

const IndicatorImageWrapper = styled.div`
  margin-top: 140px;
`;

const IndicatorImage = styled.img`
  width: 200px;
  height: auto;
  transform: rotate(235deg);
  margin-right: 8rem;
  animation: ${BounceAnimation} 800ms infinite;
`;

const Marquee = styled.div`
  background-color: #ff3c00;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding: 2px;
  position: absolute;
  top: 0;

  p {
    color: #fff;
    display: inline-block;
    padding-left: 100%;
    font-size: 64px;
    animation: ${MarqueeAnimation} 15s linear infinite;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const GifImages = styled.img<{
  x: number;
  y: number;
}>`
  max-width: 200px;
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`;

const ArtistImage = styled.img`
  max-width: 500px;
  height: auto;
`;

export {
  AroundList,
  ArtistImage,
  BaseText,
  GifImages,
  IndicatorImage,
  IndicatorImageWrapper,
  Info,
  InfoText,
  Inline,
  ListDiv,
  ListImg,
  ListName,
  Marquee,
  MenuImage,
  MenuIndicator,
  MenuToggler,
  Title,
  Wrapper,
};
