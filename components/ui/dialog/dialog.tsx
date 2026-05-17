"use client";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button/button";
import {
    asMotionDivProps,
    isDialogVisible,
    subtleTransition,
} from "@/lib/motion";

type DialogProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children?: React.ReactNode;
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
                <BaseDialog.Backdrop
                    className="fixed inset-0 z-50 bg-black/50"
                    render={(props, state) => (
                        <motion.div
                            {...asMotionDivProps(props)}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: isDialogVisible(
                                    state.open,
                                    state.transitionStatus
                                )
                                    ? 1
                                    : 0,
                            }}
                            transition={subtleTransition}
                        />
                    )}
                />

                <BaseDialog.Popup
                    className="shadow-elevated fixed left-1/2 top-1/2 z-50 flex w-full max-w-[432px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[20px] bg-white p-6"
                    render={(props, state) => (
                        <motion.div
                            {...asMotionDivProps(props)}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{
                                opacity: isDialogVisible(
                                    state.open,
                                    state.transitionStatus
                                )
                                    ? 1
                                    : 0,
                                y: isDialogVisible(
                                    state.open,
                                    state.transitionStatus
                                )
                                    ? 0
                                    : 6,
                            }}
                            transition={subtleTransition}
                        />
                    )}
                >
                    <BaseDialog.Close
                        render={(props) => (
                            <Button
                                {...props}
                                variant="close"
                                aria-label="Close dialog"
                            >
                                <X size={18} />
                            </Button>
                        )}
                    />


                    <div className="flex flex-col gap-2">
                        <BaseDialog.Title className="type-dialog-title">
                            {title}
                        </BaseDialog.Title>

                        {description && (
                            <BaseDialog.Description className="type-dialog-description mx-auto max-w-[320px]">
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