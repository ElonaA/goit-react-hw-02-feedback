import styled from '@emotion/styled/macro';
import {
  EmojiNeutralFill,
  EmojiAngryFill,
  EmojiHeartEyesFill,
  ChatSquareQuoteFill,
  HandThumbsUpFill,
} from '@styled-icons/bootstrap';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Title = styled.h3`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.review};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.black};
  text-align: left;
}
`;

export const Wrapper = styled.div`
padding-top: 10px;
padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
`;
export const WrapperTotal = styled.div`
margin-top:50px;
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
border: 1px solid ${props => props.theme.colors.orange};
}
`;

export const Subtitle = styled.h4`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 500;
  line-height: 1.3;
  color: ${props => props.theme.colors.black};
  text-align: left;
}
`;

export const EmojiNeutral = styled(EmojiNeutralFill)`
  margin-right: 9px;
  color: ${props => props.theme.colors.orange};
  width: ${props => props.theme.icon.small};
`;

export const EmojiAngry = styled(EmojiAngryFill)`
  margin-right: 9px;
  color: ${props => props.theme.colors.orange};
  width: ${props => props.theme.icon.small};
`;

export const EmojiHeartEyes = styled(EmojiHeartEyesFill)`
  margin-right: 9px;
  color: ${props => props.theme.colors.orange};
  width: ${props => props.theme.icon.small};
`;

export const ChatSquareQuote = styled(ChatSquareQuoteFill)`
  margin-right: 9px;
  color: ${props => props.theme.colors.orange};
  width: ${props => props.theme.icon.small};
`;

export const HandThumbsUp = styled(HandThumbsUpFill)`
  margin-right: 9px;
  color: ${props => props.theme.colors.orange};
  width: ${props => props.theme.icon.small};
`;
