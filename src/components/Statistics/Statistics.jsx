import PropTypes from "prop-types";

import { Inner, Title, Wrapper, Subtitle, EmojiNeutral, EmojiAngry, EmojiHeartEyes, ChatSquareQuote, HandThumbsUp, WrapperTotal } from './Statistics.styled';

export const Statistics = ({ good = 0, bad = 0, neutral = 0, total = 0, positivePercentage = 0 }) => {
        
    return (
        <Inner>
            <Wrapper><EmojiHeartEyes /> <Title> Отлично. Вы супер! — {good}</Title></Wrapper>
            <Wrapper><EmojiNeutral /><Title>Нормально, но могло быть лучше — {neutral}</Title></Wrapper>
            <Wrapper><EmojiAngry /> <Title> Ужасно. Дайте книгу жалоб! — {bad}</Title></Wrapper>
           
            <WrapperTotal>
                <Wrapper><ChatSquareQuote /><Subtitle> Общее колличество отзывов — {total} .</Subtitle></Wrapper>
                <Wrapper><HandThumbsUp /><Subtitle>Из них положительных — {positivePercentage}% .</Subtitle></Wrapper>                
            </WrapperTotal>
        </Inner>
    );
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string,
};