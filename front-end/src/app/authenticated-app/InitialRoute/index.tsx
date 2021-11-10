import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import images from '../../../constants/images';
import useAuth from '../../../hooks/useAuth';
import Menu from '../Menu';
import {
  BaseText,
  MenuImage,
  MenuToggler,
  Wrapper,
  Info,
  InfoText,
  ListDiv,
  ListImg,
  ListName,
  Inline,
  AroundList,
} from './styles';

const InitialRoute = () => {
  const history = useHistory();
  const { user, logOff } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);

  const [artists, setArtists] = useState<any[] | null>(null);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const ngrok = 'http://6ebe-2804-14c-1a1-27a2-8557-127e-2600-7598.ngrok.io';

  useEffect(() => {
    const requestTopArtists = async (token: string) => {
      try {
        const response = await fetch(`${ngrok}/auth/getTopArtists`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (response) {
          const data = await response.json();
          setArtists(data.items);
          console.log(data.items);
          return data;
        }
      } catch (e) {
        console.log(e);
      }
      return {
        error: 500,
        message: 'internal error',
      };
    };
    if (user.token) requestTopArtists(user.token);
  }, [user]);

  useEffect(() => {
    const requestTopTracks = async (token: string) => {
      try {
        const response = await fetch(`${ngrok}/auth/getTopTracks`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (response) {
          const data = await response.json();
          console.log('track ');
          console.log(data);
          return data;
        }
      } catch (e) {
        console.log(e);
      }
      return {
        error: 500,
        message: 'internal error',
      };
    };
    if (user.token) requestTopTracks(user.token);
  }, [user]);

  useEffect(() => {
    history.push('/');
  }, []);

  return (
    <>
      <Menu openMenu={openMenu} toggleMenu={toggleMenu} />
      <Wrapper>
        {/* <button onClick={logOff} style={{position: 'absolute', top:0, left: 50}}>SAI PORRA</button> */}
        <Info>
          <InfoText>i</InfoText>
        </Info>
        <AroundList>
          {artists &&
            artists.map((artist, index) => {
              return (
                <Inline>
                  <BaseText>{index + 1}.</BaseText>
                  <ListDiv>
                    <ListImg src={artist.images[0].url} />
                    <ListName>{artist.name}</ListName>
                  </ListDiv>
                </Inline>
              );
            })}
        </AroundList>
        <MenuToggler onClick={toggleMenu}>
          <MenuImage src={images.arrows} alt="setas" />
        </MenuToggler>
      </Wrapper>
    </>
  );
};

export default InitialRoute;
