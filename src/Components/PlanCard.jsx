import React from 'react'
import HeaderPillForChoosePlans from './HeaderPill'
import styles from './PlanCard.module.css'
import { Link } from 'react-router-dom'


const PlanCard = ({name, img, inc, price, desc, children}) => {
    const span = {
        fontSize: '36px', 
        fontWeight: '700'
    }

  return (
    <>
    <div className='position-relative'>
      <div className="card plan-cards pt-4 pb-5 px-4 w-100 min-h-100" style={{border: 'none'}}>
        <div className="hulu-noads">
            <div className="innerhulu-noads">
              <div className={price < '$15' ? styles.headerPillShow : styles.headerPillNoshow}>
               {name.includes('Disney Bundle') ? <HeaderPillForChoosePlans name='SAVE 44% ($11.98/MO. OFF)*'></HeaderPillForChoosePlans> :  <HeaderPillForChoosePlans name='MOST POPULAR'></HeaderPillForChoosePlans>}
              </div>
  
                <p style={{fontSize: '21px', fontWeight: 800, marginBlock: '10px'}}>{name}</p>
                {name.includes('Disney Bundle') ? <img src={img} alt="" /> : <p style={{color: '#29a869', fontSize: '17px', fontWeight: '600'}}>{inc}</p>}
                <p style={{color: '#272c35', fontSize: '20px', fontWeight: '700', margin: '10px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><span style={span}>{price}</span> / month</p>

                <p style={{color: '#8c8aaa', fontSize: '15px',  display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '40px', height: '90px'}}>{desc}</p>

                <button style={{padding: '12px', color: 'white', letterSpacing: '1.5px', width: '100%', fontSize: '16px', fontWeight: '700', backgroundColor: '#272c35', border: '2px solid #272c35', borderRadius: '5px', marginBlock: '26px'}}>SELECT</button>

                {name.includes('Disney Bundle') && <div className={styles.link}>
                  <Link to=''>Learn More</Link>
                </div>}
            </div>
        </div>
      </div>
        <span style={{position: 'absolute', 
                      width: '100%',
                      backgroundColor: '#28a868',
                      height: '5px',
                      top: '0px',
                      display: 'flex'
                    }}>  
        </span>
    </div>

    
    </>
  )
}

export default PlanCard