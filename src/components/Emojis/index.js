import './index.css'

const Emojis = props => {
  const {eachObjectProp, changeUIfuncProp} = props
  const {name, imageUrl} = eachObjectProp
  console.log(name)
  console.log(imageUrl)

  const clickedOnEmoji = () => {
    changeUIfuncProp()
  }

  return (
    <li className="liContainer">
      <img
        src={imageUrl}
        alt={name}
        className="imgEmoji"
        onClick={clickedOnEmoji}
      />
      <p>{name}</p>
    </li>
  )
}

export default Emojis
