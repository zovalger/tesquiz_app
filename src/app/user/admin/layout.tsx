"use client";

import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { Roles } from "../../../../enums";
import RouterLinks from "@/config/RouterLinks";
import { useEffect } from "react";
import { DISABLE_AUTH } from "@/config";

export default function Layout({ children }: { children: React.ReactNode }) {
	const user = useAppSelector((state) => state.user.data);

	const router = useRouter();

	// Todo: verificar que sea un estudiante,
	// no logueado, llevar a login
	// no ser estudiantes llevar landing

	useEffect(() => {
		if (!DISABLE_AUTH)
			if (user.role != Roles.admin) return router.replace(RouterLinks.admin.login);
			
	}, [user, router]);

	return <>{children}</>;
}
