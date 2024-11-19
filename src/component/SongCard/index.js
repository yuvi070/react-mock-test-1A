import {AiOutlineDelete} from 'react-icons/ai'

import {
  Div1,
  Div2,
  Div3,
  Div4,
  SongImage,
  SongHeading,
  SongPara,
  SongDuration,
  DeleteButton,
} from './styled'

const SongCard = props => {
  const {each, onClickDeleteButton} = props
  const onClickDelete = () => {
    onClickDeleteButton(each.id)
  }
  return (
    <Div1>
      <Div2>
        <SongImage src={each.imageUrl} alt="" />
        <Div4>
          <SongHeading>{each.name}</SongHeading>
          <SongPara>{each.genre}</SongPara>
        </Div4>
      </Div2>
      <Div3>
        <SongDuration>{each.duration}</SongDuration>
        <DeleteButton type="button" onClick={onClickDelete}>
          <AiOutlineDelete />
        </DeleteButton>
      </Div3>
    </Div1>
  )
}

export default SongCard
