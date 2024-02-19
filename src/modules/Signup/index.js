import CardTitle from 'components/cardTitle'
import CustomButton from 'components/customButton'
import PasswordInput from 'components/passwordInput'
import TextInputField from 'components/textInputField'
import Logo from "assets/icons/logo.png"
import { ReactComponent as EmailIcon } from 'assets/icons/icon-email.svg';
import { ReactComponent as NameIcon } from 'assets/icons/icon-user.svg';
import { useNavigate } from 'react-router-dom'
import backgroundImage from "assets/images/todo1.jpg"
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'


const Signup = () => {
    const navigate = useNavigate()
    const schema = object().shape({
        name: string().required('Name is required'),
        email: string().email('Invalid email').required('Email is required'),
        password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: string().min(6, 'Password must be at least 6 characters').required('Password is required')
    });
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    const onSubmit = (data) => {
        const { password, confirmPassword } = data
        if (password !== confirmPassword) {
            setPasswordMatchError(true)
        }else {
         const payload = {
            name:data.name,
            email:data.email,
            password:data.password
         }
        }
    }
    const handleConfirmPasswordChange = () => {
        if (passwordMatchError) {
            setPasswordMatchError(false)
        }
    }

    return (
        <section className="flex items-center flex-col z-50 w-full h-screen"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            <div className="card_container mt-[120px]">
                <div className="flex justify-center items-center">
                    <img style={{ width: '38px', height: '43px' }} src={Logo} alt='logo' />
                </div>
                <CardTitle
                    title="Sign up"
                    className='mb-5'
                />
                <form onSubmit={handleSubmit(onSubmit)} className="w-full" action="#">
                    <div className="mb-6">
                        <TextInputField
                            name="name"
                            style={{ backgroundColor: "white" }}
                            placeholder="Name"
                            autoComplete={"0ff"}
                            renderIcon={() => <NameIcon />}
                            register={register}
                            error={errors.name && touchedFields.name}
                        />
                    </div>
                    <div className="mb-6">
                        <TextInputField
                            name="email"
                            style={{ backgroundColor: "white" }}
                            placeholder="Email"
                            autoComplete={"0ff"}
                            renderIcon={() => <EmailIcon />}
                            register={register}
                            error={errors.email && touchedFields.email}
                        />
                    </div>
                    <div className="mb-6">
                        <PasswordInput
                            name="password"
                            placeholder="Password"
                            autoComplete={"0ff"}
                            register={register}
                            error={errors.password && touchedFields.password}
                        />
                    </div>
                    <div className="mb-10">
                        <PasswordInput
                            name="confirmPassword"
                            placeholder="Confirm [assword"
                            autoComplete={"0ff"}
                            register={register}
                            error={
                                (errors.confirmPassword && touchedFields.confirmPassword) ||
                                passwordMatchError
                            }
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    <CustomButton
                        className="mb-6"
                        label="Submit"
                        style={{ backgroundColor: '#7e22ce' }}
                    />
                </form>
                <div className="flex justify-center items-center mt-8">
                    Already have an account?
                    <span
                        className="ml-1"
                        style={{ color: '#7e22ce', cursor: 'pointer' }}
                        onClick={() => navigate('/login')}
                    > Login </span>
                </div>
            </div>
        </section>
    )
}

export default Signup