import styled from 'styled-components';
import images from '../../../constants/images';

const Wrapper = styled.main`
  background-color: #0b0c0f;
  height: 100%;
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
  /* position: absolute; */
  height: 265px;
  width: 265px;
  bottom: -112px;
  left: -70px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: url(${images.cursor}), auto;
  /* transform: rotate(-20deg); */
  /* transform: translate(-30%, 75vh) rotate(-27deg); */
  transform: translate(-30%, -19vh) rotate(-27deg);
`;

const MenuImage = styled.img`
  transform: rotate(30deg);
  margin-left: 16px;
  cursor: url(${images.cursor}), pointer;
`;

const Info = styled.div`
  border: solid #ffeb35;
  border-radius: 50%;
  border-width: 8px;
  width: 250px;
  height: 250px;
  /* transform: translate(30%, -20vh); */
  position: absolute;
  right: -12vh;
  top: -12vh;
`;

const InfoText = styled.p`
  color: #ffeb35;
  font-size: 120px;
  transform: translate(37%, 33%);
  &:hover {
    transform: translate(37%, 40%) rotateX(180deg);
    cursor: url(${images.cursor}), pointer; // isso aqui n ta funcioanando n
  }
`;
const ListUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`;
const ListName = styled.p`
  font-size: 20px;
  color: white;
  display: flex;
  /* flex-wrap: nowrap;  */
  /* flex-direction: row; */
`;
const ListDiv = styled.div`
  height: 150px;
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
  flex-wrap: wrap;
  padding-bottom: 20px;
  padding-right: 50px;
  /* border: solid red; */
  min-width: 20%;
  max-width: 30%;
  
`;

const AroundList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-left: 30px;
`;

export {
  BaseText,
  MenuImage,
  MenuToggler,
  Info,
  Wrapper,
  InfoText,
  ListDiv,
  ListImg,
  ListName,
  Inline,
  AroundList
};
