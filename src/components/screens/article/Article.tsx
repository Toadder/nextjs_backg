import { notFound } from 'next/navigation';
import { FC, use } from 'react';

import Comments from './Comments/Comments';
import Items from './Items/Items';
import Main from './Main/Main';
import { getData } from './article.requests';

const Article: FC<{ slug: string }> = ({ slug }) => {
	const { error, articleData, commentsHasNextPage, commentsEndCursor, otherArticles } = use(getData(slug));

	if (error) {
		console.log(error);
		return;
	}

	return (
		<>
			<Main
				title={articleData?.title}
				slider={articleData?.acfJournalData?.mainslider}
				date={articleData?.date}
				content={articleData?.content}
			/>
			<Items currentId={articleData?.id} articles={otherArticles} />
			<Comments
				slug={slug}
				postId={articleData?.databaseId}
				comments={articleData?.comments?.nodes}
				hasNextPage={commentsHasNextPage}
				endCursor={commentsEndCursor}
			/>
		</>
	);
};

export default Article;