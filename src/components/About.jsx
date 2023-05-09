import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>

                </div>

                <p className='text-xl mt-20'>
                    Yazılım alanı ilgi duyduğum alandı. Bu yüzden bu alanda ilerleme ve kendimi geliştirme kararı aldım.
                    Bu nedenle front-end React Developer alanında 6 ay önce Udemig şirketinden eğitim almaya başladım. React, redux, toolkit typescript kullanarak birçok projede çalışma fırsatım oldu.
                </p>
                <br />

                <p className='text-xl'>
                    Hayat boyu yeni şeyler öğrenmeye ve kendimi geliştirmeye önem veren biriyim takım çalışmalarının bilgi alışverişi açısından zenginleştirdiğini, her zaman güncel tuttuğuna inanıyorum ayrıca takım çalışmalarına uygun olduğumu düşünüyorum.


                </p>
            </div>

        </div>
    )
}

export default About