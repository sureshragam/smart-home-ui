export type SummaryCardIcon = "devices" | "motion" | "alerts" | "uptime";

export interface SummaryCardModel {
	id: number;
	title: string;
	value: string;
	subtitle: string;
	icon: SummaryCardIcon;
	iconColor: string;
}
