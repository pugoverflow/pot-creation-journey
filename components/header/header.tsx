"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { SignupModal } from "@/components/signup-modal/signup-modal";
import { Button } from "@/components/ui/button/button";

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
                            <Button
                                type="button"
                                variant="icon"
                                onClick={() => router.back()}
                                aria-label="Go back"
                            >
                                <ChevronLeft size={20} />
                            </Button>

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
                  justify-center
                  gap-3
                  sm:flex-nowrap
                  sm:justify-end
                  sm:gap-4
                "
                            >
                                <Button
                                    type="button"
                                    variant="link"
                                    onClick={handleLogin}
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

            <SignupModal
                open={isSignupOpen}
                onClose={() =>
                    setIsSignupOpen(false)
                }
            />
        </>
    );
}