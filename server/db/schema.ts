// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm"
import {
	index,
	pgTableCreator,
	serial,
	timestamp,
	varchar,
	pgTable,  text, integer, decimal,  boolean,
	 doublePrecision
} from "drizzle-orm/pg-core"



/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(name => `nuecomm_${name}`)


export const products = createTable('products', {
  id: serial('id').primaryKey(),
  handle: text('handle').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  price: doublePrecision('price').notNull(),
  availableForSale: boolean('available_for_sale').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const productImages = createTable('product_images', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id).notNull(),
  url: text('url').notNull(),
  altText: text('alt_text'),
});

export const collections = createTable('collections', {
  id: serial('id').primaryKey(),
  handle: text('handle').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
});

export const productCollections = createTable('product_collections', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id).notNull(),
  collectionId: integer('collection_id').references(() => collections.id).notNull(),
});

export const carts = createTable('carts', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const cartItems = createTable('cart_items', {
  id: serial('id').primaryKey(),
  cartId: integer('cart_id').references(() => carts.id).notNull(),
  productId: integer('product_id').references(() => products.id).notNull(),
  quantity: integer('quantity').notNull(),
});