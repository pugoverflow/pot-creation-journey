"use client";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

type DialogProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children: React.ReactNode;
};

export function Dialog({
    open,
    onClose,
    title,
    description,
    children,
}: DialogProps) {
    return (
        <BaseDialog.Root
            open={open}
            onOpenChange={(isOpen) => {
                if (!isOpen) onClose();
            }}
        >
            <BaseDialog.Portal>
                <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-black/50" />

                <BaseDialog.Popup className="fixed left-1/2 top-1/2 z-50 flex w-full max-w-[432px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[20px] bg-white p-6 shadow-[0px_4px_24px_0px_#1E1B4B0F]">
                    <BaseDialog.Close
                        type="button"
                        aria-label="Close dialog"
                        className="flex self-end h-8 w-8 items-center justify-center rounded-[8px] text-[var(--color-grey-46)] transition-colors hover:bg-[var(--color-grey-94)]"
                    >
                        <X size={18} />
                    </BaseDialog.Close>


                    <div className="flex flex-col items-center gap-2 mt-0">
                        <BaseDialog.Title className="type-dialog-title">
                            {title}
                        </BaseDialog.Title>

                        {description && (
                            <BaseDialog.Description className="type-dialog-description max-w-[320px]">
                                {description}
                            </BaseDialog.Description>
                        )}
                    </div>

                    {children}
                </BaseDialog.Popup>
            </BaseDialog.Portal>
        </BaseDialog.Root>
    );
}