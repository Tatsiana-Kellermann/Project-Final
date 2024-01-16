import React from 'react';
import s from './style.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.map}>
                    <iframe 
                        title="tel_ran" 
                        frameBorder="0" 
                        width="100%" 
                        height="400px" 
                        src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010785%20Berlin+(tel_ran)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    />
                </div>
                <div className={s.contacts}>
                    <div className={s.contacts_item}>
                        <PhoneIcon sx={{fontSize: 40, color: '#598a59'}}/>
                        <a className={s.link} href="tel:+499999999999">+49 999 999 99 99</a>
                    </div>
                    <div className={s.contacts_item}>
                        <LocationOnIcon sx={{fontSize: 40, color: '#598a59'}}/>
                        <Link className={s.link} target="_blank" to='https://www.google.com/search?q=telranDE'> 
                            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
                        </Link>
                    </div>
                    <div className={s.contacts_item}>
                        <AccessTimeIcon sx={{fontSize: 40, color: '#598a59'}}/>
                        <p> Working Hours: 24 hours a day</p>
                    </div>
                    <div className={s.soc_networks}>
                        <Link className={s.icon} to={'https://www.instagram.com/telran.de/'} target="_blank">
                            <InstagramIcon sx={{fontSize: 30, color: 'rgb(116, 116, 116)'}}/>
                        </Link>
                        <Link className={s.icon} to={'https://www.facebook.com/telranDE/'} target="_blank">
                            <FacebookIcon sx={{fontSize: 30, color: 'rgb(116, 116, 116)'}}/>
                        </Link>
                        <Link className={s.icon} to={'/'} target="_blank">
                            <WhatsAppIcon sx={{fontSize: 30, color: 'rgb(116, 116, 116)'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;