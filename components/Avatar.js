const Avatar = ({url}) => {
  return (
    <img
    src={url}
    alt='profile-pic'
    loading="lazy"
    className="cursor-pointer transition duration-150 transform hover:scale-110 h-10 rounded-full"
    />
  )
}

export default Avatar