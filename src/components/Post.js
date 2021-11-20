import React from 'react';
import verifiedIcon from '../icon/verified-icon.svg';
import arrowDown from '../icon/down-arrow.svg';
import commentIcon from '../icon/comment.svg';
import likeIcon from '../icon/like.svg';
import repostIcon from '../icon/repost.svg';
import Activity from './Activity';

const icons = [
    {
        type: 'comment',
        img: commentIcon,
    },
    {
        type: 'likes',
        img: likeIcon,
    },
    {
        type: 'repost',
        img: repostIcon,
    }
]
const activityData = icons.map((el, i) => <Activity img={el.img} key={i}/>)

function Post(props) {
    return (
        <div className = 'post'>
            <div className = 'post-content'>
                <div className = 'user-block'>
                    <div className = 'user-block-image'>
                        <img src = {props.author.photo} alt = 'user'/>
                    </div>
                    <div className = 'user-block-info'>
                        <h1 className = 'user-block-info-name'>{props.author.name}</h1>
                        <img src = {verifiedIcon} alt = 'verified_icon'className = 'verified'/>
                        <p>{`${props.author.nickname} · ${props.date}`}</p>
                        <img src = {arrowDown} alt = 'arrow' className = 'arrow-icon'/>
                    </div>
                </div>
                <div className = 'post-info'>
                    <p className = 'post-info-text'>{props.content}</p>
                    <img src = {props.image} alt = 'content_image' />
                </div>
                <div className ='activity-data'>{activityData}</div>
            </div>
        </div>
    ); 
};
export default Post;