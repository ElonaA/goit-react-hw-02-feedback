import styled from '@emotion/styled/macro';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h3`
  margin: 0px;
  padding-bottom: 30px;
  font-size: ${props => props.theme.size.title};
  font-weight: 700;
  line-height: 1.4;
  color: ${props => props.theme.colors.black};
  text-align: left;
`;

export const Image = styled.img`
  display: block;
  text-align: center;
`;
