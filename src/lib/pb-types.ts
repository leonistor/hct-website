/**
 * This file was @generated using typed-pocketbase
 */

// https://pocketbase.io/docs/collections/#base-collection
export interface BaseCollectionResponse {
	/**
	 * 15 characters string to store as record ID.
	 */
	id: string;
	/**
	 * Date string representation for the creation date.
	 */
	created: string;
	/**
	 * Date string representation for the creation date.
	 */
	updated: string;
	/**
	 * The collection id.
	 */
	collectionId: string;
	/**
	 * The collection name.
	 */
	collectionName: string;
}

// https://pocketbase.io/docs/api-records/#create-record
export interface BaseCollectionCreate {
	/**
	 * 15 characters string to store as record ID.
	 * If not set, it will be auto generated.
	 */
	id?: string;
}

// https://pocketbase.io/docs/api-records/#update-record
export interface BaseCollectionUpdate {}

// https://pocketbase.io/docs/collections/#auth-collection
export interface AuthCollectionResponse extends BaseCollectionResponse {
	/**
	 * The username of the auth record.
	 */
	username: string;
	/**
	 * Auth record email address.
	 */
	email: string;
	/**
	 * Auth record email address.
	 */
	tokenKey?: string;
	/**
	 * Whether to show/hide the auth record email when fetching the record data.
	 */
	emailVisibility: boolean;
	/**
	 * Indicates whether the auth record is verified or not.
	 */
	verified: boolean;
}

// https://pocketbase.io/docs/api-records/#create-record
export interface AuthCollectionCreate extends BaseCollectionCreate {
	/**
	 * The username of the auth record.
	 * If not set, it will be auto generated.
	 */
	username?: string;
	/**
	 * Auth record email address.
	 */
	email?: string;
	/**
	 * Whether to show/hide the auth record email when fetching the record data.
	 */
	emailVisibility?: boolean;
	/**
	 * Auth record password.
	 */
	password: string;
	/**
	 * Auth record password confirmation.
	 */
	passwordConfirm: string;
	/**
	 * Indicates whether the auth record is verified or not.
	 * This field can be set only by admins or auth records with "Manage" access.
	 */
	verified?: boolean;
}

// https://pocketbase.io/docs/api-records/#update-record
export interface AuthCollectionUpdate {
	/**
	 * The username of the auth record.
	 */
	username?: string;
	/**
	 * The auth record email address.
	 * This field can be updated only by admins or auth records with "Manage" access.
	 * Regular accounts can update their email by calling "Request email change".
	 */
	email?: string;
	/**
	 * Whether to show/hide the auth record email when fetching the record data.
	 */
	emailVisibility?: boolean;
	/**
	 * Old auth record password.
	 * This field is required only when changing the record password. Admins and auth records with "Manage" access can skip this field.
	 */
	oldPassword?: string;
	/**
	 * New auth record password.
	 */
	password?: string;
	/**
	 * New auth record password confirmation.
	 */
	passwordConfirm?: string;
	/**
	 * Indicates whether the auth record is verified or not.
	 * This field can be set only by admins or auth records with "Manage" access.
	 */
	verified?: boolean;
}

// https://pocketbase.io/docs/collections/#view-collection
export interface ViewCollectionRecord {
	id: string;
}

// utilities

type MaybeArray<T> = T | T[];

// ===== _mfas =====

export interface MfasResponse extends BaseCollectionResponse {
	collectionName: '_mfas';
	id: string;
	collectionRef: string;
	recordRef: string;
	method: string;
	created: string;
	updated: string;
}

