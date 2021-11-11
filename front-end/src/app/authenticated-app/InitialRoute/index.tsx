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
  Title,
  MenuIndicator,
  IndicatorImageWrapper,
  IndicatorImage,
  Marquee,
  GifImages,
  ArtistImage,
} from './styles';

const InitialRoute = () => {
  const history = useHistory();
  const { user, logOff } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);
  const [choice, setChoice] = useState(null);

  const [artists, setArtists] = useState<any[] | null>(null);
  const [tracks, setTracks] = useState<any[] | null>(null);
  const [artistsImages, setArtistsImages] = useState<string[]>([]);
  const [tracksImages, setTracksImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>('');

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const ngrok = 'http://5da8-2804-14c-1a1-27a2-c179-9516-fe35-6e6f.ngrok.io';

  useEffect(() => {
    if (choice === 'artists') {
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
            console.log(data);
            setArtists(data.items);
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
    } else if (choice === 'tracks') {
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
            // console.log('track ');
            setTracks(data.items);
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
    }
  }, [user, choice]);

  useEffect(() => {
    history.push('/');
  }, [user]);

  useEffect(() => {
    if (artists) {
      const imgArray = artists.map((artist) => artist.images[0].url);

      setArtistsImages(imgArray);
    }
  }, [artists]);

  useEffect(() => {
    if (tracks) {
      const imgArray = tracks.map((track) => track.album.images[0].url);

      setTracksImages(imgArray);
    }
  }, [tracks]);

  return (
    <>
      <Menu openMenu={openMenu} toggleMenu={toggleMenu} setChoice={setChoice} />
      <Wrapper isSet={choice !== null}>
        <Marquee>
          <p>
            TOP {choice || ''} TOP {choice || ''} TOP {choice || ''} TOP{' '}
            {choice || ''} TOP {choice || ''} TOP {choice || ''} TOP{' '}
            {choice || ''} TOP {choice || ''} TOP {choice || ''} TOP{' '}
            {choice || ''} TOP {choice || ''} TOP {choice || ''}
          </p>
        </Marquee>
        <Info>
          <InfoText>i</InfoText>
        </Info>
        <MenuToggler onClick={toggleMenu}>
          <MenuImage src={images.arrows} alt="setas" />
        </MenuToggler>

        {!choice ? (
          <>
            <IndicatorImageWrapper>
              <IndicatorImage src={images.cursor} alt="arrow down" />
            </IndicatorImageWrapper>
            <MenuIndicator>Menu</MenuIndicator>
          </>
        ) : (
          <>
            <Title>TOP {choice}</Title>
            <ArtistImage src={currentImage} />
            {choice === 'tracks' ? (
              <AroundList>
                {tracks &&
                  tracks.map((track, index) => (
                    <Inline
                      onMouseEnter={() => setCurrentImage(tracksImages[index])}
                      onMouseLeave={() => setCurrentImage('')}
                    >
                      <BaseText>{index + 1}.</BaseText>
                      <ListDiv>
                        <ListName>{track.name}</ListName>
                        {/* <ListImg src={track.album.images[0].url} /> */}
                      </ListDiv>
                    </Inline>
                  ))}
              </AroundList>
            ) : (
              <>
                <AroundList>
                  {artists &&
                    artists.map((artist, index) => (
                      <Inline
                        onMouseEnter={() =>
                          setCurrentImage(artistsImages[index])
                        }
                        onMouseLeave={() => setCurrentImage('')}
                      >
                        <BaseText>{index + 1}.</BaseText>
                        <ListDiv>
                          {/* {console.log(artist)} */}
                          {/* <ListImg src={artist.images[0].url} /> */}
                          <ListName>{artist.name}</ListName>
                        </ListDiv>
                      </Inline>
                    ))}
                </AroundList>
              </>
            )}
          </>
        )}
        {!choice ? (
          <>
            <GifImages src={images.cringe} alt="cringe dance" x={291} y={43} />
            <GifImages src={images.chilldad} alt="chilldad" x={1433} y={271} />
            <GifImages src={images.groot} alt="groot" x={532} y={783} />
            <GifImages src={images.duck} alt="duck" x={1000} y={693} />
            <GifImages
              src={images.spongebob}
              alt="spongebob"
              x={1478}
              y={673}
            />
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default InitialRoute;
