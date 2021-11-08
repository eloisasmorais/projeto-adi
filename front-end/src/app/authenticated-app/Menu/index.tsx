import React from 'react';
import images from '../../../constants/images';
import { CloseButton, Item, ItemsWrapper, MenuWrapper, Title } from './styles';

interface MenuProps {
  openMenu: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ openMenu, toggleMenu }) => (
  <MenuWrapper open={openMenu}>
    <Title>Menu</Title>

    <ItemsWrapper>
      <Item>artistas</Item>
      <Item>musiquinhas</Item>
    </ItemsWrapper>

    <CloseButton src={images.close} alt="fechar" onClick={toggleMenu} />
  </MenuWrapper>
);

export default Menu;
