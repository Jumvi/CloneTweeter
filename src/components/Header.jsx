import toptweet from '../images/toptweet.png'


function Header() {
  return (
    <header className="header flex justify-between p-7 border-b border-gray-800">
      <h1 className="page-title text-2xl font-bold"> <a href="#" className='no-underline text-white'>Home</a> </h1>
      <button className="top-tweets w-6 bg-black Class
Properties
border-0"> <img src={toptweet} alt="top-tweets" /> </button>
    </header>

  )
}

export default Header;