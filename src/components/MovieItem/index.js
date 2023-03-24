import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {image, videoURL} = props
  const overlayStyle = {
    backgroundColor: '#ffff',
    margin: '250px',
    marginLeft: '550px',
    width: '800px',
  }

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={image} className="movie-image" alt="thumbnail" />
          </button>
        }
        overlayStyle={overlayStyle}
      >
        {close => (
          <>
            <button
              type="button"
              className="closebtn"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="cross-icon" />
            </button>
            <div>
              <ReactPlayer url={videoURL} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
