import React from 'react'
import { Button as BaseButton } from 'reactstrap'

const Button = ({children, ...otherProps}) =>
<BaseButton {...otherProps}>{children}</BaseButton>

export default Button