import { ReactComponent as EmailIcon } from 'assets/icons/icon-email.svg';
import { ReactComponent as NameIcon } from 'assets/icons/icon-user.svg';
import CardTitle from 'components/cardTitle'
import CustomButton from 'components/customButton'
import PasswordInput from 'components/passwordInput'
import TextInputField from 'components/textInputField'
import FiedErrorMessage from 'components/formErrorMessage'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from "assets/icons/logo.png"
import backgroundImage from "assets/images/todo1.jpg"

const Signup = () => {
    const navigate = useNavigate()
    const schema = object().shape({
        name: string().required('Name is required'),
        email: string().email('Invalid email').required('Email is required'),
        password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: string()
            .oneOf([ref('password'), null], 'Passwords must match')
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log(data)
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
                    title="Signup"
                    className='mb-5'
                />
                <form onSubmit={handleSubmit(onSubmit)} className="w-full" action="#">
                    <div className="mb-7">
                        <TextInputField
                            name="name"
                            style={{ backgroundColor: "white" }}
                            placeholder="Name"
                            autoComplete={"0ff"}
                            renderIcon={() => <NameIcon />}
                            register={register}
                            error={errors?.name && touchedFields?.name}
                        />
                        <FiedErrorMessage
                            errorMessage={errors?.name?.message}
                            showMessage={errors?.name && touchedFields?.name}
                        />
                    </div>
                    <div className="mb-7">
                        <TextInputField
                            name="email"
                            style={{ backgroundColor: "white" }}
                            placeholder="Email"
                            autoComplete={"0ff"}
                            renderIcon={() => <EmailIcon />}
                            register={register}
                            error={errors.email && touchedFields.email}
                        />
                        <FiedErrorMessage
                            errorMessage={errors?.email?.message}
                            showMessage={errors?.email && touchedFields?.email}
                        />
                    </div>
                    <div className="mb-7">
                        <PasswordInput
                            name="password"
                            placeholder="Password"
                            autoComplete={"0ff"}
                            register={register}
                            error={errors?.password && touchedFields?.password}
                        />
                        <FiedErrorMessage
                            errorMessage={errors?.password?.message}
                            showMessage={errors?.password && touchedFields?.password}
                        />
                    </div>
                    <div className="mb-10">
                        <PasswordInput
                            name="confirmPassword"
                            placeholder="Confirm password"
                            autoComplete={"0ff"}
                            register={register}
                            error={
                                errors?.confirmPassword && touchedFields?.confirmPassword
                            }
                        />
                        <FiedErrorMessage
                            showMessage={errors?.confirmPassword && touchedFields?.confirmPassword}
                            errorMessage={errors?.confirmPassword?.message}
                        />
                    </div>
                    <CustomButton
                        type="submit"
                        className="mb-7"
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