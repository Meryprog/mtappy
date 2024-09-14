'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import '@/app/global.css'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"

const ClientRegister = () => {
    const { registerClient } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/login',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [prenom, setPrenom] = useState('')
    const [countryCode, setCountryCode] = useState('') // Ajout du state pour l'identifiant du pays
    const [tel, setTel] = useState('')
    const [sexe, setSexe] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setpasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = async event => {
        event.preventDefault()
        // Soumettre les données d'inscription
        registerClient({
            name,
            email,
            prenom,
            tel: `${countryCode}${tel}`,
            sexe,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Register">
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm w-full space-y-8">
                    <form onSubmit={submitForm} className="mt-12 space-y-6 mb-12">
                        <div className="rounded-md shadow-sm -space-y-px">
                            {/* Name */}
                            <div>
                                <Label htmlFor="name">Name</Label>

                                <Input
                                    id="name"
                                    type="text"
                                    value={name}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Nom"
                                    onChange={event => setName(event.target.value)}
                                    required
                                    autoFocus
                                />

                                <InputError messages={errors.name} className="mt-2" />
                            </div>

                            {/* Email Address */}
                            <div className="mt-4">
                                <Label htmlFor="email">Email</Label>

                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />

                                <InputError messages={errors.email} className="mt-2" />
                            </div>

                            {/* Prenom */}
                            <div className="mt-4">
                                <Label htmlFor="prenom">Prenom</Label>

                                <Input
                                    id="prenom"
                                    type="text"
                                    value={prenom}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Prénom"
                                    onChange={event => setPrenom(event.target.value)}
                                    required
                                    autoFocus
                                />

                                <InputError messages={errors.prenom} className="mt-2" />
                            </div>

                            {/* Téléphone et Identifiant de Pays */}
                            <div className="mt-4 flex space-x-2">
                                <div className="w-1/4">
                                    <Label htmlFor="countryCode">Indicatif</Label>
                                    <Input
                                        id="countryCode"
                                        type="text"
                                        value={countryCode}
                                        className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Code"
                                        onChange={event => {
                                            const value = event.target.value.replace(/\D/g, '');
                                            setCountryCode(value);
                                        }}
                                        max="999"
                                        min="0"
                                        required
                                    />
                                </div>

                                <div className="w-3/4">
                                    <Label htmlFor="tel">Numéro</Label>
                                    <Input
                                        id="tel"
                                        type="text"
                                        value={tel}
                                        className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Numéro"
                                        onChange={event => {
                                            const value = event.target.value.replace(/\D/g, '');
                                            setTel(value);
                                        }}
                                        min="0"
                                        required
                                    />
                                </div>
                            </div>

                            <InputError messages={errors.tel || errors.country_code} className="mt-2" />

                            {/* Sexe */}
                            <div className="mt-4">
                                <Label htmlFor="sexe">Sexe</Label>

                                <select
                                    id="sexe"
                                    value={sexe}
                                    className="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    onChange={event => setSexe(event.target.value)}
                                    required
                                >
                                    <option value="">Sélectionnez le sexe</option>
                                    <option value="homme">Homme</option>
                                    <option value="femme">Femme</option>
                                </select>

                                <InputError messages={errors.sexe} className="mt-2" />
                            </div>

                            {/* Password */}
                            <div className="mt-4">
                                <Label htmlFor="password">Password</Label>

                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />

                                <InputError messages={errors.password} className="mt-2" />
                            </div>

                            {/* Confirm Password */}
                            <div className="mt-4">
                                <Label htmlFor="passwordConfirmation">Confirm Password</Label>

                                <Input
                                    id="passwordConfirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setpasswordConfirmation(event.target.value)}
                                    required
                                />

                                <InputError messages={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </Button>
                        </div>
                        <div>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Déjà enregistré?
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ClientRegister
