# Snowboard Store

## Wstęp

Z roku na rok rośnie popularność sportów zimowych, a wraz z nią – zapotrzebowanie na wygodne i przejrzyste sklepy internetowe, które pozwalają pasjonatom łatwo przeglądać ofertę sprzętu i akcesoriów. Celem niniejszego projektu jest stworzenie nowoczesnej aplikacji e-commerce dedykowanej sprzedaży snowboardów i akcesoriów zimowych. Dzięki połączeniu sprawdzonego stosu technologicznego (React + TypeScript + Redux na froncie, Node.js + PostgreSQL na backendzie) użytkownik otrzymuje szybki, interaktywny i bezpieczny sklep online.

## Cel projektu

Głównym problemem, który rozwiązuje aplikacja, jest brak przejrzystego i responsywnego sklepu oferującego szeroki wybór snowboardów w jednym miejscu. Aplikacja ma:

- umożliwić użytkownikom przeglądanie katalogu snowboardów z podstawowym filtrowaniem,
- zapewnić wygodne dodawanie produktów do koszyka,
- dostarczyć bezpieczną komunikację z serwerem w celu obsługi zapytań o produkty i realizacji zamówień,
- być łatwa w rozbudowie (nowe moduły, integracje płatności).

## Przegląd istniejących rozwiązań

1. **Burton Shop**  
   – lider rynku snowboardowego, bogata oferta sprzętu i odzieży. Intuicyjna nawigacja, ale czasem wolne ładowanie zdjęć dużej rozdzielczości.
2. **Evo.com**  
   – duży katalog marek, rozbudowane filtry (rozmiar, typ deski, cena). Brak jednak prostego mechanizmu rekomendacji na podstawie historii przeglądania.
3. **The House**  
   – sklep z szybkim checkoutem oraz opcją „pickup in store”. Minimalistyczny design, ale mało zaawansowane filtrowanie według parametrów deski.

Każde z tych rozwiązań dostarcza inspiracji do UI/UX, ale jednocześnie pokazuje potencjalne obszary do poprawy w naszym projekcie.

## Opis architektury

Projekt jest zorganizowany w postaci monorepo:

#### Struktura katalogów projektu

- backend – serwer Node.js + Expres
- frontend – aplikacja React + TypeScript + Redux
- shared/types – wspólne definicje typów TypeScript
- docs – pliki pomocnicze, diagramy, schematy dokumentacyjne

### Backend

- Serwer HTTP zbudowany w Node.js z użyciem frameworka **Express**.
- Wystawia REST API, obsługujące zapytania od klienta (np. `/api/products`).
- Komunikuje się z bazą danych PostgreSQL za pomocą biblioteki `pg` lub ORM (np. Sequelize – jeśli używany).
- Struktura kodu zwykle zawiera:
  - `routes/` – definicje tras i endpointów,
  - `controllers/` – logika odpowiedzialna za obsługę żądań,
  - `models/` – struktury danych lub zapytania do bazy,
  - `middlewares/` – obsługa błędów, autoryzacja itd.

### Frontend

- Aplikacja napisana w **React** z użyciem **TypeScript** i **Redux Toolkit** do zarządzania stanem globalnym.
- Umożliwia dynamiczne pobieranie danych z API (np. lista produktów) oraz interakcję z użytkownikiem (np. dodanie do koszyka).
- Główne foldery to:
  - `components/` – komponenty interfejsu użytkownika,
  - `pages/` – strony aplikacji (np. Home, Cart),
  - `store/` – konfiguracja Redux i poszczególne "slice'y",
  - `api/` – funkcje do komunikacji z backendem.

### Baza danych

- Relacyjna baza danych **PostgreSQL**.
- Główne tabele:
  - `products` – dane o snowboardach,
  - `users` – dane użytkowników,
  - `orders` – zamówienia,
  - `order_items` – szczegóły zamówień (relacja N:M).
- Możliwa integracja z systemem migracji schematów (np. `node-pg-migrate`).

### Komunikacja między komponentami

- Frontend komunikuje się z backendem poprzez żądania HTTP (`fetch`, `axios`) w formacie JSON.
- Backend przetwarza żądania i wykonuje odpowiednie operacje w bazie danych.
- Całość opiera się na architekturze klient-serwer z jasno rozdzieloną odpowiedzialnością.

## Opis implementacji

### Backend

Backend aplikacji został zbudowany w oparciu o Node.js i Express. Aktualnie serwer udostępnia podstawowy endpoint REST do pobierania danych o produktach (`/api/products`), które są przechowywane w bazie PostgreSQL. Komunikacja z bazą odbywa się za pomocą biblioteki `pg`.

Dodatkowo:

- Dane są walidowane po stronie serwera przed wysłaniem do klienta.
- Obsługa błędów została częściowo zaimplementowana z możliwością rozszerzenia.
- Struktura katalogów umożliwia łatwe dodanie kolejnych endpointów (np. zamówienia, użytkownicy).

### Frontend

Frontend stworzony w React + TypeScript zawiera:

- Stronę główną z dynamicznym pobieraniem i wyświetlaniem produktów z backendu.
- Komponenty do renderowania kart produktów z nazwą, ceną i zdjęciem.
- Obsługę globalnego stanu (np. koszyk, dane produktów) za pomocą Redux Toolkit.
- W przyszłości planowane są widoki: szczegóły produktu, koszyk, checkout.

### Baza danych

Dane produktów znajdują się w relacyjnej bazie danych PostgreSQL. Tabela `products` zawiera podstawowe pola: `id`, `name`, `price`, `description`, `image_url`. W przyszłości planowane są kolejne tabele: `users`, `orders`, `order_items` wraz z relacjami i migracjami.

## Podsumowanie i wnioski

Projekt Snowboard Store jest obecnie w fazie budowy i aktywnego rozwoju. Najważniejsze funkcje – wyświetlanie produktów na stronie głównej oraz połączenie frontend–backend–baza danych – zostały już zrealizowane. Wyzwaniem było prawidłowe skonfigurowanie komunikacji między komponentami oraz przygotowanie elastycznego modelu danych.

Plany na dalszy rozwój obejmują:

- stworzenie koszyka i procesowania zamówień,
- dodanie systemu logowania i rejestracji użytkowników,
- integrację z bramką płatności (np. Stripe),
- poprawę responsywności i UX,
- rozbudowę panelu administracyjnego.

## Bibliografia

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Node.js Documentation](https://nodejs.org/en/docs)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
