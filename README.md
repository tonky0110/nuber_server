# nuber_server

Server for the (N)Uber Clone Cource on Nomad Academy. GraphQL, Typescript, NodeJS

환경설정

1. git hub repository 생성

1) github접속.
2) '+' 선택 신규 repository생성
3) pc 폴더 생성
   mkdir nuber-server
4) git 연결
   git init
   git remote add origin URL
   git pull origin master

5) VSCODE실행
   code .

tsconfig - typescript를 설정하기 위한 파일.
tslint - typescript linter를 설정하기 위한 파일.

추가 package생성
yarn add typescript ts-node nodemon --dev
yarn add graphql-yoga
yarn add graphql-tools merge-graphql-schemas

Middleware
yarn add helmet morgan cors
helmet - 보안을 위한 미들웹어

types설치
yarn add @types/cors @types/helmet @types/morgan --dev

yarn add @types/node@^10.5.0 nodemon@^1.17.5 ts-node@^7.0.0 tslint-config-prettier@^1.13.0 typescript@^2.9.2 --dev
yarn add cors@^2.8.4 graphql-tools@^3.0.4 graphql-yoga@^1.14.10 helmet@^3.12.1 merge-graphql-schemas@^1.5.2 morgan@^1.9.0
yarn add graphql-to-typescript gql-merge --dev

1.1 ~ 1.8
type정의
resolver
schema
typescript설정.

yarn add typeorm pg dotenv class-validator bcrypt
yarn add @types/bcrypt --dev

1.12 ~ 1.14
.env
DB_ENDPOINT = ?
DB_USERNAME = ?
DB_PASSWORD = ?
TWILIO_TOKEN = ?

## Resolvers

### Public Resolvers:

- [x] Sign in / Sign Up with Facebook
- [x] Sign in with Email
- [ ] starts Phone Number Verifacation
- [ ] Complete Phone Number Verifacation

---

### Authentication:

- [ ] Generate JWT
- [ ] Verify JWT

---

### Private Resolvers:

- [ ] Verify Email
- [ ] Sign up with Email
- [ ] Get my Profile
- [ ] Update my Profile
- [ ] Toggle Driving Mode
- [ ] Report Location / Orientation
- [ ] Add Placee
- [ ] Edit Place
- [ ] Delete Place
- [ ] See Nearby Drivers
- [ ] Subscribe to Nearby Drivers
- [ ] Request a Ride
- [ ] Get Nearby Rides Requests
- [ ] Subscribe to Nearby Ride Requests
- [ ] Subscribe to Ride status
- [ ] Get Chat Room Messages
- [ ] Subscribe to Chat Room Messages
- [ ] Send a Chat Message

## code Challenge

- [ ] Get Ride History
- [ ] See Ride Detail
- [ ]

---

Send SMS - using twilio
www.twilio.com/
yarn add twilio
yarn add @types/twilio --dev

yarn add jsonwebtoken
yarn add @types/jsonwebtoken --dev

https://passwordsgenerator.net/

yarn add mailgun-js
yarn add @types/mailgun-js --dev

pubSub =>> Redies or Memcashed 로 써야됨(Subscription용)
