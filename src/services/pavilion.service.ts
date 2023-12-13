import { notFound } from 'next/navigation'

import {
	IPavilionData,
	IPavilionGetDataResponse
} from '@/components/screens/pavilion/pavilion.interface'

import { IGeneralSettings } from '@/shared/types/general.types'

import client from '@/config/apollo/client'
import { GET_PAVILION_DATA } from '@/config/apollo/queries/get-pavilion-data'

class PavilionService {
	async getData(slug: string): Promise<IPavilionGetDataResponse> {
		const { error, data } = await client.query({
			query: GET_PAVILION_DATA,
			variables: { slug }
		})

		if (!data?.pavilion) notFound()

		const generalSettings: IGeneralSettings = data?.generalSettings?.acfSettings
		const pavilionData: IPavilionData = data?.pavilion?.acfPavilionFields
		return { error, generalSettings, pavilionData }
	}
}

export default new PavilionService()