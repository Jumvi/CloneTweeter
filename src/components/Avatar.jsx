


function Avatar ({src, id,avatarClick}){
    return(
        <div className='avatar'>
            <button id={id} onClick={avatarClick}><img src={src} alt="" /></button>
        </div>
        
            
        
    )
}

export default Avatar;