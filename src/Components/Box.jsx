import './Box.css';
import PropTypes from 'prop-types';

const Box = ({ inputColor, hexValue, isDarkText }) => {
    return (
        <div 
            className="square"
            style= {
                {
                    backgroundColor: inputColor,
                    color: isDarkText ? 'white': 'black '}
            }>
            <p>{inputColor ? inputColor : 'Empty Value'}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
    )
}

Box.propTypes = {
    inputColor: PropTypes.string.isRequired,
    hexValue: PropTypes.string.isRequired,
    isDarkText: PropTypes.bool.isRequired,
}

export default Box;