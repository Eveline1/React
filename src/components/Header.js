import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    
    
    return (
        <header className='header'>
            <hi>{title}</hi>
           <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'close': 'ADD' } onClick={onAdd}
           /> 
        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker',
}
Header.propTypes={
    title: PropTypes.string, 
}
export default Header
