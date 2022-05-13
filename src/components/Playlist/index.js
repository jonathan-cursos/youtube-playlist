import { useContext } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Container, Title, PlayListContainer, DndMessage } from './styles'
import videosContext from '../../Context/videosContext'
import PlaylistCard from '../PlaylistCard'

const PlayList = ({ dragging }) => {
  const { store } = useContext(videosContext)

  return (
    <Container>
      <Title>Playlist:</Title>
      <Droppable droppableId='playlist'>
        {(provided) => {
          return (
            <PlayListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              dragging={dragging}
            >
              {store.playlistVideos.length === 0 && (
                <DndMessage>
                  Arrastra hasta aquí los videos para agregarlos a la playlist
                </DndMessage>
              )}
              {store.playlistVideos.map((item, index) => {
                return (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => {
                      return (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <PlaylistCard item={item} />
                        </li>
                      )
                    }}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </PlayListContainer>
          )
        }}
      </Droppable>
    </Container>
  )
}

export default PlayList
