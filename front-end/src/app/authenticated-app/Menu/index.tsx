import React from 'react';
import images from '../../../constants/images';
import useAuth from '../../../hooks/useAuth';
import { CloseButton, Item, ItemsWrapper, MenuWrapper, Title } from './styles';

interface MenuProps {
  openMenu: boolean;
  toggleMenu: () => void;
  setChoice: any;
}

const Menu: React.FC<MenuProps> = ({ openMenu, toggleMenu, setChoice }) => (
  <MenuWrapper open={openMenu}>
    <Title>Menu</Title>

    <ItemsWrapper>
      <Item onClick={() => {
          setChoice('artists');
          toggleMenu()
        }}>artistas</Item>
      <Item
        onClick={() => {
          setChoice('tracks');
          toggleMenu()
        }}
      >
        musiquinhas
      </Item>
    </ItemsWrapper>

    <CloseButton src={images.close} alt="fechar" onClick={toggleMenu} />
  </MenuWrapper>
);

export default Menu;
