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
  const [choice, setChoice] = useState(null);

  const [artists, setArtists] = useState<any[] | null>(null);
  const [tracks, setTracks] = useState<any[] | null>(null);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const ngrok = 'http://3480-2804-14c-1a1-27a2-c179-9516-fe35-6e6f.ngrok.io';

  useEffect(() => {
    console.log(choice)
    if (choice == 'artists') {
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
    }else if(choice == "tracks"){
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

  // useEffect(() => {
  //   const requestTopTracks = async (token: string) => {
  //     try {
  //       const response = await fetch(`${ngrok}/auth/getTopTracks`, {
  //         method: 'POST',
  //         mode: 'cors',
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify({ token }),
  //       });

  //       if (response) {
  //         const data = await response.json();
  //         console.log('track ');
  //         setTracks(data.items);
  //         return data;
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     return {
  //       error: 500,
  //       message: 'internal error',
  //     };
  //   };
  //   if (user.token) requestTopTracks(user.token);
  // }, [user]);

  useEffect(() => {
    history.push('/');
  }, [user]);

  return (
    <>
      <Menu openMenu={openMenu} toggleMenu={toggleMenu} setChoice={setChoice} />
      {console.log(choice)}
      <Wrapper>
        <button onClick={logOff} style={{position: 'absolute', top:0, left: 50}}>SAI PORRA</button>
        <Info>
          <InfoText>i</InfoText>
        </Info>
        {choice == "tracks" ? (<AroundList>
          {tracks &&
            tracks.map((track, index) => {
              return (
                <Inline>
                  <BaseText>{index + 1}.</BaseText>
                  <ListDiv>
                    <ListName>{track.name}</ListName>
                    <ListImg src={track.album.images[0].url} />
                  </ListDiv>
                </Inline>
              );
            })}
        </AroundList>) : (
          <AroundList>
             {console.log(artists)}
             {artists &&
               artists.map((artist, index) => {
                 return (
                   <Inline>
                     <BaseText>{index + 1}.</BaseText>
                     <ListDiv>
                       {/* {console.log(artist)} */}
                       <ListImg src={artist.images[0].url} />
                       <ListName>{artist.name}</ListName>
                     </ListDiv>
                   </Inline>
                 );
               })}
            </AroundList>
        )}
        
        <MenuToggler onClick={toggleMenu}>
          <MenuImage src={images.arrows} alt="setas" />
        </MenuToggler>
      </Wrapper>
    </>
  );
};

export default InitialRoute;

/*------------------------ LOGICA PARA ARTISTA*/
// <AroundList>
//   {console.log(artists)}
//   {artists &&
//     artists.map((artist, index) => {
//       return (
//         <Inline>
//           <BaseText>{index + 1}.</BaseText>
//           <ListDiv>
//             {/* {console.log(artist)} */}
//             <ListImg src={artist.images[0].url} />
//             <ListName>{artist.name}</ListName>
//           </ListDiv>
//         </Inline>
//       );
//     })}
//  </AroundList>

/*------------------------ LOGICA PARA TRACK*/
//  <AroundList>
//     {tracks &&
//       tracks.map((track, index) => {
//         return (
//           <Inline>
//             <BaseText>{index + 1}.</BaseText>
//             <ListDiv>
//               <ListName>{track.name}</ListName>
//               <ListImg src={track.album.images[0].url}/>
//             </ListDiv>
//           </Inline>
//         );
//       })}
//   </AroundList>
