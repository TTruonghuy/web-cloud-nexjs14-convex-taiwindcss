import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="items-center container mx-auto justify-between flex">
        <Link href="/" className="flex gap-2 items-center text-xl text-black">
          <Image src="/logo.ico" width="50" height="50" alt="file drive logo" />
          FileDrive
        </Link>

        <SignedIn>
          <Button variant={"outline"}>
            <Link href="/dashboard/files">Tệp tin của bạn</Link>
          </Button>
        </SignedIn>

        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Đăng nhập</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}