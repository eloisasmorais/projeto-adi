import styled, { css } from 'styled-components';
import colors from '../constants/colors';

const Button = styled.a<{
  secondary?: boolean;
}>`
  border-radius: 6px;
  max-width: 200px;
  padding: 8px 60px;
  border: 0;
  margin-top: 24px;
  cursor: pointer;

  background-color: ${colors.WHITE};
  color: ${colors.SP_PRIMARY};

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${colors.SP_PRIMARY};
      color: ${colors.WHITE};
    `}
`;

export default Button;
