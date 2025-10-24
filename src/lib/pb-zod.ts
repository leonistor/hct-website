import { z } from 'zod';


// Base schemas for common PocketBase fields
const baseResponseSchema = z.object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    collectionId: z.string(),
    collectionName: z.string(),
});

const baseCreateSchema = z.object({
    id: z.string().optional(),
});

const baseUpdateSchema = z.object({});

const authResponseSchema = baseResponseSchema.extend({
    username: z.string(),
    email: z.string(),
    tokenKey: z.string().optional(),
    emailVisibility: z.boolean(),
    verified: z.boolean(),
});

const authCreateSchema = baseCreateSchema.extend({
    username: z.string().optional(),
    email: z.string().optional(),
    emailVisibility: z.boolean().optional(),
    password: z.string(),
    passwordConfirm: z.string(),
    verified: z.boolean().optional(),
});

const authUpdateSchema = z.object({
    username: z.string().optional(),
    email: z.string().optional(),
    emailVisibility: z.boolean().optional(),
    oldPassword: z.string().optional(),
    password: z.string().optional(),
    passwordConfirm: z.string().optional(),
    verified: z.boolean().optional(),
});

// ===== users =====

export const UsersResponseZodSchema = authResponseSchema.extend({
    collectionName: z.literal('users'),
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    email: z.email(),
    emailVisibility: z.boolean().optional(),
    verified: z.boolean().optional(),
    name: z.string().max(255).optional(),
    avatar: z.string().optional(),
    created: z.string().optional(),
    updated: z.string().optional()
});

export const UsersCreateZodSchema = authCreateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    email: z.email(),
    emailVisibility: z.boolean().optional(),
    verified: z.boolean().optional(),
    name: z.string().max(255).optional(),
    avatar: z.instanceof(File).nullable().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

export const UsersUpdateZodSchema = authUpdateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/),
    email: z.email().optional(),
    emailVisibility: z.boolean().optional(),
    verified: z.boolean().optional(),
    name: z.string().max(255).optional(),
    avatar: z.instanceof(File).nullable().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

// ===== categorii =====

export const CategoriiResponseZodSchema = baseResponseSchema.extend({
    collectionName: z.literal('categorii'),
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    nume: z.string(),
    slug: z.string().optional(),
    _order: z.number().optional(),
    descriere: z.string().optional(),
    icon: z.string().optional(),
    imagine: z.string().optional(),
    created: z.string().optional(),
    updated: z.string().optional()
});

export const CategoriiCreateZodSchema = baseCreateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    nume: z.string(),
    slug: z.string().optional(),
    _order: z.number().optional(),
    descriere: z.string().optional(),
    icon: z.string().optional(),
    imagine: z.instanceof(File).nullable().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

export const CategoriiUpdateZodSchema = baseUpdateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/),
    nume: z.string().optional(),
    slug: z.string().optional(),
    _order: z.number().optional(),
    '_order+': z.number().optional(),
    '_order-': z.number().optional(),
    descriere: z.string().optional(),
    icon: z.string().optional(),
    imagine: z.instanceof(File).nullable().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

// ===== parteneri =====

export const ParteneriResponseZodSchema = baseResponseSchema.extend({
    collectionName: z.literal('parteneri'),
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    cod: z.string(),
    nume: z.string(),
    descriere: z.string().optional(),
    logo: z.string().optional(),
    url: z.url().optional(),
    publicat: z.boolean().optional(),
    _order: z.number().optional(),
    created: z.string().optional(),
    updated: z.string().optional()
});

export const ParteneriCreateZodSchema = baseCreateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    cod: z.string(),
    nume: z.string(),
    descriere: z.string().optional(),
    logo: z.instanceof(File).nullable().optional(),
    url: z.union([z.url(), z.instanceof(URL)]).optional(),
    publicat: z.boolean().optional(),
    _order: z.number().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

export const ParteneriUpdateZodSchema = baseUpdateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/),
    cod: z.string().optional(),
    nume: z.string().optional(),
    descriere: z.string().optional(),
    logo: z.instanceof(File).nullable().optional(),
    url: z.union([z.url(), z.instanceof(URL)]).optional(),
    publicat: z.boolean().optional(),
    _order: z.number().optional(),
    '_order+': z.number().optional(),
    '_order-': z.number().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

