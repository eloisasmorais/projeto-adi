import styled, { css } from 'styled-components';
import images from '../../../constants/images';

const MenuWrapper = styled.nav<{
  open: boolean;
}>`
  height: 100vh;
  transform: translate(-100%, 100%);
  width: 100vw;
  position: absolute;
  background-color: #1df559;
  display: flex;
  justify-content: space-between;
  align-content: center;
  transition: all 0.5s;
  transition-delay: 0.5s;
  z-index: 1;

  ${(props) =>
    props.open &&
    css`
      transform: translate(0, 0);
      transition-delay: 0;
    `}
`;

const Title = styled.h1`
  font-size: 96px;
  letter-spacing: 0.275em;
  text-transform: uppercase;
  flex: 1 0 auto;
  margin: 75px 0 95px 130px;
  color: #f66b2f;
  text-shadow: #fff -5px 0px;
  align-self: flex-start;
`;

const ItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  list-style: none;
  /* padding: 0 35% 0; */
`;

const Item = styled.li`
  color: #fff;
  transition: all 0.3s;
  font-size: 78px;

  &:hover {
    letter-spacing: 0.275em;
    color: #fff;
    cursor: url(${images.cursor}), auto;
    text-shadow: #2c3934 -5px 0px;
  }
`;

const CloseButton = styled.img`
  align-self: flex-end;
  &:hover {
    cursor: url(${images.cursor}), auto;
  }
`;

export { CloseButton, Item, ItemsWrapper, MenuWrapper, Title };
