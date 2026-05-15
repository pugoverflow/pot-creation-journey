type SignupModalProps = {
    open: boolean;
    onClose: () => void;
};

export function SignupModal({
    open,
    onClose,
}: SignupModalProps) {
    if (!open) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
            <div className="bg-white">
                <button
                    type="button"
                    onClick={onClose}
                >
                    X
                </button>

                <div>
                    <h2 id="signup-title">
                        Sign in to start collecting
                    </h2>
                    <p>
                        You can either use your Apple account or your email address.
                    </p>
                </div>

                <div>
                    <button type="button">Sign up with Apple</button>
                    <button type="button">Sign up with email</button>
                </div>
            </div>
        </div>
    );
}