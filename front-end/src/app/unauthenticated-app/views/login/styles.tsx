import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const LoginWrapper = styled.div`
  background-color: ${colors.SP_PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const LoginItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled.h1`
  color: ${colors.WHITE};
  text-align: center;
  font-size: 24px;
`;
