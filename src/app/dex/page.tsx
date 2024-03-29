export default function DexPage() {
	return (
		<div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 w-full h-full overflow-auto">
			<div className="bg-red-500 p-4 text-white text-center font-bold rounded-xl">1</div>
			<div className="flex flex-col gap-y-4 h-full">
				<div className="bg-green-500 p-4 text-white text-center font-bold flex-grow rounded-xl">2</div>
				<div className="col-span-2 bg-yellow-500 p-4 text-white text-center font-bold flex-grow rounded-xl">3</div>
			</div>
			<div className="row-span-2 bg-purple-500 p-4 text-white text-center font-bold rounded-xl">4</div>
			<div className="col-span-2 row-span-2 bg-blue-500 p-4 text-white text-center font-bold rounded-xl">Main Area</div>
			<div className="bg-red-500 p-4 text-white text-center font-bold rounded-xl">6</div>
		</div>

	)
}
