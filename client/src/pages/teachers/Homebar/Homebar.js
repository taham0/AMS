import React from 'react'
import './Homebar.css'
import {useNavigate} from 'react-router-dom'
import {People, MenuBook, Announcement, Help} from '@material-ui/icons/';
import axios from 'axios';


const Homebar = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true

    const goToWelcome = async (ev) => {
        ev.preventDefault();
        navigate('#')
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/teacher/courses')
            navigate('/teacher/courses', {state: {
                courses: res.data.courses
            }})
        } catch (err) {
            console.log(err)
        }
    }

    const goToAnnouncements = async (ev) => {
        ev.preventDefault();
        const res = await axios.get('http://localhost:8000/getAnnouncements')
        navigate('/admin/announcements', {state: {
            announcements: res.data.announcements
        }});
    }

    const goToHelp = async (ev) => {
        ev.preventDefault();
        navigate('/teacher/help');
    }

    const goToCalendar = async (ev) => {
        ev.preventDefault();
        navigate('/teacher/calendar')
    }

    return(
        <div className='bar2'>
            <ul className='bar-container2'>
                <li className='item2'>
                    <People className='icon2'></People>
                    <a className='click-items2' onClick={goToWelcome}>Home</a>
                </li>
                <li className='item2'>
                    <MenuBook className='icon2'></MenuBook>
                    <a className='click-items2' onClick={goToCourses}>Courses</a>
                </li>
                <li className='item2'>
                    <Announcement className='icon2'></Announcement>
                    <a className='click-items2' onClick={goToAnnouncements}>Announcements</a>
                </li>
                <li className='item2'>
                    <Help className='icon2'></Help>
                    <a className='click-items2' onClick={goToHelp}>Help</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar