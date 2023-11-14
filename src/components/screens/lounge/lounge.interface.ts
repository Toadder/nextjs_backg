import {
	Lounge_Acfloungefields as LoungeAcfSettings,
	Lounge_Acfloungefields_Layoutproperties as LoungeLayoutAcfSettings
} from '@/shared/types/grahpql.types'
import { ApolloError } from '@apollo/client'

export interface ILoungeGetDataResponse {
	error: ApolloError | undefined
	loungeData: ILoungeData
}

export interface ILoungeData
	extends Pick<
		LoungeAcfSettings,
		| 'isintrohidden'
		| 'introslider'
		| 'isexamplehidden'
		| 'exampleslider'
		| 'ismainhidden'
		| 'maintitle'
		| 'maincontent'
		| 'mainvideomp4'
		| 'mainvideowebm'
		| 'islayouthidden'
		| 'layout'
		| 'layoutcontent'
		| 'layoutproperties'
		| 'issimilarloungeshidden'
		| 'titlesimilarlounges'
		| 'similarlounges'
		| 'isiframehidden'
		| 'iframeclass'
		| 'iframesrc'
		| 'iframestyles'
	> {}

export interface ILoungeIntroSlider {
	isBlockHidden: LoungeAcfSettings['isintrohidden']
	introSlider: LoungeAcfSettings['introslider']
}

export interface ILoungeMain {
	layout: LoungeAcfSettings['layout']
	isMainHidden: LoungeAcfSettings['ismainhidden']
	title: LoungeAcfSettings['maintitle']
	mainContent: LoungeAcfSettings['maincontent']
	videoMp4: LoungeAcfSettings['mainvideomp4']
	videoWebm: LoungeAcfSettings['mainvideowebm']
	isLayoutHidden: LoungeAcfSettings['islayouthidden']
	layoutContent: LoungeAcfSettings['layoutcontent']
	properties: LoungeAcfSettings['layoutproperties']
}

export interface ILoungeTop {
	isBlockHidden: LoungeAcfSettings['ismainhidden']
	title: LoungeAcfSettings['maintitle']
	content: LoungeAcfSettings['maincontent']
	videoMp4: LoungeAcfSettings['mainvideomp4']
	videoWebm: LoungeAcfSettings['mainvideowebm']
}

export interface ILoungeBottom {
	layout: LoungeAcfSettings['layout']
	isBlockHidden: LoungeAcfSettings['islayouthidden']
	content: LoungeAcfSettings['layoutcontent']
	properties: LoungeAcfSettings['layoutproperties']
}

