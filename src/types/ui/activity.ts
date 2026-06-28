export interface ActivityItemModel {
	id: number;
	type: "motion" | "motion-end" | "device" | "system";
	title: string;
	device: string;
	timestamp: string;
}
