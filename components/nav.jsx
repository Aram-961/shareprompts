'use client'

import Link from "next/link"
import Image from "next/image"

import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import Logo from '@public/assets/images/logo.svg'
import Profile from '@public/assets/images/logo-text.svg'


const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            // Get response 
            setProviders(response)
        }
        // call it
        setProviders();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2">
                <Image
                    src={Logo}
                    alt="ChatScribe Logo"
                    width={30}
                    height={30}
                />
                <p className="logo_text">ChatScribe</p>

            </Link>

            {/* Desk nav */}
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex items-center gap-3 md:gap-5">

                        <Link
                            href="/create-prompt"
                            className="black_btn">
                            Create Post
                        </Link>

                        <button
                            type="button"
                            onClick={signOut}
                            className="outline_btn">
                            Sign Out
                        </button>

                        <Link href="/profile">
                            <Image
                                src={Profile}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                                Sign In
                            </button>
                        ))}

                    </>
                )}
            </div>

            {/* Mobile nav */}
        </nav>
    )
}

export default Nav;