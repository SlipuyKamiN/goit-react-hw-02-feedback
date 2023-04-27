import { SectionTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
