import { NotificationTitle } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <NotificationTitle>{message}</NotificationTitle>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
