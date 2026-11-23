import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm();

    // watch gives the current value of the password field,
    // so we can compare it with confirm password
    const password = watch('password');

    const formSubmit = (data) => {
        alert('Account created for ' + data.name + '!')
        navigate('/login')
        reset();
    }

    return (
        <div className="auth-page">
            <form className="form-card auth-card" onSubmit={handleSubmit(formSubmit)}>
                <span className="welcome-logo"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                <h2>Create your account</h2>
                <p className="auth-subtitle">Sign up to start chatting with Maverick AI</p>

                <div className="field">
                    <input
                        type="text"
                        placeholder="Full name"
                        autoFocus
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name must be at least 3 characters'
                            }
                        })}
                    />
                    {errors.name && <p className="field-error">{errors.name.message}</p>}
                </div>

                <div className="field">
                    <input
                        type="email"
                        placeholder="Email address"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Za-z0-9]+@gmail\.com$/,
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

                <div className="field">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm password"
                        {...register('confirmPassword', {
                            required: 'Please confirm your password',
                            validate: (value) =>
                                value === password || 'Passwords do not match'
                        })}
                    />
                    {errors.confirmPassword && <p className="field-error">{errors.confirmPassword.message}</p>}
                </div>

                <button type="submit" className="primary-btn full-width">Sign up</button>

                <p className="auth-footer">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup