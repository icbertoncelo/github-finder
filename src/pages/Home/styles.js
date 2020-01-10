import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #9cdaf0, #f4cab1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 50px;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  img {
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.7);
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  margin: 0 0 10px;
  height: 44px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const SearchButton = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: ${colors.mainPurple};
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;
  align-self: stretch;

  &:hover {
    background: ${darken(0.04, colors.mainPurple)};
  }
`;
