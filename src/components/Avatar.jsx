


function Avatar ({src, id,avatarClick}){
    return(
        <div className='avatar flex border-none h-12 w-12 '>
            <button id={id} onClick={avatarClick} className="fallow-button w-auto"><img className="border-none bg-transparent" src={src} alt="avatar" /></button>
        </div>
        
            
        
    )
}

export default Avatar;