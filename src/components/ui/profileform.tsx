"use client";

export default function ProfileForm() {
	return (
		<div className="space-y-4">
			<div>
				<label className="block text-sm font-medium mb-1">Name</label>
				<input
					type="name"
					className="w-full p-2 border rounded"
				/>
			</div>
			<button
				type="submit"
				className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
			>
				Save Changes
			</button>
		</div>
	);
}
