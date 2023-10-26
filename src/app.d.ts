import type { D1Database, KVNamespace, DurableObjectNamespace } from '@cloudflare/workers-types';

declare namespace App {
	interface Locals {
		session: Session;
		user: User;
	}
	// interface PageData {}
	interface Error {
		status?: number;
		message?: string;
		trace?: string;
	}
	interface Platform {
		env: {
			DB: D1Database;
			KV: KVNamespace;
			OBJECTS: DurableObjectNamespace;
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		};
		caches: CacheStorage & { default: Cache };
	}
}
