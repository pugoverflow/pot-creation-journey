"use client";

import { Mail } from "lucide-react";

import { Dialog } from "@/components/ui/dialog/dialog";
import { Separator } from "@/components/ui/separator/separator";

import {
    signupModalButtonStyles,
    signupModalButtonsStyles,
    signupModalContentStyles,
    signupModalLegalLinkStyles,
    signupModalLegalStyles,
} from "./signup-modal.styles";

type SignupModalProps = {
    open: boolean;
    onClose: () => void;
};

function handleSignup() {
    alert("⛔ No functionality yet!");
}

function AppleIcon() {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
    );
}

export function SignupModal({
    open,
    onClose,
}: SignupModalProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            title="Sign in to start collecting"
            description="You can either use your Apple account or your email address."
        >
            <div className={signupModalContentStyles()}>
                <div className={signupModalButtonsStyles()}>
                    <Separator />

                    <button
                        type="button"
                        className={signupModalButtonStyles()}
                        onClick={handleSignup}
                    >
                        <AppleIcon />
                        Sign up with Apple
                    </button>

                    <button
                        type="button"
                        className={signupModalButtonStyles()}
                        onClick={handleSignup}
                    >
                        <Mail size={20} aria-hidden="true" />
                        Sign up with email
                    </button>
                </div>

                <p className={signupModalLegalStyles()}>
                    By signing up, you agree to our{" "}
                    <a href="#" className={signupModalLegalLinkStyles()}>
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className={signupModalLegalLinkStyles()}>
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </Dialog>
    );
}
