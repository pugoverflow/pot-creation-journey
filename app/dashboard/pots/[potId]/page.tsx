"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getPotById } from "@/lib/pot-storage";
import type { Pot } from "@/types/pot";

export default function PotPreviewPage() {
    const params = useParams<{ potId: string }>();

    const [pot, setPot] = useState<Pot | null>(null);

    useEffect(() => {
        const foundPot = getPotById(params.potId);

        setPot(foundPot);
    }, [params.potId]);

    return (
        <main>
            <div>
                <p> {pot?.name ?? "Pot not found"}</p>
            </div>

            {/* If the user clicks any interactive action button on the Pot Information Screen, the application must intercept the action and present a sign-up modal/pop-up prompting them to complete an account registration. */}

            <div>
                <button>Collect money</button>
                <button>Send money</button>
                <button>Customise pot</button>
                <button>Menu</button>
            </div>

            <div>
                <p>Invite people to pay</p>

                <div>
                    <button>Email</button>
                    <button>QR code</button>
                    <button>WhatsApp</button>
                    <button>Facebook</button>
                    <button> Instagram</button>
                    <button> X</button>
                </div>
            </div>
        </main>
    )
}