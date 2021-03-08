
// ??? 很奇怪的一个问题，使用命名 a001 调试时会出错
export default async function pa001<R, D = Record<string, unknown>>(service: string, data: D) {
	try {
		const ret = await fetch(service, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		});
		return ret.json() as Promise<R>;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
// export default async function a001<T>(service: string, data: Record<string, unknown>) {
// 	const [, toast] = useToasts();
// 	try {
// 		const ret = await fetch(service, {
// 			method: 'POST',
// 			body: JSON.stringify(data),
// 			headers: {
// 				'Content-Type': 'application/json;charset=utf-8'
// 			}
// 		});
// 		return await ret.json() as T;
// 	} catch (error) {
// 		toast({
// 			text: (error as Error).message,
// 			type: 'error'
// 		});
// 		console.error(error);
// 		throw error;
// 	}
// }
