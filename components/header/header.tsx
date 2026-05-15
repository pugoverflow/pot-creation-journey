"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { SignupModal } from "@/components/signup-modal";

import {
    headerInnerStyles,
    headerStyles,
} from "./header.styles";

export function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const [isSignupOpen, setIsSignupOpen] =
        useState(false);

    const isDashboard =
        pathname.startsWith("/dashboard");

    const variant = isDashboard
        ? "dashboard"
        : "marketing";

    function handleLogin() {
        alert("⛔ No functionality yet!");
    }

    return (
        <>
            <header className={headerStyles({ variant })}>
                <div className={headerInnerStyles({ variant })}>
                    {isDashboard ? (
                        <>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="button-icon"
                                aria-label="Go back"
                            >
                                ←
                            </button>

                            <div className="flex justify-center">
                                <Logo isLight />
                            </div>

                            <div aria-hidden="true" />
                        </>
                    ) : (
                        <>
                            <div className="shrink-0">
                                <Logo />
                            </div>

                            <nav
                                aria-label="Primary navigation"
                                className="
                  flex
                  flex-wrap
                  items-center
                  justify-end
                  gap-3
                  sm:flex-nowrap
                  sm:gap-4
                "
                            >
                                <button
                                    type="button"
                                    onClick={handleLogin}
                                    className="
                    button-base
                    button-link
                    type-button
                  "
                                >
                                    Login
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsSignupOpen(true)
                                    }
                                    className="
                    button-base
                    button-cta
                    type-cta-button
                  "
                                >
                                    Sign up
                                </button>
                            </nav>
                        </>
                    )}
                </div>
            </header>

            <SignupModal
                open={isSignupOpen}
                onClose={() =>
                    setIsSignupOpen(false)
                }
            />
        </>
    );
}