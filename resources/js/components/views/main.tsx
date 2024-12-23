import React from 'react';
import StudentForm from './forms/StudentForm';  
import StudentFormList from './forms/studentformlist/StudentFormList';

const main = () => {
  return (
    <div className='m-40'>
        <div className='flex gap-20 justify-evenly'>
            <div className='w-6/12'>
                <div className='mb-4'>
                    <div className='text-4xl font-semibold tracking-wider text-black-300 mb-1'>
                        Greeting Students!
                    </div>
                    <div className='text-sm tracking-wider leading-5 text-black-300/50 font-lighter'>
                        Welcome back to CSU students. Balik kalbaryo.
                    </div>
                </div>
                <StudentForm />   
                </div> 
                <div className='w-6/1'>
                <StudentFormList />
                </div>
            </div>
        </div>
  );
};

export default main