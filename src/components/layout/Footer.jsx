

import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#1a1a1a] '>
            <div className="app-container py-[48px] text-white flex justify-between">
                <div>
                    <h4 className='md-[20px]'>Cinemax</h4>
                    {["О нас", "Блог", "Вакансия", "Акции"].map(item => {
                        return <p className='mb [20px] ' key={item}>{item}</p>
                    })}
                </div>
                <div>
                    <h4 className='mb-[20pz]'>Помощь</h4>
                    {["Вопрочы и ответы", "Контакты"]}
                </div>
                <div className='w-[255px]'>
                    <h4 className='mb-[20px]'>Поддержка</h4>
                    <p>Мы всегда готовы вам помочь.
                        Наши операторы онлайн 24/7</p>
                        <div className='flex gap-[10px]'>
                    <div className='w-[26px] h-[26px] bg-[#EF4234] rounded-full 
                    flex justify-center items-center'>
                        <img className='w-[15px] invert ' src="https://cdn-icons-png.flaticon.com/128/5068/5068731.png" alt="" />
                    </div>
                    <div className='w-[26px] h-[26px] bg-[#EF4234] rounded-full
                    flex justify-center items-center'>
                        <img className='w-[15px] invert ' src="https://cdn-icons-png.flaticon.com/128/3916/3916611.png" alt="" />
                    </div>
                    <div className='w-[26px] h-[26px] bg-[#EF4234] rounded-full 
                    flex justify-center items-center '>
                        <img className='w-[15px] invert  ' src="https://cdn-icons-png.flaticon.com/128/3917/3917567.png" alt="" />
                    </div>
                    </div>
                    <button className=' rounded-lg bg-[#EF4234]'>Написать в чате</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer