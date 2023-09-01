import {RxStar, RxStarFilled, RxChatBubble, RxSymbol, RxShare2} from 'react-icons/rx';
import './drop.css';
import { useReducer } from 'react';

function onClickReply() {
  
}


function onClickRepost() {
  
}


function onClickShare() {
  
}


/**
 * Given the elapsed time in seconds, returns the elapsed time in 
 * the largest sensible unit of time.
 * The largest unit is days.
 * @param {Number} elapsed The time elapsed
 * @returns The unit of time as a String
 */
function getElapsed(timestamp) {
  const date = timestamp.toDate();
  let elapsed = (Date.now() - date) / 1000;
  
  if (elapsed < 60) {
    return `${Math.round(elapsed)} sec ago`;
  }
  elapsed /= 60;
  if (elapsed < 60) {
    return `${Math.round(elapsed)} min ago`;
  }
  elapsed /= 60;
  if (elapsed < 24) {
    return `${Math.round(elapsed)} hrs ago`;
  }
  elapsed /= 24;
  if (elapsed < 14)
    return `${Math.round(elapsed)} days ago`;
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export default function Drop({detail}) {
  const [liked, toggleLike] = useReducer((val, action) => {
    return !val;
  }, false);
  
  return (
    <div className='drop-container'>
      <div className='drop-header'>
        <div className='drop-icon'/>
        <p className='drop-username'>{detail.username}</p>
        <p className='drop-date'>
          {detail? getElapsed(detail.timestamp) : ""}
        </p>
      </div>
      <p className='drop-message'>{detail.message}</p>
      <div className='drop-reactions'>
        <div onClick={onClickReply}>
          <div><RxChatBubble/></div>
          <p>{detail.replies.length}</p>
        </div>
        <div onClick={onClickRepost}>
          <div><RxSymbol/></div>
          <p>{detail.reposters.length}</p>
        </div>
        <div onClick={toggleLike}>
          <div>{liked ? <RxStarFilled/> : <RxStar/>}</div>
          <p>{detail.likers.length}</p>
        </div>
        <div onClick={onClickShare}>
          <div><RxShare2/></div>
        </div>
      </div>
    </div>
  );
}