// ===== materiale =====

export const MaterialeResponseZodSchema = baseResponseSchema.extend({
    collectionName: z.literal('materiale'),
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    denumire: z.string(),
    denumire_en: z.string().optional(),
    slug: z.string().optional(),
    descriere: z.string().optional(),
    icon: z.string().optional(),
    _order: z.number().optional(),
    imagine: z.string().optional(),
    created: z.string().optional(),
    updated: z.string().optional()
});

export const MaterialeCreateZodSchema = baseCreateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    denumire: z.string(),
    denumire_en: z.string().optional(),
    slug: z.string().optional(),
    descriere: z.string().optional(),
    icon: z.string().optional(),
    _order: z.number().optional(),
    imagine: z.instanceof(File).nullable().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

export const MaterialeUpdateZodSchema = baseUpdateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/),
    denumire: z.string().optional(),
    denumire_en: z.string().optional(),
    slug: z.string().optional(),
    descriere: z.string().optional(),
    icon: z.string().optional(),
    _order: z.number().optional(),
    '_order+': z.number().optional(),
    '_order-': z.number().optional(),
    imagine: z.instanceof(File).nullable().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

// ===== produse =====

export const ProduseResponseZodSchema = baseResponseSchema.extend({
    collectionName: z.literal('produse'),
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    nume: z.string(),
    descriere: z.string().optional(),
    descriere_extra_tip: z.enum(['', 'features', 'richtext', 'bullets']).optional(),
    descriere_extra: z.string().optional(),
    specificatii: z.string().optional(),
    partener: z.string().optional(),
    categorie: z.string().optional(),
    materiale: z.array(z.string()).optional(),
    publicat: z.boolean().optional(),
    promo: z.boolean().optional(),
    url_producator: z.url().optional(),
    imagini: z.array(z.string()).optional(),
    index_imagine_principala: z.number().min(0).max(50).optional(),
    videos: z.array(z.string()).optional(),
    variante: z.array(z.string()).optional(),
    created: z.string().optional(),
    updated: z.string().optional()
});

export const ProduseCreateZodSchema = baseCreateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    nume: z.string(),
    descriere: z.string().optional(),
    descriere_extra_tip: z.enum(['', 'features', 'richtext', 'bullets']).optional(),
    descriere_extra: z.string().optional(),
    specificatii: z.string().optional(),
    partener: z.string().optional(),
    categorie: z.string().optional(),
    materiale: z.union([z.string(), z.array(z.string())]).optional(),
    publicat: z.boolean().optional(),
    promo: z.boolean().optional(),
    url_producator: z.union([z.url(), z.instanceof(URL)]).optional(),
    imagini: z.union([z.instanceof(File), z.array(z.instanceof(File))]).optional(),
    index_imagine_principala: z.number().min(0).max(50).optional(),
    videos: z.union([z.instanceof(File), z.array(z.instanceof(File))]).optional(),
    variante: z.union([z.string(), z.array(z.string())]).optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

export const ProduseUpdateZodSchema = baseUpdateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/),
    nume: z.string().optional(),
    descriere: z.string().optional(),
    descriere_extra_tip: z.enum(['', 'features', 'richtext', 'bullets']).optional(),
    descriere_extra: z.string().optional(),
    specificatii: z.string().optional(),
    partener: z.string().optional(),
    categorie: z.string().optional(),
    materiale: z.union([z.string(), z.array(z.string())]).optional(),
    'materiale+': z.union([z.string(), z.array(z.string())]).optional(),
    'materiale-': z.union([z.string(), z.array(z.string())]).optional(),
    publicat: z.boolean().optional(),
    promo: z.boolean().optional(),
    url_producator: z.union([z.url(), z.instanceof(URL)]).optional(),
    imagini: z.union([z.instanceof(File), z.array(z.instanceof(File))]).optional(),
    'imagini-': z.string().optional(),
    index_imagine_principala: z.number().min(0).max(50).optional(),
    'index_imagine_principala+': z.number().optional(),
    'index_imagine_principala-': z.number().optional(),
    videos: z.union([z.instanceof(File), z.array(z.instanceof(File))]).optional(),
    'videos-': z.string().optional(),
    variante: z.union([z.string(), z.array(z.string())]).optional(),
    'variante+': z.union([z.string(), z.array(z.string())]).optional(),
    'variante-': z.union([z.string(), z.array(z.string())]).optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

