import { Redis } from '@upstash/redis/cloudflare';
import { Ratelimit } from '@upstash/ratelimit'; // for deno: see above
import { env } from '$env/dynamic/private';

type Unit = 'ms' | 's' | 'm' | 'h' | 'd';
type Duration = `${number} s` | `${number}${Unit}`;

export const waitlistRatelimit = new Ratelimit({
	redis: Redis.fromEnv({
		UPSTASH_REDIS_REST_TOKEN: env.UPSTASH_REDIS_REST_TOKEN as string,
		UPSTASH_REDIS_REST_URL: env.UPSTASH_REDIS_REST_URL as string
	}),
	limiter: Ratelimit.slidingWindow(
		Number(env.WAITLIST_RATE_LIMIT),
		env.WAITLIST_RATE_LIMIT_PERIOD as Duration
	),
	analytics: true,
	prefix: '@dunsuite/waitlist/ratelimit'
});
