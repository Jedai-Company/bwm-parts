import Head from 'next/head'

import Footer from '../components/footer'
import HomeWrapper from '../components/HomeWrapper'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import SearchComponent from '../components/SearchComponent'
import styles from '../styles/Home.module.css'
import BmwPartCard from '../components/BmwPartsCard'

export default function Home() {
  const arr=[1,2,3,4,5,6,7,8]
  return (
   
    <div >
           <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className={styles.customHeader}>
      <img
                    src="/uploads/slider1.jpg"
               
                />

         <div className={styles.CustomNav}>
         <Navbar/>
         </div>
         <div className="custom_wrapper">
           <h1 className={styles.title}>BMW-nizi  <br/> güncəlləşdirin</h1>
         </div>

         <SearchComponent/>

        
      </div>
      <HomeWrapper/>
 <div className="custom_wrapper">


<div className={styles.homeTitle}>
    <h3>
      <span><svg width="65" height="31" viewBox="0 0 65 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 31H33L16 0H0L16 31Z" fill="#017BEA"/>
      <path d="M32 31H49L32 0H16L32 31Z" fill="#512DAB"/>
      <path d="M48 31H65L48 0H32L48 31Z" fill="#F60100"/>
      </svg>
      </span>

      <span>BMW 3-cü seriya</span>

      <span><svg width="65" height="31" viewBox="0 0 65 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0H33L16 31H0L16 0Z" fill="#017BEA"/>
      <path d="M32 0H49L32 31H16L32 0Z" fill="#512DAB"/>
      <path d="M48 0H65L48 31H32L48 0Z" fill="#F60100"/>
      </svg>
      </span>
    </h3>

    <div className={styles.LinkHome}>
               <Link href="/Katalog">
                  <a>Hamsına bax</a>
                  </Link>
    </div>
</div>
<div className={styles.katalogParent}>
  {arr.map((item)=>(
    <BmwPartCard/>
  ))}
  
</div>



 </div>



<div className={styles.katalogs}></div>
 <div className="custom_wrapper">

<div className={styles.categories}>
<div className={styles.homeTitle}>
    <h3>
      <span><svg width="65" height="31" viewBox="0 0 65 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 31H33L16 0H0L16 31Z" fill="#017BEA"/>
      <path d="M32 31H49L32 0H16L32 31Z" fill="#512DAB"/>
      <path d="M48 31H65L48 0H32L48 31Z" fill="#F60100"/>
      </svg>
      </span>

      <span>BMW 3-cü seriya</span>

      <span><svg width="65" height="31" viewBox="0 0 65 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0H33L16 31H0L16 0Z" fill="#017BEA"/>
      <path d="M32 0H49L32 31H16L32 0Z" fill="#512DAB"/>
      <path d="M48 0H65L48 31H32L48 0Z" fill="#F60100"/>
      </svg>
      </span>
    </h3>

    <div className={styles.LinkHome}>
               <Link href="/Katalog">
                  <a>Hamsına bax</a>
                  </Link>
    </div>
</div>
</div>

<div className={styles.katalogParent}>
  {arr.map((item)=>(
    <BmwPartCard/>
  ))}
  
</div>



 </div>
    <Footer/>
    </div>

   
  )
}