// ===== mesaje =====

export const MesajeResponseZodSchema = baseResponseSchema.extend({
    collectionName: z.literal('mesaje'),
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    contact_nume: z.string().optional(),
    contact_companie: z.string().optional(),
    contact_mesaj: z.string().optional(),
    contact_extra: z.union([z.record(z.string(), z.any()), z.array(z.any()), z.null()]).optional(),
    contact_tel_email: z.string().optional(),
    vazut: z.boolean().optional(),
    created: z.string().optional(),
    updated: z.string().optional()
});

export const MesajeCreateZodSchema = baseCreateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/).optional(),
    contact_nume: z.string().optional(),
    contact_companie: z.string().optional(),
    contact_mesaj: z.string().optional(),
    contact_extra: z.union([z.record(z.string(), z.any()), z.array(z.any()), z.null()]).optional(),
    contact_tel_email: z.string().optional(),
    vazut: z.boolean().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});

export const MesajeUpdateZodSchema = baseUpdateSchema.extend({
    id: z.string().min(15).max(15).regex(/^[a-z0-9]+$/),
    contact_nume: z.string().optional(),
    contact_companie: z.string().optional(),
    contact_mesaj: z.string().optional(),
    contact_extra: z.union([z.record(z.string(), z.any()), z.array(z.any()), z.null()]).optional(),
    contact_tel_email: z.string().optional(),
    vazut: z.boolean().optional(),
    created: z.union([z.string(), z.date()]).optional(),
    updated: z.union([z.string(), z.date()]).optional()
});


// Export all schemas
export const schemas = {
    users: {
        response: UsersResponseZodSchema,
        create: UsersCreateZodSchema,
        update: UsersUpdateZodSchema,
    },
    categorii: {
        response: CategoriiResponseZodSchema,
        create: CategoriiCreateZodSchema,
        update: CategoriiUpdateZodSchema,
    },
    parteneri: {
        response: ParteneriResponseZodSchema,
        create: ParteneriCreateZodSchema,
        update: ParteneriUpdateZodSchema,
    },
    materiale: {
        response: MaterialeResponseZodSchema,
        create: MaterialeCreateZodSchema,
        update: MaterialeUpdateZodSchema,
    },
    produse: {
        response: ProduseResponseZodSchema,
        create: ProduseCreateZodSchema,
        update: ProduseUpdateZodSchema,
    },
    mesaje: {
        response: MesajeResponseZodSchema,
        create: MesajeCreateZodSchema,
        update: MesajeUpdateZodSchema,
    },
};

export type Schemas = typeof schemas;

// Validation helpers
// Validation helpers for users
export const usersValidators = {
    response: (data: unknown) => UsersResponseZodSchema.parse(data),
    safeResponse: (data: unknown) => UsersResponseZodSchema.safeParse(data),
    create: (data: unknown) => UsersCreateZodSchema.parse(data),
    safeCreate: (data: unknown) => UsersCreateZodSchema.safeParse(data),
    update: (data: unknown) => UsersUpdateZodSchema.parse(data),
    safeUpdate: (data: unknown) => UsersUpdateZodSchema.safeParse(data),
};

// Type inference helpers for users
export type UsersResponseZod = z.infer<typeof UsersResponseZodSchema>;
export type UsersCreateZod = z.infer<typeof UsersCreateZodSchema>;
export type UsersUpdateZod = z.infer<typeof UsersUpdateZodSchema>;

// Validation helpers for categorii
export const categoriiValidators = {
    response: (data: unknown) => CategoriiResponseZodSchema.parse(data),
    safeResponse: (data: unknown) => CategoriiResponseZodSchema.safeParse(data),
    create: (data: unknown) => CategoriiCreateZodSchema.parse(data),
    safeCreate: (data: unknown) => CategoriiCreateZodSchema.safeParse(data),
    update: (data: unknown) => CategoriiUpdateZodSchema.parse(data),
    safeUpdate: (data: unknown) => CategoriiUpdateZodSchema.safeParse(data),
};

