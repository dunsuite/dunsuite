/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Changelog = "changelog",
	Media = "media",
	Users = "users",
	Waitlist = "waitlist",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum ChangelogToolOptions {
	"DunTasks" = "DunTasks",
}

export enum ChangelogTagOptions {
	"New" = "New",
	"Feature" = "Feature",
	"Bug" = "Bug",
	"Improvement" = "Improvement",
}
export type ChangelogRecord = {
	content?: HTMLString
	cover?: string
	created_by?: RecordIdString
	description?: string
	tag?: ChangelogTagOptions
	title?: string
	tool?: ChangelogToolOptions
	version?: string
}

export type MediaRecord = {
	alt_text?: string
	created_by?: RecordIdString
	file?: string
	name: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

export type WaitlistRecord = {
	email: string
}

// Response types include system fields and match responses from the PocketBase API
export type ChangelogResponse<Texpand = unknown> = Required<ChangelogRecord> & BaseSystemFields<Texpand>
export type MediaResponse<Texpand = unknown> = Required<MediaRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type WaitlistResponse<Texpand = unknown> = Required<WaitlistRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	changelog: ChangelogRecord
	media: MediaRecord
	users: UsersRecord
	waitlist: WaitlistRecord
}

export type CollectionResponses = {
	changelog: ChangelogResponse
	media: MediaResponse
	users: UsersResponse
	waitlist: WaitlistResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'changelog'): RecordService<ChangelogResponse>
	collection(idOrName: 'media'): RecordService<MediaResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'waitlist'): RecordService<WaitlistResponse>
}
