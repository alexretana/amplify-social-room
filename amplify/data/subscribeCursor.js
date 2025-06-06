import { util, extensions } from '@aws-appsync/utils'
export const request = () => ({ });
export const response = (ctx) => {
	const filter = {
		roodId: { eq: ctx.arguements.roomId },
		username: { ne: ctx.arguements.myUsername }
	}
	extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter))
	return null;
}