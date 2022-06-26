

import PropTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >
        {children}
    </button>
  )
}
Button.defaultProps={
    version:"primary",
    type:"button",
    isDiabled:false
}
Button.propTypes= {
    version:PropTypes.string,
    children:PropTypes.node.isRequired,
    type:PropTypes.string,
    isDiabled:PropTypes.bool
}
export default Button