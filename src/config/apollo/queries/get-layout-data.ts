import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';
import { menuFragment } from '../fraqments/menu';

export const GET_LAYOUT_DATA = gql`
	query GET_LAYOUT_DATA {
		payment: generalSettings {
			acfSettings {
				paymentlink
			}
		}
		headerFields: generalSettings {
			acfSettings {
				phone
				logo {
					...ImageFragment
					mediaDetails {
						width
						height
					}
				}
			}
		}
		menu: menuItems(where: { location: HEADER_MENU, parentId: "0" }) {
			edges {
				node {
					...MenuFragment
					childItems {
						edges {
							node {
								...MenuFragment
							}
						}
					}
				}
			}
		}
		footerFields: generalSettings {
			acfSettings {
				address
				email
				footertext
				telegram
				whatsapp
				mapcoordinates
				documents {
					documentname
					documentfile {
						mediaItemUrl
					}
				}
			}
		}
	}
	${menuFragment}
	${imageFragment}
`;