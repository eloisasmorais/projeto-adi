import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import images from '../../../constants/images';
import useAuth from '../../../hooks/useAuth';
import Menu from '../Menu';
import { BaseText, MenuImage, MenuToggler, Wrapper } from './styles';

const InitialRoute = () => {
  const history = useHistory();
  const { user, requestTopArtists } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  useEffect(() => {
    const getTopItems = (token: string) => {
      requestTopArtists(token);
    };

    if (user.token) getTopItems(user.token);
  }, [user]);

  useEffect(() => {
    history.push('/');
  }, []);

  return (
    <>
      <Menu openMenu={openMenu} toggleMenu={toggleMenu} />
      <Wrapper>
        <BaseText>Oi</BaseText>
        <MenuToggler onClick={toggleMenu}>
          <MenuImage src={images.arrows} alt="setas" />
        </MenuToggler>
      </Wrapper>
    </>
  );
};

export default InitialRoute;
