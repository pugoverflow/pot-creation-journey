"use client";

import { useState, useSyncExternalStore } from "react";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button/button";
import { SignupModal } from "@/components/signup-modal/signup-modal";
import { getPotById } from "@/lib/pot-storage";
import { socials } from "@/lib/socials";
export default function PotPreviewPage() {
    const params = useParams<{ potId: string }>();

    const pot = useSyncExternalStore(
        () => () => {},
        () => getPotById(params.potId),
        () => null,
    );
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    function handleProtectedAction() {
        setIsSignupOpen(true);
    }

    return (
        <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
            <section aria-labelledby="pot-preview-heading">
                <h1 id="pot-preview-heading" className="type-pot-value">
                    {pot?.name ?? "Pot not found"}
                </h1>
            </section>

            <section
                aria-label="Pot actions"
                className="flex flex-wrap gap-3"
            >
                <Button type="button" variant="cta" onClick={handleProtectedAction}>
                    Collect money
                </Button>

                <Button type="button" variant="link" onClick={handleProtectedAction}>
                    Send money
                </Button>

                <Button type="button" variant="link" onClick={handleProtectedAction}>
                    Customise pot
                </Button>

                <Button type="button" variant="link" onClick={handleProtectedAction}>
                    Menu
                </Button>
            </section>

            <section
                aria-labelledby="invite-heading"
                className="flex flex-col gap-4"
            >
                <h2 id="invite-heading" className="type-h5">
                    Invite people to pay
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {socials.map((social) => (
                        <button
                            key={social.id}
                            type="button"
                            onClick={handleProtectedAction}
                            className="flex flex-col items-center justify-center gap-2 rounded-[12px] border border-[var(--color-grey-94)] bg-white p-4"
                        >
                            <span className="type-emoji">{social.icon}</span>
                            <span className="type-body-small">{social.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            <SignupModal
                open={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
            />
        </main>
    );
}