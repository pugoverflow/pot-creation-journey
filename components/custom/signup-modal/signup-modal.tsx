"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

import { AssetIcon } from "@/components/icons/asset-icon";
import { assets } from "@/lib/assets";
import { countries } from "@/lib/countries";
import type { CountryCode } from "@/types/country";
import { Button } from "@/components/ui/button/button";
import { Dialog } from "@/components/ui/dialog/dialog";
import { Select } from "@/components/ui/select/select";
import { Separator } from "@/components/ui/separator/separator";

type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SignupModal({
  open,
  onClose,
}: SignupModalProps) {
  const [country, setCountry] = useState<CountryCode>("gb");

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
      <div className="mt-4 stack gap-4">
        <div className="stack gap-3">
          <Select
            label="Country"
            value={country}
            onValueChange={(value) =>
              setCountry(value as CountryCode)
            }
            options={countryOptions}
          />

          <Separator />

          <Button
            type="button"
            className="w-full"
            disabled
          >
            <AssetIcon
              src={assets.thirdParty.apple}
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

        <p className="type-dialog-legal">
          By signing up, you agree to our{" "}
          <a href="#" className="type-dialog-link">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="type-dialog-link">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </Dialog>
  );
}
