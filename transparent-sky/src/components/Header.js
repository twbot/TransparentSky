import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

	//on click function within function
    const onClickFunction = (event) => {
        console.log(event)
    }

	return (
		<header>
			<h1>Task Tracker</h1>
			<Button color='green' text='Hello' onClick={onClickFunction} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Track'
}

Header.propTypes = {
	title: PropTypes.string,
}

//css in js
const styleHeading = {
	color: 'white',
	backgroundColor: 'green'
}

export default Header