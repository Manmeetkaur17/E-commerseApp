import Card from './Card';
import './Cards.css';
import Navbar from '../Navbar';



function CardsContent() {
    return (
        <>
        <Navbar />

        <h1>Best Selling Electronics</h1>
   
   <div className="container">
   <Card description="bAss biRd Ultra Pods Pro Bluetooth 5.3 TWS Earbuds, Display, Gaming Mode, AI ENC, Fast Charging Type-C, 13mm Bass Drivers, Transparent Design Premium Sound Under 1000 Latest 2024 Wireless (Light Blue)" price= {599} image="https://m.media-amazon.com/images/I/71tcxRiM76L._AC_SY200_.jpg"/>
   <Card description="M1 Fitness Band Smart Watch for Men, Women, Boys, Girls, Kids Single Touch, Water Resistant, Workout Modes, Sports Smartwatch Black I [Charger NOT Included, Charges VIA Direct Plug in]" price= {449} image="https://m.media-amazon.com/images/I/514CfZOJ5rL._SX300_SY300_QL70_FMwebp_.jpg" />
   <Card description="Offbeat - Atom Dual Bluetooth 5.1+5.1 & 2.4Ghz Wireless, Type-C Rechargeable Silent Click Mouse, Triple Device connectivity Windows, Mac, iOS, Android" price= {50} image='https://m.media-amazon.com/images/I/311n3ODdI+L._SX300_SY300_.jpg' />
   <Card description="Toreto Beam Pro 16W Bluetooth Sound bar, 2000Mah Battery, 2.0 Channel with 52mm Drivers, Multicolor LED Lights with TWS, AUX, Bluetooth and USB, FM Radio (Blue)" price={999} image='https://m.media-amazon.com/images/I/318lgsWavnL._SX300_SY300_QL70_FMwebp_.jpg' />

   <Card description="Fire-Boltt Rise Smart Watch, 1.85' HD Display, Metal Body with Bluetooth Calling, Rotating Crown, AI Voice Assistant, 120 Sports Modes, Neon UI, SpO2 & Heart Rate Monitoring (Black)" price={1599} image='https://m.media-amazon.com/images/I/41wiAeSSN0L._SX300_SY300_QL70_FMwebp_.jpg'/>
   <Card description="Noise ColorFit Pulse 3 with 1.96' Biggest Display Bluetooth Calling Smart Watch, Premium Build, Auto Sport Detection & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black" price={1399} image='https://m.media-amazon.com/images/I/61DEUVd9PwL._SX569_.jpg'/>
   <Card description="Logitech H111 Wired On Ear Headphones With Mic Black" price={659} image='https://m.media-amazon.com/images/I/31puHGasbOL._SX300_SY300_QL70_FMwebp_.jpg'/>
   <Card description="boAt Airdopes 141 ANC(~32dB), 50ms Low Latency, 4Mics ENx,42Hrs Battery, Fast Charge,IPX5, v5.3 Bluetooth TWS in Ear Earbuds Wireless Earphones with mic (Gunmetal Black)
Visit the boAt Store" price={1299} image='https://m.media-amazon.com/images/I/41qU4z3nGXL._SX300_SY300_QL70_FMwebp_.jpg'/>

   </div>

   <div className="footer">
            <h4>@Manmeet kaur</h4>
    </div>


        </>
    );
}

export default CardsContent;