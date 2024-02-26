import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CardTitle from "components/cardTitle";
import PasswordInput from "components/passwordInput";
import TextInputField from "components/textInputField";
import ErrorMessage from 'components/formErrorMessage';
import CustomButton from "components/customButton";
import Logo from "assets/icons/logo.png"
import { ReactComponent as EmailIcon } from 'assets/icons/icon-email.svg';
import { useNavigate } from "react-router-dom";
import backgroundImage from "assets/images/lapwith.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from 'services/authentication';
import { setAuthError } from 'reduxStore/slices/login';
import { useState } from 'react';
import { isEmpty } from 'utils/utils';

const Login = () => {

    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const schema = object().shape({
        email: string().email('Invalid email').required('Email is required'),
        password: string().required('Password is required'),
    });
    const {authError} = useSelector((state)=>state.auth)

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const successCb = () => {
        setIsLoading(false)
        navigate('/dashboard')
    }
    const failedCb = (message) => {
        setIsLoading(false)
        dispatch(setAuthError(message))
    }

    const onSubmit = (data) => {
        setIsLoading(true)
        dispatch(setAuthError(''))
        dispatch(postLogin(data, successCb, failedCb))
    }

    return (
        <section
            className="flex items-center flex-col z-50 w-full h-screen"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="card_container mt-[120px]">
                <div className="flex justify-center items-center">
                    <img style={{ width: '38px', height: '43px' }} src={Logo} alt='logo' />
                </div>
                <CardTitle
                    title="Login to Taskify"
                    className='mb-10'
                />
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <ErrorMessage
                        containerClassName="flex justify-center"
                        style={{top:'-33px',fontSize:'16px'}}
                        errorMessage={!isEmpty(authError) ? authError : ""}
                        showMessage={true}
                    />
                    <div className="mb-6">
                        <TextInputField
                            name="email"
                            style={{ backgroundColor: "white" }}
                            placeholder="Email"
                            autoComplete={"0ff"}
                            register={register}
                            renderIcon={() => <EmailIcon />}
                            error={errors?.email && touchedFields?.email}
                        />
                        <ErrorMessage
                            errorMessage={errors?.email?.message}
                            showMessage={errors?.email && touchedFields?.email}
                        />
                    </div>
                    <div className="mb-10">
                        <PasswordInput
                            name="password"
                            placeholder="Password"
                            autoComplete={"0ff"}
                            register={register}
                            error={errors?.password && touchedFields?.password}
                        />
                        <ErrorMessage
                            errorMessage={errors?.password?.message}
                            showMessage={errors?.password && touchedFields?.password}
                        />
                    </div>
                    <CustomButton
                        type="submit"
                        className="mb-6"
                        label="Submit"
                        style={{ backgroundColor: '#7e22ce' }}
                        isLoading={isLoading}
                    />
                </form>
                <div
                    className="flex justify-end items-center"
                    style={{ color: '#7e22ce', cursor: 'pointer' }}
                >
                    Forgot your password?
                </div>
                <div className="flex justify-center items-center mt-8">
                    Don't have an account?
                    <span
                        className="ml-1"
                        style={{ color: '#7e22ce', cursor: 'pointer' }}
                        onClick={() => navigate('/signup')}
                    > Signup</span>
                </div>
            </div>
        </section>
    );
};

export default Login;
