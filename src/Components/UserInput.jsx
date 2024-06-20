import './UserInput.css'
import PropTypes from 'prop-types';
import colorNames from 'colornames';

const UserInput = ({ inputColor, setInputColor, setHexValue }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input 
                autoFocus
                id="colorToUpdate"
                type="text"
                placeholder="Add color name"
                required
                value={inputColor}
                onChange={(e) => {
                    setInputColor(e.target.value)
                    setHexValue(colorNames(e.target.value));
                }}
            >
            </input>
        </form>
    )
}

UserInput.propTypes = {
    inputColor: PropTypes.string.isRequired,
    setInputColor: PropTypes.func.isRequired,
    setHexValue: PropTypes.func.isRequired,
}

export default UserInput;