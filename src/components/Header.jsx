import toptweet from '../images/toptweet.png'


function Header() {
  return (
    <header className="header">
      <h1 className="page-title text-blue-600"> <a href="#">Home</a> </h1>
      <button className="top-tweets"> <img src={toptweet} alt="top-tweets" /> </button>
    </header>

  )
}

export default Header;