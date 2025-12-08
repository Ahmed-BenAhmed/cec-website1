"use client";

import { links } from "@/constants";
import { useSelectYear } from "@/providers/SelectYearProvider";
import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLinks = ({ children, className }: { children?: ReactNode, className: string }) => {

    const pathName = usePathname();

    const { year } = useSelectYear();

    return (
        <nav className={className}>
            {links.map(({ link, name }) => {
                if (name === "Build With Tech" && year === 2025)
                    return <></>

                return <Link
                    style={{ color: pathName === link ? "#ffd60a" : "" }}
                    key={nanoid()}
                    href={link}
                    className="text-white hover:text-[#ffd60a] transition-colors"
                >
                    {name}
                </Link>

            }

            )}
            {children}
        </nav>
    );
};

export default NavLinks;
