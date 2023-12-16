import './App.css'
import Box from './components/Box'
import Socials from './components/Socials'
import data from './data'

const About = () => {
    const emailContact = data.socials.find((social) => social.name.toLowerCase()==="email")

    return(<>
      <div className="w-full overflow-hidden">
        <h2 className="text-white text-center mt-[12rem] text-5xl">About</h2>
        
        <div className="w-full overflow-hidden" >
        <Box title="About Us" logo="/storeicons/arcade.png">
          <p className="text-center text-white mt-[3rem] text-lg font-semibold mx-4">We are an indie game development studio based out of Ottawa, Canada.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">Our mission is to bring the most enjoyable and highest quality game experiences to players around the world. We thrive to create games that everyone can enjoy, and aim to push the bounds of the industry by creating new and innovative concepts.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">Orion Studios Interactive was founded by Faraaz Jan in 2021 as a commitment to trying to build games that anyone can pick up and play.</p>
        </Box>
        <Box title="Get in Touch With Us" logo="/storeicons/call.png" >
          <section id="contact" className="hidden" />
          <p className="text-center text-white mt-[3rem] text-lg font-semibold mx-4">Need to contact us?</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">Our mission is to bring the most enjoyable and highest quality game experiences to players around the world. We thrive to create games that everyone can enjoy, and aim to push the bounds of the industry by creating new and innovative concepts.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">Send us an email at the address below or visit our official social media accounts to get in touch with us!</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-md mx-4 hover:underline"><a href={emailContact.url}>{emailContact.address}</a></p>
          <Socials center={true} />
        </Box>
        </div>
      </div>
    </>)
}

export default About
