# Tech Stack

- Next 13.3.5

- Auth : Clerk
- ORM : Prisma
- Database : MySQL (Plannet Scale)

- CSS : Tailwindcss
- Icon : Lucide React
- Logo : from logoipsum.com

# Authenticate by Clerk

- set up .env file
- set up Clerk Provider in app/layout.tsx
- follow https://clerk.com/docs/quickstarts/nextjs
- use <UserButton/> for sign out

#### how to set up .env file

- set public url for sign in and sign up
- set redirect url after sign in and sign up

```.env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```
