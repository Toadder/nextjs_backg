import { pagesUri } from '@/constants/pages'
import { gql } from '@apollo/client';

export const GET_PARTNERS_DATA = gql`
	query GET_PARTNERS_DATA {
		fields: page(id: "${pagesUri.partners}", idType: URI) {
			acfPartnersFields {
				title
			}
		}
		partners {
			edges {
				node {
					id
					acfPartnerFields {
						image {
							sourceUrl
							altText
						}
						content
					}
				}
			}
		}
	}
`;