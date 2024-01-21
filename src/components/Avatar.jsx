


function Avatar ({src, id,avatarClick}){
    return(
        <div className='avatar'>
            <button id={id} onClick={avatarClick} className="fallow-button"><img src={src} alt="avatar" /></button>
        </div>
        
            
        
    )
}

export default Avatar;