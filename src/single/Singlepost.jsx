import "./single.css"

function Single() {
  return (
    <div className="single">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet</h1>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>John Doe</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum beatae possimus blanditiis aliquam nihil temporibus magnam totam modi qui vero enim quisquam accusamus ipsum voluptas, nostrum in, eveniet earum!</p>
      </div>
    </div>
  )
}

export default Single