export interface MfasCreate extends BaseCollectionCreate {
	id?: string;
	collectionRef: string;
	recordRef: string;
	method: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface MfasUpdate extends BaseCollectionUpdate {
	id?: string;
	collectionRef?: string;
	recordRef?: string;
	method?: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface MfasCollection {
	type: 'base';
	collectionId: string;
	collectionName: '_mfas';
	response: MfasResponse;
	create: MfasCreate;
	update: MfasUpdate;
	relations: Record<string, never>;
}

// ===== _otps =====

export interface OtpsResponse extends BaseCollectionResponse {
	collectionName: '_otps';
	id: string;
	collectionRef: string;
	recordRef: string;
	created: string;
	updated: string;
}

export interface OtpsCreate extends BaseCollectionCreate {
	id?: string;
	collectionRef: string;
	recordRef: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface OtpsUpdate extends BaseCollectionUpdate {
	id?: string;
	collectionRef?: string;
	recordRef?: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface OtpsCollection {
	type: 'base';
	collectionId: string;
	collectionName: '_otps';
	response: OtpsResponse;
	create: OtpsCreate;
	update: OtpsUpdate;
	relations: Record<string, never>;
}

// ===== _externalAuths =====

export interface ExternalAuthsResponse extends BaseCollectionResponse {
	collectionName: '_externalAuths';
	id: string;
	collectionRef: string;
	recordRef: string;
	provider: string;
	providerId: string;
	created: string;
	updated: string;
}

export interface ExternalAuthsCreate extends BaseCollectionCreate {
	id?: string;
	collectionRef: string;
	recordRef: string;
	provider: string;
	providerId: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface ExternalAuthsUpdate extends BaseCollectionUpdate {
	id?: string;
	collectionRef?: string;
	recordRef?: string;
	provider?: string;
	providerId?: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface ExternalAuthsCollection {
	type: 'base';
	collectionId: string;
	collectionName: '_externalAuths';
	response: ExternalAuthsResponse;
	create: ExternalAuthsCreate;
	update: ExternalAuthsUpdate;
	relations: Record<string, never>;
}

// ===== _authOrigins =====

export interface AuthOriginsResponse extends BaseCollectionResponse {
	collectionName: '_authOrigins';
	id: string;
	collectionRef: string;
	recordRef: string;
	fingerprint: string;
	created: string;
	updated: string;
}

export interface AuthOriginsCreate extends BaseCollectionCreate {
	id?: string;
	collectionRef: string;
	recordRef: string;
	fingerprint: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface AuthOriginsUpdate extends BaseCollectionUpdate {
	id?: string;
	collectionRef?: string;
	recordRef?: string;
	fingerprint?: string;
	created?: string | Date;
	updated?: string | Date;
}

export interface AuthOriginsCollection {
	type: 'base';
	collectionId: string;
	collectionName: '_authOrigins';
	response: AuthOriginsResponse;
	create: AuthOriginsCreate;
	update: AuthOriginsUpdate;
	relations: Record<string, never>;
}

// ===== _superusers =====

export interface SuperusersResponse extends AuthCollectionResponse {
	collectionName: '_superusers';
	id: string;
	tokenKey: string;
	email: string;
	emailVisibility: boolean;
	verified: boolean;
	created: string;
	updated: string;
}

export interface SuperusersCreate extends AuthCollectionCreate {
	id?: string;
	email: string;
	emailVisibility?: boolean;
	verified?: boolean;
	created?: string | Date;
	updated?: string | Date;
}

export interface SuperusersUpdate extends AuthCollectionUpdate {
	id?: string;
	email?: string;
	emailVisibility?: boolean;
	verified?: boolean;
	created?: string | Date;
	updated?: string | Date;
}

export interface SuperusersCollection {
	type: 'auth';
	collectionId: string;
	collectionName: '_superusers';
	response: SuperusersResponse;
	create: SuperusersCreate;
	update: SuperusersUpdate;
	relations: Record<string, never>;
}

// ===== users =====

export interface UsersResponse extends AuthCollectionResponse {
	collectionName: 'users';
	id: string;
	tokenKey: string;
	email: string;
	emailVisibility: boolean;
	verified: boolean;
	name: string;
	avatar: string;
	created: string;
	updated: string;
}

export interface UsersCreate extends AuthCollectionCreate {
	id?: string;
	email: string;
	emailVisibility?: boolean;
	verified?: boolean;
	name?: string;
	avatar?: File | null;
	created?: string | Date;
	updated?: string | Date;
}

export interface UsersUpdate extends AuthCollectionUpdate {
	id?: string;
	email?: string;
	emailVisibility?: boolean;
	verified?: boolean;
	name?: string;
	avatar?: File | null;
	created?: string | Date;
	updated?: string | Date;
}

export interface UsersCollection {
	type: 'auth';
	collectionId: string;
	collectionName: 'users';
	response: UsersResponse;
	create: UsersCreate;
	update: UsersUpdate;
	relations: Record<string, never>;
}

// ===== categorii =====

export interface CategoriiResponse extends BaseCollectionResponse {
	collectionName: 'categorii';
	id: string;
	nume: string;
	slug: string;
	_order: number;
	descriere: string;
	icon: string;
	imagine: string;
	created: string;
	updated: string;
}

export interface CategoriiCreate extends BaseCollectionCreate {
	id?: string;
	nume: string;
	slug?: string;
	_order?: number;
	descriere?: string;
	icon?: string;
	imagine?: File | null;
	created?: string | Date;
	updated?: string | Date;
}

export interface CategoriiUpdate extends BaseCollectionUpdate {
	id?: string;
	nume?: string;
	slug?: string;
	_order?: number;
	'_order+'?: number;
	'_order-'?: number;
	descriere?: string;
	icon?: string;
	imagine?: File | null;
	created?: string | Date;
	updated?: string | Date;
}

export interface CategoriiCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'categorii';
	response: CategoriiResponse;
	create: CategoriiCreate;
	update: CategoriiUpdate;
	relations: {
		produse_via_categorie: ProduseCollection[];
	};
}

// ===== parteneri =====

export interface ParteneriResponse extends BaseCollectionResponse {
	collectionName: 'parteneri';
	id: string;
	cod: string;
	nume: string;
	descriere: string;
	logo: string;
	url: string;
	publicat: boolean;
	_order: number;
	created: string;
	updated: string;
}

export interface ParteneriCreate extends BaseCollectionCreate {
	id?: string;
	cod: string;
	nume: string;
	descriere?: string;
	logo?: File | null;
	url?: string | URL;
	publicat?: boolean;
	_order?: number;
	created?: string | Date;
	updated?: string | Date;
}

export interface ParteneriUpdate extends BaseCollectionUpdate {
	id?: string;
	cod?: string;
	nume?: string;
	descriere?: string;
	logo?: File | null;
	url?: string | URL;
	publicat?: boolean;
	_order?: number;
	'_order+'?: number;
	'_order-'?: number;
	created?: string | Date;
	updated?: string | Date;
}

export interface ParteneriCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'parteneri';
	response: ParteneriResponse;
	create: ParteneriCreate;
	update: ParteneriUpdate;
	relations: {
		produse_via_partener: ProduseCollection[];
	};
}

// ===== materiale =====

export interface MaterialeResponse extends BaseCollectionResponse {
	collectionName: 'materiale';
	id: string;
	denumire: string;
	denumire_en: string;
	slug: string;
	descriere: string;
	icon: string;
	_order: number;
	imagine: string;
	created: string;
	updated: string;
}

export interface MaterialeCreate extends BaseCollectionCreate {
	id?: string;
	denumire: string;
	denumire_en?: string;
	slug?: string;
	descriere?: string;
	icon?: string;
	_order?: number;
	imagine?: File | null;
	created?: string | Date;
	updated?: string | Date;
}

export interface MaterialeUpdate extends BaseCollectionUpdate {
	id?: string;
	denumire?: string;
	denumire_en?: string;
	slug?: string;
	descriere?: string;
	icon?: string;
	_order?: number;
	'_order+'?: number;
	'_order-'?: number;
	imagine?: File | null;
	created?: string | Date;
	updated?: string | Date;
}

export interface MaterialeCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'materiale';
	response: MaterialeResponse;
	create: MaterialeCreate;
	update: MaterialeUpdate;
	relations: {
		produse_via_materiale: ProduseCollection[];
	};
}

// ===== produse =====

export interface ProduseResponse extends BaseCollectionResponse {
	collectionName: 'produse';
	id: string;
	nume: string;
	descriere: string;
	descriere_extra_tip: '' | 'features' | 'richtext' | 'bullets';
	descriere_extra: string;
	specificatii: string;
	partener: string;
	categorie: string;
	materiale: Array<string>;
	publicat: boolean;
	promo: boolean;
	url_producator: string;
	imagini: MaybeArray<string>;
	index_imagine_principala: number;
	videos: MaybeArray<string>;
	variante: Array<string>;
	created: string;
	updated: string;
}

export interface ProduseCreate extends BaseCollectionCreate {
	id?: string;
	nume: string;
	descriere?: string;
	descriere_extra_tip?: '' | 'features' | 'richtext' | 'bullets';
	descriere_extra?: string;
	specificatii?: string;
	partener?: string;
	categorie?: string;
	materiale?: MaybeArray<string>;
	publicat?: boolean;
	promo?: boolean;
	url_producator?: string | URL;
	imagini?: MaybeArray<File>;
	index_imagine_principala?: number;
	videos?: MaybeArray<File>;
	variante?: MaybeArray<string>;
	created?: string | Date;
	updated?: string | Date;
}

export interface ProduseUpdate extends BaseCollectionUpdate {
	id?: string;
	nume?: string;
	descriere?: string;
	descriere_extra_tip?: '' | 'features' | 'richtext' | 'bullets';
	descriere_extra?: string;
	specificatii?: string;
	partener?: string;
	categorie?: string;
	materiale?: MaybeArray<string>;
	'materiale+'?: MaybeArray<string>;
	'materiale-'?: MaybeArray<string>;
	publicat?: boolean;
	promo?: boolean;
	url_producator?: string | URL;
	imagini?: MaybeArray<File>;
	'imagini-'?: string;
	index_imagine_principala?: number;
	'index_imagine_principala+'?: number;
	'index_imagine_principala-'?: number;
	videos?: MaybeArray<File>;
	'videos-'?: string;
	variante?: MaybeArray<string>;
	'variante+'?: MaybeArray<string>;
	'variante-'?: MaybeArray<string>;
	created?: string | Date;
	updated?: string | Date;
}

export interface ProduseCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'produse';
	response: ProduseResponse;
	create: ProduseCreate;
	update: ProduseUpdate;
	relations: {
		partener: ParteneriCollection;
		categorie: CategoriiCollection;
		materiale: MaterialeCollection[];
		variante: ProduseCollection[];
		produse_via_variante: ProduseCollection[];
	};
}

// ===== mesaje =====

export interface MesajeResponse extends BaseCollectionResponse {
	collectionName: 'mesaje';
	id: string;
	contact_nume: string;
	contact_companie: string;
	contact_mesaj: string;
	contact_extra: Record<string, any> | Array<any> | null;
	contact_tel_email: string;
	vazut: boolean;
	created: string;
	updated: string;
}

export interface MesajeCreate extends BaseCollectionCreate {
	id?: string;
	contact_nume?: string;
	contact_companie?: string;
	contact_mesaj?: string;
	contact_extra?: Record<string, any> | Array<any> | null;
	contact_tel_email?: string;
	vazut?: boolean;
	created?: string | Date;
	updated?: string | Date;
}

export interface MesajeUpdate extends BaseCollectionUpdate {
	id?: string;
	contact_nume?: string;
	contact_companie?: string;
	contact_mesaj?: string;
	contact_extra?: Record<string, any> | Array<any> | null;
	contact_tel_email?: string;
	vazut?: boolean;
	created?: string | Date;
	updated?: string | Date;
}

export interface MesajeCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'mesaje';
	response: MesajeResponse;
	create: MesajeCreate;
	update: MesajeUpdate;
	relations: Record<string, never>;
}

// ===== Schema =====

export type Schema = {
	_mfas: MfasCollection;
	_otps: OtpsCollection;
	_externalAuths: ExternalAuthsCollection;
	_authOrigins: AuthOriginsCollection;
	_superusers: SuperusersCollection;
	users: UsersCollection;
	categorii: CategoriiCollection;
	parteneri: ParteneriCollection;
	materiale: MaterialeCollection;
	produse: ProduseCollection;
	mesaje: MesajeCollection;
};