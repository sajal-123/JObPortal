import React from 'react'
import { FaEnvelopeOpenText ,FaRocket} from "react-icons/fa6"
function NewsLetter() {
    return (
        <div>
            {/* Fisrst part */}
            <div className=' mb-10'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText/>
                    Email me for jobs
                </h3>
                <p className=' text-primary /75 text-base mb-4'>Ut ease elumsod aute .Sit enim labore . Auth ea fugiest command es foes</p>
                <div className="w-full space-y-4" >
                    <input type="email" name='email' placeholder='name@gmail.com' className=' w-full block py-2 pl-3 border focus:outline-none' />
                    <input type="submit" name='submit' value={"Subscribe"} className=' w-full block py-2 pl-3 border focus:outline-none bg-sky-600  rounuded-sm text-white cursor-pointer font-semibold' />

                </div>
            </div>
            {/* Second Part */}
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket/>
                    Get Notices faster
                </h3>
                <p className=' text-primary /75 text-base mb-4'>Ut ease elumsod aute .Sit enim labore . Auth ea fugiest command es foes</p>
                <div className="w-full space-y-4" >                    <input type="submit" name='submit' value={"Upload Your resume"} className=' w-full block py-2 pl-3 border focus:outline-none bg-sky-600  rounuded-sm text-white cursor-pointer font-semibold' />

                </div>
            </div>

        </div>
    )
}

export default NewsLetter
