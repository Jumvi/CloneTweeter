


function Avatar ({ data,avatarClick}){
if(!data) return (<div>not found</div>)
    return(
        <div className='avatar flex border-none h-12 w-12 '>
            <button id={data.id} onClick={avatarClick} className="fallow-button w-auto cursor-pointer"><img className="border-none bg-transparent" src={data.profilePicture} alt="avatar" /></button>
        </div>
    )
}

export default Avatar;