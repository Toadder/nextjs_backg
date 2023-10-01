import {
	Page_Acfhomefields,
	Page_Acfhomefields_Benefits
} from '@/shared/types/grahpql.types';

export interface IBenefit
	extends Pick<
		Page_Acfhomefields_Benefits,
		'icon' | 'title' | 'excerpt' | 'content'
	> {}

export interface IBenefitData
	extends Pick<Page_Acfhomefields, 'isbenefitshidden'> {
	benefits: IBenefit[];
}
