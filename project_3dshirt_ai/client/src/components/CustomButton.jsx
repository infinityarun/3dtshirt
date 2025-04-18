import { useSnapshot } from 'valtio';
import state from '../store'
import PropTypes from 'prop-types';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if(type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#fff'
            };
        }
    };
    
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
      {title}
    </button>
  )
}

CustomButton.propTypes = {
  type: PropTypes.oneOf(["filled", "outline"]),  // Only accepts 'filled' as a valid value
    title: PropTypes.string.isRequired, // Requires a string and is mandatory
    customStyles: PropTypes.string,      // Accepts a string but is optional
    handleClick: PropTypes.func         // Accepts a function and is optional
};

export default CustomButton;
