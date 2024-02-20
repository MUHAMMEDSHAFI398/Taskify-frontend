import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CardTitle from "../../components/cardTitle";
import PasswordInput from "../../components/passwordInput";
import TextInputField from "../../components/textInputField";
import FiedErrorMessage from "components/formErrorMessage";
import CustomButton from "components/customButton";
import Logo from "assets/icons/logo.png"
import { ReactComponent as EmailIcon } from 'assets/icons/icon-email.svg';
import { useNavigate } from "react-router-dom";
import backgroundImage from "assets/images/lapwith.jpg"

const Login = () => {
    const navigate = useNavigate()
    const schema = object().shape({
        name: string().required('Name is required'),
        email: string().email('Invalid email').required('Email is required'),
        password: string().required('Password is required'),
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
                    className='mb-5'
                />
                <form onSubmit={handleSubmit(onSubmit)} className="w-full" action="#">
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
                        <FiedErrorMessage
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
                        <FiedErrorMessage
                            errorMessage={errors?.password?.message}
                            showMessage={errors?.password && touchedFields?.password}
                        />
                    </div>
                    <CustomButton
                        type="submit"
                        className="mb-6"
                        label="Submit"
                        style={{ backgroundColor: '#7e22ce' }}
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
