import './index.css'

const EventItem = props => {
  const {eachEvent, clickingImage, isActive} = props
  const {name, location, imageUrl, id} = eachEvent
  const activeClassName = isActive ? 'active' : ''
  const onClickingImg = () => {
    clickingImage(id)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onClickingImg} className="image-btn">
        <img
          src={imageUrl}
          alt="event"
          className={`event-img ${activeClassName}`}
        />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
