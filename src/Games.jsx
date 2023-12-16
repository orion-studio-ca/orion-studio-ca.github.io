import './App.css'
import GameDisplay from './components/GameDisplay'
import data from './data'



const Games = () => (
    <>
      <div className="w-full overflow-hidden">
        <h2 className="text-white text-center mt-[12rem] text-5xl">Games</h2>
        
        <div className="flex justify-center mt-[1rem] sm:mt-[2rem]" >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[90%]" >
          {data.gamesList.map((game, i) => 
            <GameDisplay key={i} img={`/games/${game.img}`} title={game.name} urlTo={`/games/${game.url}`} description={game.description} />
          )}
        </div>
        </div>
      </div>
    </>
)

export default Games
