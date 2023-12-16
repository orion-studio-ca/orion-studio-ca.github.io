import '../App.css'
import {useParams} from 'react-router-dom'
import data from '../data'
import Button from './Button'
import Error from '../Error'

const ListPlatforms = (props) => {
  const{curGame, className} = props

  return(
    <div className="justify-left ml-[1rem] mb-[1rem] flex" >
      {curGame.platforms.map((platform, i) =>
        <img key={i} src={`/storeicons/${data.platformList[platform.num].img}`} className="w-[2.5rem] max-w-[12%]" />
      )}
    </div>
  )
}

const GameInfo = () => {
    const {gameId} = useParams()

    const pStyle = "text-left text-white mt-[1rem] text-lg mb-[2rem] font-light mx-5 leading-5"

    const curGame = data.gamesList.find((game) => game.url === gameId)

    if(!curGame) {
      return(
        <Error manual={true} />
      )
    }
  
  return (
    <>
      <div className="w-full overflow-hidden pt-[2rem] pb-[6rem]">
        <div className="flex justify-center px-[1rem]" >
          <div className="mt-[5rem] w-[50rem] max-w-[calc(100%-2rem)] bg-gradient-to-t from-blue-900/[.2] to-blue-800/[.1] rounded-2xl border-white/[.1] border-[1px] shadow-xl">
            <img src={curGame.img} className="w-[calc(100%-2rem)] mx-[1rem] mt-[1rem] mb-[1rem] rounded-lg" />
            <ListPlatforms curGame={curGame} />

            <h3 className="text-white px-[1rem] text-3xl sm:text-4xl font-bold" >{curGame.name}</h3>
            
            <p className="h-[5rem] px-[1rem] text-white font-light leading-4 pt-[1rem]" >{curGame.description}</p>
            <h3 className="text-white px-[1rem] mb-[1rem] text-2xl sm:text-3xl font-semibold" >Download links</h3>
            {curGame.platforms.filter(platform => (!platform.info)).map((platform, i) => (
              <div key={i}>
                <h4 className="text-white px-[1rem] text-md font-light sm:text-left text-center" >Get {curGame.name}{platform.info ? ` (${platform.info})` : ""} on {data.platformList[platform.num].dim||data.platformList[platform.num].name}</h4>
                <Button noCenter={true} link={platform.url} newTab={true} >Download</Button>
              </div>
            ))}
            
            {curGame.platforms.filter(platform => (!!platform.info)).length>0 ? <h3 className="text-white px-[1rem] mb-[1rem] text-2xl sm:text-3xl font-semibold" >Other</h3> : null}
            {curGame.platforms.filter(platform => (!!platform.info)).map((platform, i) => (
              <div key={i}>
                <h4 className="text-white px-[1rem] text-md font-light sm:text-left text-center" >Get {curGame.name}{platform.info ? ` (${platform.info})` : ""} on {data.platformList[platform.num].dim||data.platformList[platform.num].name}</h4>
                <Button noCenter={true} link={platform.url} newTab={true} >Download</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GameInfo
