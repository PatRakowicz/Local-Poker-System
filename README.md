### Local Poker System (LPS)
Poker buy in / cash out w/ payment options
Has calculator for chip value and x multiplier

#### [API]
- User create / sign in
- Venmo auth
- Send / payout w/ venmo
- Auto pot creation
- Auto chip calculator

---
#### [main page]
- New game button
- Settings
- App Version display

---
#### [new game page]
- +- player in game
- Display given chips
- Show initial chip count on player init
- End player -> ask for total chips in hand

---
#### [new game system]
- Initialize starting pot size with chip value
- Use set setting for total chips to be divided among given current players

#### {host - player init}
- New game player init button
- Input number of players < 8
- 50 | 25 | 10% per player
- See settings for 3 pile chip ratio

#### {game created player}
- Cash out button
- Ask user to input chip for given pile type
- Remove total chips from main pot, lower max

#### {end game}
- User inputs for each player amount of chips
- Convert chip to $$ ratio using set setting

---
#### [Settings]
- Creating profiles for the amount nt of chips you would like to start with on by in. Different profiles, Regular is base poker style for amount of chips.

- 50 Chips/Person
- (To play comfortably)

#### Regular (comfortable)
- Total : 50 chips dev. In 3 piles
- 10% {50} = 5
- 30% {50} = 15
- 60% {50} = 30

(Def) 5 Players | Total chips : 250

#### Half Chip | 50% less chips then Regular
- Total : 25 chips dev. In 3 piles
- 10% {25} = 2.5 + 0.5 = 3
- 30% {25} = 7.5 - 0.5 = 7
- 60% {25} = 15

(Def) 5 players | Total chips : 125


#### 10% | Not enough chips for other profiles
- // TODO : calc 

#### Recourses
- [Dynamic Addition](https://www.freecodecamp.org/news/build-dynamic-forms-in-react/)