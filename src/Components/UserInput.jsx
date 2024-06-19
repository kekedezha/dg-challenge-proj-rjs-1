import './UserInput.css'
import PropTypes from 'prop-types';

const UserInput = ({ inputColor, updateColor }) => {
    return (
        <form>
            <input 
                autoFocus
                id="colorToUpdate"
                type="text"
                placeholder="Add color name"
                value={inputColor}
                onChange={updateColor}
                className='form-input-box'>
            </input>
        </form>
    )
}

UserInput.propTypes = {
    inputColor: PropTypes.string.isRequired,
    updateColor: PropTypes.func.isRequired
}

export default UserInput;