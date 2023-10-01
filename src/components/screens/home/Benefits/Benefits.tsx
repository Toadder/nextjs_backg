import { FC, use } from 'react';

import client from '@/config/apollo/client';
import { GET_BENEFITS_DATA } from '@/config/apollo/queries/get-benefits-data';

import styles from './Benefits.module.scss';
import BenefitsItem from './BenefitsItem';
import { IBenefitData } from './benefits.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const getData = async () => {
	const { error, data } = await client.query({ query: GET_BENEFITS_DATA });
	const benefitsData: IBenefitData = data?.fields?.acfHomeFields;
	return { error, benefitsData };
};

const Benefits: FC = () => {
	const { error, benefitsData } = use(getData());

	if (error) {
		console.error(error);
		return;
	}

	if (!benefitsData?.benefits?.length || benefitsData?.isbenefitshidden) return;

	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.inner}>
					{benefitsData?.benefits?.map((benefit) => (
						<BenefitsItem key={benefit?.title} {...benefit} />
					))}
				</div>
			</div>
		</WithAnimation>
	);
};

export default Benefits;
