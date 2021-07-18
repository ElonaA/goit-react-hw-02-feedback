import PropTypes from 'prop-types';
import { Container, Title, Image } from './Notification.styled';
import image from '../../image/cat_hungry.png';

export const Notification = ({ message }) => {
  return (
    <Container>
      {message && <Title>{message}</Title>}
      <Image src={image} alt="Печальный котик" width="150"></Image>
    </Container>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  image: PropTypes.string,
};
