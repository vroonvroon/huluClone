import React from 'react'

const Details = () => {

  const badges = {
    border: '1px solid lightgrey',
    fontSize: '11px',
    letterSpacing: '0.5px',
    marginRight: '5px',
    fontWeight: '600',
    color: 'black',
    backgroundColor: '#e8e8e8',
    padding: '0px 5px 2px 5px',
    borderRadius: '4px',
  };

  return (
    <div style={{margin: '40px', height: '450px', width: '650px'}}>
        <p style={{fontSize: '17px'}}>About this Show</p>
        <p style={{fontSize: '30px', fontWeight: '600', marginBlock: '10px'}}>American Horror Story</p>
        <p style={{fontSize: '17px', color: 'grey', lineHeight: 'normal'}}>American Horror Story is an anthology horror drama series created and produced by Ryan Murphy and Brad Falchuk. The Emmy® and Golden Globe® winning franchise is produced by Twentieth Century Fox Television.</p>
        <div style={{marginBlock: '20px'}}>
        <p style={{fontSize: '17px', color: 'grey'}}><strong style={{fontSize: '16px', color: 'grey'}}>Starring:</strong>  Sarah Paulson, Alison Pill, Evan Peters, Adina Porter, Cheyenne Jackson</p>
        <p style={{fontSize: '17px', color: 'grey'}}><strong style={{fontSize: '16px', color: 'grey'}}>Creators:</strong>  Ryan Murphy, Brad Falchuk</p>
        </div>
        <p style={{fontSize: '17px', color: 'grey'}}>TVMA &bull; Drama Horror &bull; TV Series &bull; 2011</p>
        <div style={{marginTop: '10px'}}>
                <span style={badges}>5.1</span>
                <span style={badges}>DA</span>
                <span style={badges}>HD</span>
                <span style={badges}>UHD</span>
        </div>
    </div>
  )
}

export default Details