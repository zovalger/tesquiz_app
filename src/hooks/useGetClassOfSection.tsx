import React, { useEffect, useState } from "react";
import { ClassOfSection } from "../../types";
import { useAppSelector } from "@/redux/store";

const useGetClassOfSection = (): [boolean, boolean, ClassOfSection[]] => {
	const classForSection = useAppSelector((state) => state.classForSection);

	const [data, setData] = useState<ClassOfSection[]>([]);
	const [loanding, setLoanding] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (data.length) return;

		setTimeout(() => {
			// if (error)

			setData(classForSection.classes);
			setLoanding(false);
			// setError(true)
		}, 2000);
	}, []);

	return [error, loanding, data];
};

export default useGetClassOfSection;
