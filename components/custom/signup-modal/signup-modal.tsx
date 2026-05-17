"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

import { AssetIcon } from "@/components/icons/asset-icon";
import { countries } from "@/lib/countries";
import { assets } from "@/lib/assets";
import { Button } from "@/components/ui/button/button";
import { Dialog } from "@/components/ui/dialog/dialog";
import { Select } from "@/components/ui/select/select";
import { Separator } from "@/components/ui/separator/separator";

import {
  signupModalButtonsStyles,
  signupModalContentStyles,
  signupModalLegalLinkStyles,
  signupModalLegalStyles,
} from "./signup-modal.styles";

type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SignupModal({
  open,
  onClose,
}: SignupModalProps) {
  const [country, setCountry] = useState("gb");

  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: `${country.emoji} ${country.label}`,
  }));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Sign in to start collecting"
      description="You can either use your Apple account or your email address."
    >
      <div className={signupModalContentStyles()}>
        <div className={signupModalButtonsStyles()}>
          <Select
            label="Country"
            value={country}
            onValueChange={setCountry}
            options={countryOptions}
          />

          <Separator />

          <Button
            type="button"
            className="w-full"
            disabled
          >
            <AssetIcon
              src={assets.icons.apple}
              size={20}
            />
            Sign up with Apple
          </Button>

          <Button
            type="button"
            className="w-full"
            disabled
          >
            <Mail size={20} aria-hidden="true" />
            Sign up with email
          </Button>
        </div>

        <p className={signupModalLegalStyles()}>
          By signing up, you agree to our{" "}
          <a href="#" className={signupModalLegalLinkStyles()}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className={signupModalLegalLinkStyles()}>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </Dialog>
  );
}