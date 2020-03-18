import styled from 'styled-components';
import PropTypes from 'prop-types';

const TileContent = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    font-size: ${(props) => props.fontSize || '12px'};
    text-align: center;
`;

TileContent.propTypes = {
  fontSize: PropTypes.string,
};

export default TileContent;
