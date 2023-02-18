import { type ReactNode } from "react";
import { ExternalLink } from "@/components/ExternalLink";

const HelpMenuItem = ({
  command,
  children,
}: {
  command: string;
  children: ReactNode;
}) => {
  return (
    <p>
      <strong>{command}</strong> - {children}
    </p>
  );
};

export const HelpMenu = () => {
  return (
    <>
      <HelpMenuItem command="ri <RELAY_DOMAIN>">
        Retrieves info about a nostr relay if the relay supports{" "}
        <ExternalLink href="https://github.com/nostr-protocol/nips/blob/master/11.md">
          nip-11
        </ExternalLink>
        .
      </HelpMenuItem>
      <HelpMenuItem command="whois <NIP05_ADDRESS>">
        Retrieves link to user&apos;s profile on Snort and their preferred
        relays.
      </HelpMenuItem>
      <HelpMenuItem command="wtf">
        Type this if you are confused af.
      </HelpMenuItem>
      <HelpMenuItem command="clear">Clears the console.</HelpMenuItem>
    </>
  );
};