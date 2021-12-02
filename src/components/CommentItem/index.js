// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {comments, deletingComment, clickingLikeButton} = props
  const {id, name, comment, isLiked, profileColor, time} = comments
  const onclickingDeleteIcon = () => {
    deletingComment(id)
  }
  const onclickinglikebutton = () => {
    clickingLikeButton(id)
  }
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedButton = isLiked ? 'liked-color' : ''

  const durationfromcomment = formatDistanceToNow(time)

  return (
    <li className="comment-card">
      <div className="top-section-card">
        <div className={`profile-logo-style ${profileColor}`}>
          <p className="profile-logo-alphabet">
            {name.slice(0, 1).toUpperCase()}
          </p>
        </div>
        <div className="name-time-comment-container">
          <div className="name-time-container">
            <p className="comment-creator-name">{name}</p>
            <p className="comment-created-time">{durationfromcomment}</p>
          </div>
          <p className="comment-description-style">{comment}</p>
        </div>
      </div>

      <div className="bottom-section-card">
        <div className="like-container">
          <img className="like-logo" alt="like" src={imgUrl} />
          {isLiked && (
            <button
              onClick={onclickinglikebutton}
              type="button"
              className={`like-style ${likedButton}`}
            >
              Liked
            </button>
          )}
          {!isLiked && (
            <button
              onClick={onclickinglikebutton}
              type="button"
              className="like-style"
            >
              Like
            </button>
          )}
        </div>
        <button
          type="button"
          testid="delete"
          className="delete-button-style"
          onClick={onclickingDeleteIcon}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
