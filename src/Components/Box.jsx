import './Box.css';
import PropTypes from 'prop-types';

const Box = ({ inputColor }) => {
    return (
        <div 
            className="color-box"
            style= {{backgroundColor: inputColor}}>
            <p>{inputColor ? inputColor : 'Empty Value'}</p>
        </div>
    )
}

Box.propTypes = {
    inputColor: PropTypes.string.isRequired
}

export default Box;