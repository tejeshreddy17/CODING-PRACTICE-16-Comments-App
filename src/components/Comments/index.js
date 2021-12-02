import {Component} from 'react'

import {v4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {comments: [], name: '', comment: ''}

  onchangeName = event => {
    this.setState({name: event.target.value})
  }

  onchangeTextArea = event => {
    this.setState({comment: event.target.value})
  }

  onAddingComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      this.setState(prevState => ({
        comments: [
          ...prevState.comments,
          {
            name,
            comment,
            id: v4(),
            isLiked: false,
            profileColor:
              initialContainerBackgroundClassNames[
                Math.floor(Math.random() * 7)
              ],
            time: formatDistanceToNow(new Date()),
          },
        ],
        name: '',
        comment: '',
      }))
    }
  }

  deletingComment = id => {
    const {comments} = this.state
    const filteredComments = comments.filter(
      eachcomment => eachcomment.id !== id,
    )
    this.setState({comments: filteredComments})
  }

  clickingLikeButton = id => {
    this.setState(prevState => ({
      comments: prevState.comments.map(eachcomment => {
        if (id === eachcomment.id) {
          return {...eachcomment, isLiked: !eachcomment.isLiked}
        }
        return eachcomment
      }),
    }))
  }

  render() {
    const {comments, name, comment, profileColor} = this.state
    return (
      <div className="background-card">
        <h1 className="top-heading-style">Comments</h1>
        <div className="top-card-container">
          <form className="input-field-card">
            <p className="Form-heading-style">
              Say Something about the 4.0 Technologies
            </p>
            <input
              className="name-input"
              onChange={this.onchangeName}
              type="text"
              placeholder="Your Name"
              value={name}
            />
            <textarea
              className="comment-input"
              onChange={this.onchangeTextArea}
              type="text"
              placeholder="Your Comment"
              value={comment}
            />
            <button onClick={this.onAddingComment} type="button">
              Add Comment
            </button>
          </form>
          <img
            className="comments-image-style"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <div className="number-of-comments-container">
          <div className="number-of-comments-style">
            <p className="comments-style">{comments.length}</p>
          </div>
          <p>Comments</p>
        </div>
        <ul>
          {comments.map(eachcomment => (
            <CommentItem
              deletingComment={this.deletingComment}
              comments={eachcomment}
              clickingLikeButton={this.clickingLikeButton}
              profileColor={profileColor}
              key={eachcomment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
