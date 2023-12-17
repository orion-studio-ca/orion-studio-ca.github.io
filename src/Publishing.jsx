import './App.css'
import Box from './components/Box'
import Button from './components/Button'

const Publishing = () => {
    return(<>
      <div className="w-full overflow-hidden">
        <h2 className="text-white text-center mt-[12rem] text-5xl">Publishing Services</h2>
        
        <div className="w-full overflow-hidden" >
        <Box title="Publishing Services" logo="/storeicons/paint.webp">
          <p className="text-center text-white mt-[3rem] text-lg font-semibold mx-4">At Orion Studios, we pride ourselves on being able to deliver top-quality games and content to a wide array of marketplaces and store fronts.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">Thats exactly why we will now offer publishing services. Contact us with a demo of your game as well as the targeted platforms, and other information on your project, and we may publish it for you <a className="font-semibold" >at no other cost</a>*. Published games will receive a 95/5 revenue share, with you keeping the majority of earnings that your game makes.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">We offer publishing to the Google Play Store, the Microsoft and Xbox Store, Amazon Appstore, and Samsung Galaxy Store as starting platforms, and also offer Steam and iOS App Store publishing at a small additional cost, which is recuperated once our revenue share reaches the specific platform costs!</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">In addition, we can offer our own services to aid in the porting stage of your project if you provide us more information on the tech behind your game.</p>
          <p className="text-center text-white mt-[1rem] text-lg mb-[2rem] font-light mx-4">*Publishing services to some platforms may require additional fees or licenses</p>
          <Button link="/about#contact" >Contact us</Button>
        </Box>
        </div>
      </div>
    </>)
}

export default Publishing