import React from 'react'

function formatDate(date) {
    return date.toLocaleDateString();
  }


function Comment(props){
    return (
        <div className="Comment">
            <div>
                <img 
                    src = {props.author.avatarUrl}
                    alt={props.author.name}
                />
                <h3>{props.author.name} </h3>
            </div>
              <div className="Comment-text">{props.text}</div>
              <div className="Comment-date">
                {formatDate(props.date)}
              </div>
        </div> // end of wrapper div
    )
}

export default Comment;