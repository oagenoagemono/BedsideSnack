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
function getElapsed(elapsed) {
  if (elapsed < 60) {
    return `${Math.round(elapsed)} sec`;
  }
  elapsed /= 60;
  if (elapsed < 60) {
    return `${Math.round(elapsed)} min`;
  }
  elapsed /= 60;
  if (elapsed < 24) {
    return `${Math.round(elapsed)} hrs`;
  }
  elapsed /= 24;
  return `${Math.round(elapsed)} days`;
}

export default function Drop({detail, onClickLike}) {
  const elapsed = (Date.now() - new Date(detail.time)) / 1000;
  const [liked, toggleLike] = useReducer((val, action) => {
    return !val;
  }, detail.reactions.liked);
  const likeWithout = detail.reactions.liked ? 
    detail.reactions.likeNum - 1 : detail.reactions.likeNum;
  
  return (
    <div className='drop-container'>
      <div className='drop-header'>
        <div className='drop-icon'/>
        <p className='drop-username'>{detail.username}</p>
        <p className='drop-date'>
          {getElapsed(elapsed)} ago
        </p>
      </div>
      <p className='drop-message'>{detail.message}</p>
      <div className='drop-reactions'>
        <div onClick={onClickReply}>
          <RxChatBubble/>
          <p>{detail.reactions.replies.length}</p>
        </div>
        <div onClick={onClickRepost}>
          <RxSymbol/>
          <p>{detail.reactions.repostNum}</p>
        </div>
        <div onClick={toggleLike}>
          {liked ? <RxStarFilled/> : <RxStar/>}
          <p>{liked ? likeWithout + 1 : likeWithout}</p>
        </div>
        <div onClick={onClickShare}>
          <RxShare2/>
        </div>
      </div>
    </div>
  );
}
