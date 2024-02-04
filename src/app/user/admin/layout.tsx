"use client";

import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { Roles } from "../../../../enums";
import RouterLinks from "@/config/RouterLinks";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const user = useAppSelector((state) => state.user);

	const router = useRouter();

	// Todo: verificar que sea un estudiante,
	// no logueado, llevar a login
	// no ser estudiantes llevar landing

	useEffect(() => {
		if (user.role != Roles.admin) return router.replace(RouterLinks.landing);
	}, [user]);

	return <>{children}</>;
}
