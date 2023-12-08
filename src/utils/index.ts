export const upItemInArray = (data: Array<any>, pos: number): Array<any> => {
	const a = data[pos];
	const b = data[pos - 1];

	const d = data.map((c, i) => {
		if (i === pos - 1) return a;
		if (i === pos) return b;

		return c;
	});

	return d;
};

export const downItemInArray = (data: Array<any>, pos: number): Array<any> => {
	const a = data[pos];
	const b = data[pos + 1];

	const d = data.map((c, i) => {
		if (i === pos + 1) return a;
		if (i === pos) return b;

		return c;
	});

	return d;
};
