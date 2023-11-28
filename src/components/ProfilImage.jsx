import Avatar from "./Avatar";



function profilImage({ src }) {
  return (
    <div className="avatar">
      <Avatar src={src} />
    </div>

  )
}

export default profilImage;