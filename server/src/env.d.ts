declare namespace NodeJS {
	interface ProcessEnv {
		PORT: string;
		PORT_MOBILE: string;
		NODE_ENV: string;
		CORS_ORIGIN: string;
		PG_DATABASE: string;
		PG_HOST: string;
		PG_PORT: string;
		PG_PASSWORD: string;
		PG_USER: string;
		SESSION_SECRET: string;
		COOKIE_NAME: string;
		REDIS_PORT: string;
		REDIS_URL: string;
	}
}
