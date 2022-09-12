import FriendListItem from './FriendListItem/FriendListItem'
import css from './FriendList.module.css'
import PropTypes from 'prop-types'

export default function FriendList({friends}) {
    const elements = friends.map(({ avatar, name, isOnline, id }) =>
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} /> )
  return (
      <ul className={css.friend__list}>
         { elements }
    </ul>
  )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}