import {RxStar, RxStarFilled, RxChatBubble, RxSymbol, RxShare2} from 'react-icons/rx';
import './drop.css';

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

export default function Drop({detail}) {
  const elapsed = (Date.now() - new Date(detail.time)) / 1000;
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
        <div>
          <RxChatBubble/>
          <p>{detail.reactions.replies.length}</p>
        </div>
        <div>
          <RxSymbol/>
          <p>{detail.reactions.repostNum}</p>
        </div>
        <div>
          {detail.reactions.liked ? <RxStarFilled/> : <RxStar/>}
          <p>{detail.reactions.likeNum}</p>
        </div>
        <div>
          <RxShare2/>
        </div>
      </div>
    </div>
  );
}
