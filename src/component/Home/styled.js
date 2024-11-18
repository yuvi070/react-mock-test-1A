import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  background-color: #cbd5e1;
  height: 100vh;
  display: flex;
`
export const BannerSection = styled.div`
  margin-top: 10px;
  height: 35%;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 50px;
  background-size: cover;
  color: #ffffff;
  line-height: 5px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
`
export const HomeDiv = styled.div`
  height: 100vh;
  width: 60%;
  margin: auto;
`

export const SongsSection = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  height: 63.5%;
  background-color: #152850;
`
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Input = styled.input`
  width: 85%;
  height: 100%;
  outline: none;
  border: 0px;
  color: white;
  padding-left: 10px;
  background-color: transparent;
`
export const InputDiv = styled.div`
  width: 28%;
  border: 1px solid #cbd5e1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  background-color: transparent;
  border-radius: 5px;
`
export const SearchButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  color: #cbd5e1;
`
export const Heading = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
`
export const SongsDiv = styled.div`
  height: 80%;
  overflow-y: auto;
`
