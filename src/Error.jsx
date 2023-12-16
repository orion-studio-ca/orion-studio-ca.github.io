import './App.css'
import Box from './components/Box'
import { useRouteError } from "react-router-dom";

const Error = (props) => {
  const {manual} = props

  const error = manual ? {statusText: "Not Found", message: "Tried to access a game that does not exist" } : useRouteError()
  
  return (
    <>
      <div className="w-full overflow-hidden pt-[4rem] pb-[6rem]">
        <Box title="An error occurred!" logo="/storeicons/error.png">
          <p className="text-center text-white mt-[1rem] text-lg font-semibold mx-2">Woah! What is going on?</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[4rem] font-light mx-2">{error.statusText || error.message}</p>
        </Box>
      </div>
    </>
  )
}

export default Error
