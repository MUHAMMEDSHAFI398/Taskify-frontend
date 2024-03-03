import Logo from "assets/icons/logo.png"
import CardTitle from 'components/cardTitle'
import CustomButton from 'components/customButton'
import useToaster from "components/snackbar"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { reSendEmail } from "services/authentication"

const EmailVerification = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [showSendMsg, setShowSendMsg] = useState(false)
    const dispatch = useDispatch()
    const { successToast, errorToast } = useToaster()

    const successCb = () => {
        successToast("Resent email successfully")
        setIsLoading(false)
        setShowSendMsg(true)
    }

    const failedCb = () => {
        errorToast("There is some error in sending email")
        setIsLoading(false)
        setShowSendMsg(false)
    }

    const handleClick = () => {
        setIsLoading(true)
        dispatch(reSendEmail(successCb, failedCb))
    }

    return (
        <section className='flex justify-center'>
            <div className='card_container mt-[120px]'>
                <div className="flex justify-center items-center">
                    <img style={{ width: '38px', height: '43px' }} src={Logo} alt='logo' />
                </div>
                <CardTitle
                    title="Check your email"
                    className='mt-5'
                />
                <div className='flex flex-col justify-center items-center'>
                    <p className='mt-3'>We have sent a link to your email{' '}
                        <span style={{ color: '#7e22ce' }}>
                            shafi+19999999@recksys.com
                        </span>
                    </p>
                    <p className='mt-3'>
                        Click the link to verify your email address
                    </p>
                    {
                        !showSendMsg ? (
                            <>
                                <p className='mt-3'>Didn't get the email?</p>
                                <CustomButton
                                    onClick={handleClick}
                                    type="submit"
                                    className="mt-6"
                                    label="Resend email"
                                    style={{ backgroundColor: '#7e22ce' }}
                                    isLoading={isLoading}
                                />
                            </>
                        ) : (
                            <div className="mt-3">Successfully send email</div>
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default EmailVerification