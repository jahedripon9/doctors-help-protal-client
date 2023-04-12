import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className="h-[800px] flex justify-center items-center ">
            <div className='w-96 p-6 shadow-xl rounded-xl my-5'>
                <h2 className='text-xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text my-1">Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500 font-bold my-1' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full my-5">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", { required: "Password  is required", minLength: { value: 6, message: "Password must be 6 characters!" } })} className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500 font-bold my-1' role="alert">{errors.password?.message}</p>}
                        <span className="label-text my-3">Forget Password?</span>

                    </div>
                    <input className='btn btn-accent w-full my-2' value='Login' type="submit" />
                </form>
                <p className='text-sm my-5 text-center'>New to Doctors Help Portal <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default Login;