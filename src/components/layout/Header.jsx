import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import UserIcon from '../../assets/user.svg';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    
    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };
    
    return (
        <div className="app-container bg-black text-white items-center flex justify-between pt-[40px]">
            <div className='flex items-center gap-[70px]'>
                <img src={Logo} alt="Logo" />

                <NavLink to={"/"}>{t('home')}</NavLink> {/* Используйте t для перевода */}
            </div>

            <div className="flex items-center gap-[70px]">
                <select
                    onChange={handleChangeLanguage}
                    value={i18n.language} // Используйте value для управления состоянием
                    style={{ color: "white", backgroundColor: "black" }}
                >
                    <option value="ru" style={{ color: "white" }}>RU</option>
                    <option value="en" style={{ color: "white" }}>EN</option>
                </select>

                <img src={UserIcon} alt="User Icon" />
            </div>
        </div>
    );
}

export default Header;
