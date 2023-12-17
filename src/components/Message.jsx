import '../App.css'
import Box from './Box'
import data from '../data'

const Message = (props) => {
    const {num, title} = props

    const pStyle = "text-left text-white mt-[1rem] text-lg mb-[2rem] font-light mx-5 leading-5"
  
  return (
    <>
      <div className="w-full overflow-hidden pt-[2rem] pb-[6rem]">
        <Box title={title} logo="/storeicons/info.webp">
          {data.servedMessages[num].map((msg, i) => <p key={i} className={pStyle}>{msg}</p>)}
        </Box>
      </div>
    </>
  )
}

export default Message
