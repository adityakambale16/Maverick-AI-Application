import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const formSubmit = () => {
        alert('Login Successful!')
        navigate('/home')
        reset();
    }

    return (
        <div className="auth-page">
            <form className="form-card auth-card" onSubmit={handleSubmit(formSubmit)}>
                <span className="welcome-logo"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                <h2>Welcome back</h2>
                <p className="auth-subtitle">Log in to continue to Maverick AI</p>

                <div className="field">
                    <input
                        type="email"
                        placeholder="Email address"
                        autoFocus
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: 'Please enter a valid email address'
                            }
                        })}
                    />
                    {errors.email && <p className="field-error">{errors.email.message}</p>}
                </div>

                <div className="field password-field">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters'
                            }
                        })}
                    />
                    <button
                        type="button"
                        className="show-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                    {errors.password && <p className="field-error">{errors.password.message}</p>}
                </div>

                <button type="submit" className="primary-btn full-width">Log in</button>

                <p className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
                <p className="auth-footer">
                    Just looking around? <Link to="/home">Continue as guest</Link>
                </p>

            </form>
        </div>
    )
}

export default Login