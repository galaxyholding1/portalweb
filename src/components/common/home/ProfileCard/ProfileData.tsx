
interface Props {
  className?: string;
  label: string;
  children: any;
}

export const ProfileData = ({label, children, className}: Props) => {
  return (
    <div className={`profile-data-container ${className}`}>
      <label> {label} </label>
      <span> {children} </span>
    </div>
  )
}
