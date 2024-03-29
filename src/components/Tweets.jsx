import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import TweetUserProfil from "./TweetTitle";
import TweetCallToActionIcons from "./AllIcons";
import { NavLink } from "react-router-dom";




function Tweets({ user }) {
  const [count, setCount] = useState(0);
  let [increment, setIncrement] = useState(0);
  let [openComment, setOpenComment] = useState(false);

  function hundelOpen() {
    setOpenComment(true);

  }

  function hundelClose(e) {
    e.preventDefault();
    let comment = [];
    comment.push(e.target.value);

    useEffect(() => {
      openComment = false;
    }, [])

  }




  function hundleIncrement() {
    setIncrement(increment + 1)
  }
  function hundelClick() {
    setCount(count + 1)
    if (count == 1) {
      setCount(count - 1)
    }
  }

  function clickAvatar() {
    return getId;
  }



  return (
    <div className="tweets">
      {user.map((users, key) => (
        <div className="tweet" key={key}>
          <div className="tweet-avatar">
            <NavLink to={`profil/${users.id}`} ><Avatar src={users.src} id={users.id} avatarClick={clickAvatar} /></NavLink>
          </div>
          <div className="tweet-content">
            <div className="tweet-title">
              <TweetUserProfil usr={users} />
            </div>
            <div className="tweet-text">
              <p>{users.text}</p>
            </div>
            <div className="tweet-image">
              <img src={users.imgContent} alt="" />
            </div>
            <TweetCallToActionIcons onClick={hundelClick}
              value={count} click={hundleIncrement} increment={increment} onOpen={hundelOpen} istrue={openComment} close={hundelClose} />


          </div>


        </div>
      ))}
    </div>
  )


}

export default Tweets;
