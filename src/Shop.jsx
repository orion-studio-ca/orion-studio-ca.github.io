import './App.css'
import ShopItemDisplay from './components/ShopItemDisplay'
import data from './data'



const Shop = () => (
    <>
      <div className="w-full overflow-hidden">
        <h2 className="text-white text-center mt-[12rem] text-5xl">Merchandise</h2>
        
        <div className="flex justify-center mt-[1rem] sm:mt-[2rem]" >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%]" >
          {data.shopItems.map((item, i) => 
            <ShopItemDisplay key={i} img={`/shop/${item.img}`} title={item.name} urlTo={item.url} price={`${item.unit}${item.price.toFixed(2)}${item.max ? ` - ${item.unit}${item.max.toFixed(2)}` : "" }`} />
          )}
        </div>
        </div>
      </div>
    </>
)

export default Shop
