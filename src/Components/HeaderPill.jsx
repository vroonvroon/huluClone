import React from 'react'

const HeaderPillForChoosePlans = ({name}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{padding: "10px 16px", backgroundColor: '#28a868ff', color: "white", fontWeight: 'bold', fontSize: '11px', letterSpacing: '1.5px', borderRadius: '50px'}}>{name}</p>
    </div>
  )
}

export default HeaderPillForChoosePlans