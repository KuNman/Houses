import styled from 'styled-components';
import PropTypes from 'prop-types';

const TileHeader = styled.div`
    text-transform: uppercase;
    font-size: ${(props) => props.fontSize || '36px'};
    text-align: center;
`;

TileHeader.propTypes = {
  fontSize: PropTypes.string,
};

export default TileHeader;