// Type inference helpers for categorii
export type CategoriiResponseZod = z.infer<typeof CategoriiResponseZodSchema>;
export type CategoriiCreateZod = z.infer<typeof CategoriiCreateZodSchema>;
export type CategoriiUpdateZod = z.infer<typeof CategoriiUpdateZodSchema>;

// Validation helpers for parteneri
export const parteneriValidators = {
    response: (data: unknown) => ParteneriResponseZodSchema.parse(data),
    safeResponse: (data: unknown) => ParteneriResponseZodSchema.safeParse(data),
    create: (data: unknown) => ParteneriCreateZodSchema.parse(data),
    safeCreate: (data: unknown) => ParteneriCreateZodSchema.safeParse(data),
    update: (data: unknown) => ParteneriUpdateZodSchema.parse(data),
    safeUpdate: (data: unknown) => ParteneriUpdateZodSchema.safeParse(data),
};

// Type inference helpers for parteneri
export type ParteneriResponseZod = z.infer<typeof ParteneriResponseZodSchema>;
export type ParteneriCreateZod = z.infer<typeof ParteneriCreateZodSchema>;
export type ParteneriUpdateZod = z.infer<typeof ParteneriUpdateZodSchema>;

// Validation helpers for materiale
export const materialeValidators = {
    response: (data: unknown) => MaterialeResponseZodSchema.parse(data),
    safeResponse: (data: unknown) => MaterialeResponseZodSchema.safeParse(data),
    create: (data: unknown) => MaterialeCreateZodSchema.parse(data),
    safeCreate: (data: unknown) => MaterialeCreateZodSchema.safeParse(data),
    update: (data: unknown) => MaterialeUpdateZodSchema.parse(data),
    safeUpdate: (data: unknown) => MaterialeUpdateZodSchema.safeParse(data),
};

// Type inference helpers for materiale
export type MaterialeResponseZod = z.infer<typeof MaterialeResponseZodSchema>;
export type MaterialeCreateZod = z.infer<typeof MaterialeCreateZodSchema>;
export type MaterialeUpdateZod = z.infer<typeof MaterialeUpdateZodSchema>;

// Validation helpers for produse
export const produseValidators = {
    response: (data: unknown) => ProduseResponseZodSchema.parse(data),
    safeResponse: (data: unknown) => ProduseResponseZodSchema.safeParse(data),
    create: (data: unknown) => ProduseCreateZodSchema.parse(data),
    safeCreate: (data: unknown) => ProduseCreateZodSchema.safeParse(data),
    update: (data: unknown) => ProduseUpdateZodSchema.parse(data),
    safeUpdate: (data: unknown) => ProduseUpdateZodSchema.safeParse(data),
};

// Type inference helpers for produse
export type ProduseResponseZod = z.infer<typeof ProduseResponseZodSchema>;
export type ProduseCreateZod = z.infer<typeof ProduseCreateZodSchema>;
export type ProduseUpdateZod = z.infer<typeof ProduseUpdateZodSchema>;

// Validation helpers for mesaje
export const mesajeValidators = {
    response: (data: unknown) => MesajeResponseZodSchema.parse(data),
    safeResponse: (data: unknown) => MesajeResponseZodSchema.safeParse(data),
    create: (data: unknown) => MesajeCreateZodSchema.parse(data),
    safeCreate: (data: unknown) => MesajeCreateZodSchema.safeParse(data),
    update: (data: unknown) => MesajeUpdateZodSchema.parse(data),
    safeUpdate: (data: unknown) => MesajeUpdateZodSchema.safeParse(data),
};

// Type inference helpers for mesaje
export type MesajeResponseZod = z.infer<typeof MesajeResponseZodSchema>;
export type MesajeCreateZod = z.infer<typeof MesajeCreateZodSchema>;
export type MesajeUpdateZod = z.infer<typeof MesajeUpdateZodSchema>;