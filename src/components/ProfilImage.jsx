import Avatar from "./Avatar";



function profilImage({ src }) {
  return (
    <div className="avatar">
      <Avatar src={src.users.profilePicture} />
    </div>

  )
}

export default profilImage;