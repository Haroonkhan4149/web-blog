import "./header.css"   
import backimg from './../assets/images/pic2.png'
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My Blogging Website</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src={backimg} className="headerImage"/>
    </div>
  )
}

export default Header