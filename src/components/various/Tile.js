import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tile = styled.div`
    display: flex;
    flex: 0 0 50%;
    background: ${(props) => !!props.themed ? '#00ADFF' : 'white'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height:50%;
`;

Tile.propTypes = {
  themed: PropTypes.bool,
};

export default Tile;
