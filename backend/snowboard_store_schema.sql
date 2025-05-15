--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: update_avg_rating(); Type: FUNCTION; Schema: public; Owner: roverp_dev
--

CREATE FUNCTION public.update_avg_rating() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN
IF (TG_OP = 'DELETE') THEN
  UPDATE products SET average_rating = (
    SELECT AVG(rating) FROM reviews 
    WHERE product_id = OLD.product_id
  ) WHERE id = OLD.product_id;
  RETURN OLD;
ELSE
  UPDATE products SET average_rating = (
    SELECT AVG(rating) FROM reviews 
    WHERE product_id = NEW.product_id
  ) WHERE id = NEW.product_id;
  RETURN NEW;
END IF;

END;
$$;


ALTER FUNCTION public.update_avg_rating() OWNER TO roverp_dev;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: roverp_dev
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(126) NOT NULL
);


ALTER TABLE public.brands OWNER TO roverp_dev;

--
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: roverp_dev
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.brands_id_seq OWNER TO roverp_dev;

--
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: roverp_dev
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: roverp_dev
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(126) NOT NULL
);


ALTER TABLE public.categories OWNER TO roverp_dev;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: roverp_dev
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO roverp_dev;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: roverp_dev
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: roverp_dev
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(126) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    discounted_price numeric(10,2) DEFAULT NULL::numeric,
    image_url text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    average_rating numeric(3,2) DEFAULT NULL::numeric,
    category_id integer,
    brand_id integer
);


ALTER TABLE public.products OWNER TO roverp_dev;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: roverp_dev
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO roverp_dev;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: roverp_dev
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: roverp_dev
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    product_id integer NOT NULL,
    rating numeric(2,1) NOT NULL,
    comment text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.reviews OWNER TO roverp_dev;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: roverp_dev
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reviews_id_seq OWNER TO roverp_dev;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: roverp_dev
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: sizes; Type: TABLE; Schema: public; Owner: roverp_dev
--

CREATE TABLE public.sizes (
    id integer NOT NULL,
    size numeric(5,2) NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.sizes OWNER TO roverp_dev;

--
-- Name: sizes_id_seq; Type: SEQUENCE; Schema: public; Owner: roverp_dev
--

CREATE SEQUENCE public.sizes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sizes_id_seq OWNER TO roverp_dev;

--
-- Name: sizes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: roverp_dev
--

ALTER SEQUENCE public.sizes_id_seq OWNED BY public.sizes.id;


--
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: sizes id; Type: DEFAULT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.sizes ALTER COLUMN id SET DEFAULT nextval('public.sizes_id_seq'::regclass);


--
-- Name: brands brands_name_key; Type: CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: sizes sizes_pkey; Type: CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_pkey PRIMARY KEY (id);


--
-- Name: categories unique_category_name; Type: CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT unique_category_name UNIQUE (name);


--
-- Name: reviews trigger_update_avg_rating; Type: TRIGGER; Schema: public; Owner: roverp_dev
--

CREATE TRIGGER trigger_update_avg_rating AFTER INSERT OR DELETE OR UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION public.update_avg_rating();


--
-- Name: products products_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.brands(id) ON DELETE SET NULL;


--
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE SET NULL;


--
-- Name: reviews reviews_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: sizes sizes_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: roverp_dev
--

ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

