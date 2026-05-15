"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { SignupModal } from "@/components/signup-modal";
import { getPotById } from "@/lib/pot-storage";
import { socials } from "@/lib/socials";
import type { Pot } from "@/types/pot";

export default function PotPreviewPage() {
    const params = useParams<{ potId: string }>();

    const [pot, setPot] = useState<Pot | null>(null);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    useEffect(() => {
        const foundPot = getPotById(params.potId);

        setPot(foundPot);
    }, [params.potId]);

    function handleProtectedAction() {
        setIsSignupOpen(true);
    }

    return (
        <main>
            <div>
                <p>{pot?.name ?? "Pot not found"}</p>
            </div>

            <div>
                <button type="button" onClick={handleProtectedAction}>
                    Collect money
                </button>

                <button type="button" onClick={handleProtectedAction}>
                    Send money
                </button>

                <button type="button" onClick={handleProtectedAction}>
                    Customise pot
                </button>

                <button type="button" onClick={handleProtectedAction}>
                    Menu
                </button>
            </div>

            <div>
                <p>Invite people to pay</p>

                <div>
                    {socials.map((social) => (
                        <button
                            key={social.id}
                            type="button"
                            onClick={handleProtectedAction}
                        >
                            <span>{social.icon}</span>
                            <span>{social.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <SignupModal
                open={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
            />
        </main>
    );
}