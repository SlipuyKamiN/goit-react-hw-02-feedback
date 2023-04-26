import {
  ButtonsList,
  ButtonsListItem,
  Button,
} from './FeedbackButtonsList.styled';

export const FeedbackButtonsList = ({ feedbackTypes, updateState }) => {
  feedbackTypes = Object.keys(feedbackTypes);

  return (
    <ButtonsList>
      {feedbackTypes.map(feedbackType => (
        <ButtonsListItem key={feedbackType}>
          <Button onClick={updateState}>{feedbackType}</Button>
        </ButtonsListItem>
      ))}
    </ButtonsList>
  );
};
