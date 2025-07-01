import './Button.css'
// This file is part of the OpenCTI project
export const Button = ({icon, children, className, onClick = () => {}}) => {
  const classes = className ? `button ${className}` : 'button' 
  return (
    <button className={classes} onClick={onClick}>
      {icon && icon} {children}
    </button>
  )
}