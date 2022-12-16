import PropTypes from 'prop-types';
import { NotificationBox } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationBox>
      <p>{message}</p>
    </NotificationBox>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
