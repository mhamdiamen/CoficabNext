import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";

export const CurrentUser = query({
    args: {},
    handler: async (ctx) => {
        const userId = await getAuthUserId(ctx); // Use the recommended method
        if (userId === null) {
            return null;
        }
        return await ctx.db.get(userId);
    },
});
