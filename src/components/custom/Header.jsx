import React from "react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" />
      <div>
        <Button className="text-gray-900 bg-black ">Sign in</Button>
      </div>
    </div>
  );
}

export default Header;
