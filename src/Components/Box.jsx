import './Box.css';
import PropTypes from 'prop-types';

const Box = ({ inputColor, hexValue }) => {
    return (
        <div 
            className="square"
            style= {{backgroundColor: inputColor}}>
            <p>{inputColor ? inputColor : 'Empty Value'}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
    )
}

Box.propTypes = {
    inputColor: PropTypes.string.isRequired,
    hexValue: PropTypes.string.isRequired
}

export default Box;