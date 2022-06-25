import React from 'react'


function Options({ setOptionShow }) {
    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-70   flex items-center justify-center  z-50' >
                <div className='bg-white  h-72 w-72 rounded-xl '>
                    <div className='mt-3'>
                        <div className=' text-xs flex justify-center border-y-2 p-2 text-red-500  '>
                            <button className='font-bold'>Şikayet Et</button>
                        </div>
                        <div className=' text-xs flex justify-center border-b-2 p-2 text-red-500  '>
                            <button className='font-bold'>Takibi Bırak</button>
                        </div>
                        <div className=' text-xs flex justify-center border-b-2 p-2  '>
                            Gönderiye git
                        </div>
                        <div className=' text-xs flex justify-center border-b-2 p-2  '>
                            Paylaş...
                        </div>
                        <div className=' text-xs flex justify-center border-b-2 p-2  '>
                            Bağlantıyı Kopyala
                        </div>
                        <div className=' text-xs flex justify-center border-b-2 p-2  '>
                            Sitene Göm
                        </div>
                        <div className=' text-xs flex justify-center border-b-2 p-2  '>
                            <button onClick={() => { setOptionShow(false) }}>İptal</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Options