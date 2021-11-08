import styled from 'styled-components';
import images from '../../../constants/images';

const Wrapper = styled.main`
  background-color: #0b0c0f;
  height: 100%;
`;

const BaseText = styled.p`
  font-size: 64px;
  color: #fff;
`;

const MenuToggler = styled.div`
  background-color: #1df559;
  padding: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-bottom: 6rem;
  padding-left: 6rem;
  /* position: absolute; */
  height: 265px;
  width: 265px;
  bottom: -90px;
  left: -60px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: url(${images.cursor}), auto;
  transform: translate(-30%, 75vh) rotate(-27deg);
`;

const MenuImage = styled.img`
  transform: rotate(30deg);
  margin-left: 16px;
  cursor: url(${images.cursor}), pointer;
`;

export { BaseText, MenuImage, MenuToggler, Wrapper };
