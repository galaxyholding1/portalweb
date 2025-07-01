
interface Props {
  className?: string;
  label: string;
  children: any;
}
// This component displays a label and its corresponding data in a styled container.
// It can be used to show various profile-related information in a consistent format.
export const ProfileData = ({label, children, className}: Props) => {
  return (
    <div className={`profile-data-container ${className}`}>
      <label> {label} </label>
      <span> {children} </span>
    </div>
  )
}