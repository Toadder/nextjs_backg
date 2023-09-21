'use client';

import { FC, useState } from 'react';

import Spinner from '@/components/ui/Spinner/Spinner';

import { IComment } from '@/shared/types/general.types';

import { IArticleCommentsItems } from '../../article.interface';
import { getData } from '../../article.requests';

import CommentsItem from './CommentsItem';
import styles from './CommentsItems.module.scss';

const CommentsItems: FC<IArticleCommentsItems> = ({
	slug,
	comments,
	hasNextPage,
	endCursor
}) => {
	if (!comments?.length) return;

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [items, setItems] = useState<IComment[]>(comments);
	const [moreItemsAvailable, setMoreItemsAvailable] =
		useState<boolean>(hasNextPage);
	const [lastItemCursor, setLastItemCursor] = useState<string | null>(
		endCursor
	);

	const loadComments = () => {
		setIsLoading(true);

		getData(slug, lastItemCursor)
			.then((data) => {
				const { articleData, commentsEndCursor, commentsHasNextPage } = data;
				setItems((prevData) => [...prevData, ...articleData?.comments?.nodes]);
				setMoreItemsAvailable(commentsHasNextPage);
				setLastItemCursor(commentsEndCursor);
			})
			.catch((error) => {
				console.log(error);
				setMoreItemsAvailable(false);
				alert('При загрузке данных произошла ошибка...');
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className={styles.root}>
			<div className={styles.comments}>
				{items?.map((comment) => (
					<CommentsItem key={comment?.id} {...comment} />
				))}
			</div>
			{moreItemsAvailable && !isLoading ? (
				<button onClick={loadComments} className={styles.button} type="button">
					Показать ещё комментарии
				</button>
			) : null}
			{isLoading && (
				<div className={styles.spinnerWrapper}>
					<Spinner className={styles.spinner} />
				</div>
			)}
		</div>
	);
};

export default CommentsItems;