import CardTitle from "../../components/cardTitle";
import PasswordInput from "../../components/passwordInput";
import TextInputField from "../../components/textInputField";
import Logo from "assets/icons/logo.png"
import { ReactComponent as EmailIcon } from 'assets/icons/icon-email.svg';
import CustomButton from "components/customButton";
import { useNavigate } from "react-router-dom";
import backgroundImage from "assets/images/lapwith.jpg"

const Login = () => {
    const navigate = useNavigate()
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
                <form className="w-full" action="#">
                    <div className="mb-6">
                        <TextInputField
                            style={{ backgroundColor: "white" }}
                            placeholder="Email"
                            autoComplete={"0ff"}
                            renderIcon={() => <EmailIcon />}
                        />
                    </div>
                    <div className="mb-10">
                        <PasswordInput
                            placeholder="Password"
                            autoComplete={"0ff"}
                        />
                    </div>
                    <CustomButton
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
                    > Sign up</span>
                </div>
            </div>
        </section>
    );
};

export default Login;
