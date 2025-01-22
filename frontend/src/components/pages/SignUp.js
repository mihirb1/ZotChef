import React from "react";
import '../../App.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import "./SignUp.css";

export default function SignUp() {
    return (
        <>
            <SignedOut>
                <div className="sign-in-container">
                    <SignInButton />
                </div>
            </SignedOut>
            <SignedIn>
                <div className="sign-out-container">
                    <UserButton />
                </div>
            </SignedIn>
        </>
    );
}
