import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 13px 35px;
  border: 0;
  border-radius: 10px;
  font-size: ${props => props.theme.size.button};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.orange};
  border: 2px solid ${props => props.theme.colors.white};
  transition: background-color ${props => props.theme.animate.transition};
  outline: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.orange};
    border: 2px solid ${props => props.theme.colors.orange};
  }
`;
