import { Button } from "./ui/button";
import { IconMail, IconPhone } from "@tabler/icons-react";

const Contact = ({
  isEmail = true,
  isMobile = true,
}: {
  isEmail?: boolean;
  isMobile?: boolean;
}) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-1 sm:justify-end">
      {isEmail && (
        <Button variant="outline">
          <IconMail /> mulaniashit@gmail.com
        </Button>
      )}
      {isMobile && (
        <Button variant="outline">
          <IconPhone /> +91 9313194110
        </Button>
      )}
    </div>
  );
};

export default Contact;
