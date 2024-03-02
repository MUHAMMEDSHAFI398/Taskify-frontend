/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { verifyEmail } from 'services/authentication'

const EmailVerificationLoader = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const { userId, link } = useParams()

    const successCb = () => {
        setIsLoading(false)
        navigate('/dashboard')
    }

    const failedCb = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        const data = { userId, link }
        dispatch(verifyEmail(data, successCb, failedCb))
    }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center' >
            <ClipLoader
                color='#7e22ce'
                size={40}
                loading={isLoading}
            />
        </div>
    )
}

export default EmailVerificationLoader