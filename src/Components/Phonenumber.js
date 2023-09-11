import React,{useState} from 'react'
import phone from "../assets/phone.png";
import question from '../assets/question.svg'


const Phonenumber = () => {
  const [selectedValue, setSelectedValue] = useState('IN');

  return (
    <div>
      <table style={{width:'320px', Height:'72px'}}>
        <tr>
            <td><label style={{width:'98px', Height:'20px', color:'grey'}}>Phonenumber</label></td>           
        </tr>
        <tr>
            <td style={{border:'2px solid pink', paddingBottom:'1px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select style={{ width: '61px', height: '44px', justify: 'space-between', padding: '10px 10px 10px 14px' }} value={selectedValue}>
                <option value="IN">IN</option>
              </select>
              <input
                type="text"
                style={{ width: '209px', height: '24px', color: 'grey', gap: '8px' }}
                placeholder="+91 00000-00000" />
              <img src={phone} alt="" style={{ width: '20px', height: '20px', marginLeft: 'justify' }} />
            </div>
            </td>
            </tr>
            <tr>
            <td >
              <img src={question} alt="" style={{ width: '10.5px', height: '10.5px', top:'1.75px', left:'1.75px', border:'2px' }} />
            </td>
            <td >
            <label style={{width:'292px', Height:'20px', color:'red', justify:'start', marginLeft:'1px', textAlign:'left'}}>Helping text for user</label>
            </td>
            </tr>           
        
      </table>
    </div>
  )
}

export default Phonenumber
