"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/custom/logo/logo";
import { LoginModal } from "@/components/custom/login-modal/login-modal";
import { SignupModal } from "@/components/custom/signup-modal/signup-modal";
import { Button } from "@/components/ui/button/button";

export function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const [isLoginOpen, setIsLoginOpen] =
        useState(false);

    const [isSignupOpen, setIsSignupOpen] =
        useState(false);

    const isDashboard =
        pathname.startsWith("/dashboard");

    return (
        <>
            <header
                className={
                    isDashboard
                        ? "sticky top-0 z-40 w-full bg-[var(--color-blue-23)] shadow"
                        : "w-full bg-white"
                }
            >
                <div
                    className={
                        isDashboard
                            ? "mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8"
                            : "mx-auto mt-4 flex min-h-[50px] w-full max-w-[1080px] flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:justify-between sm:gap-8"
                    }
                >
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
