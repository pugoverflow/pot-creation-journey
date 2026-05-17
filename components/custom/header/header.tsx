"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/custom/logo/logo";
import { LoginModal } from "@/components/custom/login-modal/login-modal";
import { SignupModal } from "@/components/custom/signup-modal/signup-modal";
import { Button } from "@/components/ui/button/button";

import {
    headerInnerStyles,
    headerStyles,
} from "./header.styles";

export function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const [isLoginOpen, setIsLoginOpen] =
        useState(false);

    const [isSignupOpen, setIsSignupOpen] =
        useState(false);

    const isDashboard =
        pathname.startsWith("/dashboard");

    const variant = isDashboard
        ? "dashboard"
        : "marketing";

    return (
        <>
            <header className={headerStyles({ variant })}>
                <div className={headerInnerStyles({ variant })}>
                    {isDashboard ? (
                        <>
                            <Button
                                type="button"
                                variant="icon"
                                onClick={() => router.back()}
                                aria-label="Go back"
                            >
                                <ChevronLeft size={20} />
                            </Button>

                            <div className="flex justify-center">
                                <Logo isLight height={34} />
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
                                className="flex flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:justify-end sm:gap-4"
                            >
                                <Button
                                    type="button"
                                    variant="link"
                                    onClick={() =>
                                        setIsLoginOpen(true)
                                    }
                                >
                                    Login
                                </Button>

                                <Button
                                    type="button"
                                    variant="cta"
                                    onClick={() =>
                                        setIsSignupOpen(true)
                                    }
                                >
                                    Sign up
                                </Button>
                            </nav>
                        </>
                    )}
                </div>
            </header>

            <LoginModal
                open={isLoginOpen}
                onClose={() =>
                    setIsLoginOpen(false)
                }
            />

            <SignupModal
                open={isSignupOpen}
                onClose={() =>
                    setIsSignupOpen(false)
                }
            />
        </>
    );
}