import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
     
        post(route('login'));
    };

    return (
       <div className='login'>
          <div className="logo">
             <div className='logo-supmti'>
                <img src="./assets/image/supmti-logo.png" alt="" />
             </div>
             <div className='logo-friend'>
                <img src="./assets/image/partner_img_shape.png" alt="" />
             </div>
          </div>

          <div className="form">
            <Head title="Log in" /> 
            <div className='title'>
                <h1>Espace Partenaire</h1>
                <p>Connectez vous pour accéder à votre Espace</p>
            </div>

               {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Mail ou nom d'utilisateur" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            placeholder="Mail ou nom d'utilisateur"
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Mot de passe" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            placeholder="******"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600">Rester Connectez</span>
                        </label>
                    </div>

                    <div className="sumbit-btn">
                        <PrimaryButton className="ms-4" disabled={processing}>
                        <i class="fa-solid fa-right-to-bracket"></i>Connectez Vous
                        </PrimaryButton>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className=" text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                               <span id='forget-password'>Mot de passe oublie?</span>
                            </Link>
                        )}
                    </div>
                </form>
          </div>
       </div>
    );
}
