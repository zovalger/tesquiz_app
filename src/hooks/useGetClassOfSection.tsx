import React, { useEffect, useState } from "react";
import { ClassOfSection } from "../../types";
import { useAppSelector } from "@/redux/store";

const useGetClassOfSection = (): [boolean, ClassOfSection[] | null] => {
	const classForSection = useAppSelector((state) => state.classForSection);

	const [data, setData] = useState<ClassOfSection[] | null>(null);
	const [loanding, setLoanding] = useState(true);

	useEffect(() => {
		if (data) return;

		setTimeout(() => {
			setData(classForSection.classes);
			setLoanding(false);
		}, 2000);
	}, []);

	return [loanding, data];
};

export default useGetClassOfSection;
