import React ,{useState} from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsPersonFill }
 from 'react-icons/bs'

 import { FaCalendarAlt, FaUsers, FaPrayingHands, FaMosque, FaCreditCard, FaLanguage, FaFileAlt, FaDatabase, FaCog, FaImage } from 'react-icons/fa';

import { Link } from 'react-router-dom'

function Sidebar() {
    const [showSubItems, setShowSubItems] = useState(false);

    const toggleSubItems = () => {
      setShowSubItems(!showSubItems);
    };
  return (
    <div className='fw-bolder bg-black position-fixed sidebar-title d-flex pt-5 vh-100 text-white justify-content-between flex-column align-items-center  px-3 pt-3 pb-2'>
       
        <aside id="sidebar">
       

     
        <ul className='sidebar-list mt-3'>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <BsGrid1X2Fill className='icon'/> DB Query

                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
          <Link to="/hinducalendar" onClick={toggleSubItems}>
            <FaCalendarAlt  className='icon' /> Hindu Calendar
          </Link>
          {showSubItems && (
            <ul className="sub-items">
              <li className='sidebar-list-item p-2'>
                <Link to="/">Sub-Item 1</Link>
              </li>
              <li className='sidebar-list-item p-2'>
                <Link to="/">Sub-Item 2</Link>
              </li>
            </ul>
          )}
        </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/priests">
                    <FaUsers  className='icon'/> Priests

                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/devotees">
                    <FaPrayingHands  className='icon'/> Devotees

                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <FaMosque  className='icon'/> Temples

                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <FaCreditCard  className='icon'/> Razorpay

                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <FaLanguage  className='icon'/> Language Texts

                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <FaFileAlt  className='icon'/>App Texts


                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <FaDatabase  className='icon'/> Master Data


                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <FaCog  className='icon'/> App Meta

                </Link>
            </li>
            <li className='sidebar-list-item p-2'>
               <Link to="/">
                    <FaImage  className='icon'/> Banners and Colors

                </Link>
            </li>
        </ul>
       
    </aside>
    
    </div>  
  )
}

export default Sidebar


