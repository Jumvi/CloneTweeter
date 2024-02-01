


function Avatar ({src, id,avatarClick}){
    return(
        <div className='avatar flex  '>
            <button id={id} onClick={avatarClick} className="fallow-button w-auto"><img src={src} alt="avatar" /></button>
        </div>
        
            
        
    )
}

export default Avatar;