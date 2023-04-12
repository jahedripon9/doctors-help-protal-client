import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
        console.log(errors)
    }

    return (
        <div className="h-[800px] flex justify-center items-center ">
            <div className='w-96 p-6 shadow-xl rounded-xl my-5'>
                <h2 className='text-xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text my-1">Name</span>
                        </label>
                        <input type='text' {...register("name",
                            {
                            required:'Name is Required!'
                            })} className="input input-bordered w-full " />
                        {errors.name && <span className='text-red-500 font-bold mt-3'>{errors.name.message}</span>}
                    </div>
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text my-1">Email</span>
                        </label>
                        <input type='email' {...register("email",
                            { required: 'Email is Required!' })} className="input input-bordered w-full " />
                        {errors.email && <span className='text-red-500 font-bold mt-3'>{errors.email.message}</span>}
                    </div>
                    <div className="form-control w-full my-5">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password",
                            {
                                required: 'Password is required!',
                                minLength: { value: 8, message:"Password must 8 characters!"}
                            })} className="input input-bordered w-full " />
                        {errors.password && <span className='text-red-500 font-bold mt-3'>{errors.password.message}</span>}
                    </div>
                    <input className='btn btn-accent w-full my-2' value='Sign Up' type="submit" />
                </form>
                <p className='text-sm my-5 text-center'>Already have an Account <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;