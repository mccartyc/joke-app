const jokes = [
        {
          "joke": "Every morning I get hit by the same bicycle",
          "punchline": "It’s a vicious cycle"
        },
        {
          "joke": "A guy tried selling me a coffin...",
          "punchline": "That’s the last thing I need"
        },
        {
          "joke": "Why aren’t koalas bears?",
          "punchline": "Because they don’t meet the koalafacations."
        },
        {
          "joke": "My boss asked me why I am sick on the weekdays?",
          "punchline": "Must be my weekend immune system"
        },
        {
          "joke": "My wife told me to be more in touch with my feminine side…",
          "punchline": "So I crashed the car. And then ignored her all day for no reason."
        },
        {
          "joke": "If you pour root beer into a square glass",
          "punchline": "It just becomes beer."
        },
        {
          "joke": "What do you get when you cross an angry sheep with an angry cow?",
          "punchline": "Two animals that are in a baaaaad mooooood."
        },
        {
          "joke": "What did the duck say when he bought chapstick?",
          "punchline": "Put it on my bill"
        },
        {
          "joke": "My wife took off her shirt when I was winning an argument…",
          "punchline": "It was a booby trap"
        },
        {
          "joke": "Why did the golfer wear two pairs of pants?",
          "punchline": "In case he got a hole in one"
        },
        {
          "joke": "Did you hear about the guy who evaporated?",
          "punchline": "He’ll be mist"
        },
        {
          "joke": "What pronouns does chocolate use?",
          "punchline": "Her/She"
        },
        {
          "joke": "What did the pink panther say when he stepped on an ant?",
          "punchline": "Dead ant dead ant dead ant dead ant dead…"
        },
        {
          "joke": "Did you hear about that kidnapping at school?",
          "punchline": "It’s okay, he woke up"
        },
        {
          "joke": "Why are toilets so good at poker?",
          "punchline": "They always get a flush"
        },
        {
          "joke": "How does NASA organize their parties?",
          "punchline": "They planet"
        },
        {
          "joke": "What do you call a pile of cats?",
          "punchline": "Meowntain"
        },
        {
          "joke": "What do you do when you see a space man?",
          "punchline": "Park your car man"
        },
        {
          "joke": "What do you call an Argentinian with a rubber toe?",
          "punchline": "Roberto"
        },
        {
          "joke": "My wife asked if I had seen the dog bowl.",
          "punchline": "I never knew he did"
        },
        {
          "joke": "Why did the blind man fall into the well?",
          "punchline": "Because he couldn’t see that well."
        },
        {
          "joke": "Why is Cinderella bad at soccer?",
          "punchline": "Because she always runs away from the ball."
        },
        {
          "joke": "I just went to the hospital for a peekaboo incident.",
          "punchline": "If you need me I’ll be in the ICU"
        },
        {
          "joke": "Do they allow loud laughing in Hawaii?",
          "punchline": "Or just a low ha"
        },
        {
          "joke": "What did Mike Tyson say after working out with Chris Hemsworth?",
          "punchline": "You're gonna be Thor in the morning."
        },
        {
          "joke": "I saw a microbiologist today.",
          "punchline": "He was much bigger than expected."
        },
        {
          "joke": "What do you call a deer with no eyes?",
          "punchline": "No idear"
        },
        {
          "joke": "What do you call a fish with no eyes?",
          "punchline": "Fsh"
        },
        {
          "joke": "What kind of tea is the hardest to swallow?",
          "punchline": "Reality"
        },
        {
          "joke": "What do you call a medieval spy?",
          "punchline": "Sir Valence"
        },
        {
          "joke": "How many tickles does it take to make an octopus laugh?",
          "punchline": "Ten tickles"
        },
        {
          "joke": "When does a joke become a dad joke?",
          "punchline": "When it becomes apparent"
        },
        {
          "joke": "Why didn’t the ant get sick?",
          "punchline": "Because it had little antibodies"
        },
        {
          "joke": "What do you call a sleeping dinosaur?",
          "punchline": "A Z-Rex"
        },
        {
          "joke": "Which baseball player has the shortest commute?",
          "punchline": "Catcher, he always works from home"
        },
        {
          "joke": "Want to hear a pizza joke?",
          "punchline": "Never mind, it’s too cheesy"
        },
        {
          "joke": "I ordered a chicken and an egg on Amazon…",
          "punchline": "I’ll let you know"
        },
        {
          "joke": "Why did the invisible man turn down the job offer?",
          "punchline": "He couldn’t see himself doing it."
        },
        {
          "joke": "If you’re packing for a trip and you’re running out of room, pack a couple of portobello’s in there",
          "punchline": "that way you’ll end up with two mushrooms"
        },
        {
          "joke": "Why is Peter Pan always flying?",
          "punchline": "Because he Neverlands"
        },
        {
          "joke": "How do you get a squirrel to like you?",
          "punchline": "Act like a nut"
        },
        {
          "joke": "What do you call James Bond taking a bath?",
          "punchline": "Bubble 0 7"
        },
        {
          "joke": "Why did the football coach go to the bank?",
          "punchline": "Because he wanted his quarterback"
        },
        {
          "joke": "Why does the little mermaid wear sea shells?",
          "punchline": "Because she grew out of her B shells"
        },
        {
          "joke": "What do you call a nosey pepper?",
          "punchline": "It’s jalapeño business."
        },
        {
          "joke": "What’s an internal temperature of a Tauntaun?",
          "punchline": "Luke warm"
        },
        {
          "joke": "What do you call a boomerang that won’t go through?",
          "punchline": "A stick"
        },
        {
          "joke": "What happens when you touch Dwayne Johnson’s butt?",
          "punchline": "You hit rock bottom"
        },
        {
          "joke": "Why is the ocean so salty?",
          "punchline": "Because the land never waves back?"
        },
        {
          "joke": "What did the one eye say to the other?",
          "punchline": "Between you and me something smells"
        },
        {
          "joke": "Where does a king keep his armies?",
          "punchline": "In his sleevies"
        },
        {
          "joke": "Why do cows have bells?",
          "punchline": "Because their horns don’t work"
        },
        {
          "joke": "What do you do if you’re attacked by a group of clowns?",
          "punchline": "Go for the juggler"
        },
        {
          "joke": "What do you call two guys that like math?",
          "punchline": "Algebros"
        },
        {
          "joke": "Which month do trees fear?",
          "punchline": "Sep-timber"
        },
        {
          "joke": "How do you get a country girl's attention?",
          "punchline": "A tractor"
        },
        {
          "joke": "How do you tell a factory worker from a chemist?",
          "punchline": "Ask them to pronounce \"unionized\""
        },
        {
          "joke": "What do you call a rude criminal who’s coming down the stairs?",
          "punchline": "A condescending con descending"
        },
        {
          "joke": "I was confused when my printer started playing music...",
          "punchline": "Until I realized the paper was jamming."
        },
        {
          "joke": "Why do girls stand in groups of odd numbers?",
          "punchline": "Because they can't even"
        },
        {
          "joke": "How do you fix a cracked pumpkin?",
          "punchline": "With a pumpkin patch"
        },
        {
          "joke": "The photon checks into a hotel. The bellhop says “don’t you have any luggage?”",
          "punchline": "The photon says “No, I’m traveling light”"
        },
        {
          "joke": "What do horses say when they fall?",
          "punchline": "Help, I’ve fallen and I can’t giddy up!"
        },
        {
          "joke": "What is a ghost’s favorite fruit?",
          "punchline": "Booberries"
        },
        {
          "joke": "What is a scarecrow’s favorite fruit?",
          "punchline": "Strawberries"
        },
        {
          "joke": "I got fired from my first job at a bank because a lady asked me to check her balance...",
          "punchline": "So I pushed her"
        },
        {
          "joke": "If you have my fish jokes…",
          "punchline": "Let meno"
        },
        {
          "joke": "What is a vampire's favorite fruit?",
          "punchline": "Neck-tarine"
        },
        {
          "joke": "Why were the soft drinks mad after the basketball game?",
          "punchline": "Sierra Mist... they were soda pressed"
        },
        {
          "joke": "Why did the transgender man only eat salad?",
          "punchline": "Because he was a her before"
        },
        {
          "joke": "Did you hear about that blonde actress who got stabbed?",
          "punchline": "Reece… Witherspoon? No, with a knife."
        },
        {
          "joke": "Did you know humans eat more bananas than monkeys?",
          "punchline": "When’s the last time you saw someone eating a monkey"
        },
        {
          "joke": "What part of the body always loses?",
          "punchline": "Defeat"
        },
        {
          "joke": "What did the wise men say after they offered up gifts of gold and frankincense?",
          "punchline": "Wait, there’s myrrh"
        },
        {
          "joke": "What do you get when you cross a snowman and a vampire?",
          "punchline": "Frostbite"
        },
        {
          "joke": "What does Santa suffer from when he gets stuck in a chimney?",
          "punchline": "Claustrophobia"
        },
        {
          "joke": "Worst news ever: someone glued my favorite deck of cards together..",
          "punchline": "I can’t deal with it"
        },
        {
          "joke": "The scariest dinosaurs were the carnivores...",
          "punchline": "But the kindest, most polite dinosaurs were the por favors."
        },
        {
          "joke": "Why should you never give Elsa a balloon?",
          "punchline": "She’ll let it go, let it go"
        },
        {
          "joke": "Knock knock, who’s there, yoda lady...",
          "punchline": "Yoda lady who… stop yodeling"
        },
        {
          "joke": "What’s the difference between a piano and a tuna?",
          "punchline": "You can tune a piano, but you can’t tuna fish"
        },
        {
          "joke": "What do you call a man with no shins?",
          "punchline": "Toeknee"
        },
        {
          "joke": "This morning I ate a clock for breakfast...",
          "punchline": "It was very time consuming. Especially when I went back for seconds."
        },
        {
          "joke": "What’s the difference between Black Eyed Peas and Chick Peas?",
          "punchline": "Black Eyed Peas can sing us a song. Chick Peas can hummus one."
        },
        {
          "joke": "What vegetable can you use to fix a flat tire?",
          "punchline": "Asparagus"
        },
        {
          "joke": "Why does Snoop Dogg use an umbrella?",
          "punchline": "Fo drizzle"
        },
        {
          "joke": "Why are monkeys good at sports?",
          "punchline": "They're born chimpions"
        },
        {
          "joke": "You know what the pirate paid for his earrings?",
          "punchline": "Buccaneer"
        },
        {
          "joke": "What did the sushi say to the bee?",
          "punchline": "Wassabee?"
        },
        {
          "joke": "What genre are national anthems?",
          "punchline": "Country"
        },
        {
          "joke": "Did you hear about the T. Rex who sells guns?",
          "punchline": "He’s a small arms dealer"
        },
        {
          "joke": "What did the green grape say to the purple grape?",
          "punchline": "Oh my god, breathe!"
        },
        {
          "joke": "What’s Whitney Houston’s favorite type of coordination?",
          "punchline": "Hand eye"
        },
        {
          "joke": "If meteorites hit planets, what do you call the ones that miss?",
          "punchline": "Meteorwrongs"
        },
        {
          "joke": "What do you call a dumb squid?",
          "punchline": "Ink-competent"
        },
        {
          "joke": "I swallowed a bunch of Scrabble tiles...",
          "punchline": "The next trip to the bathroom could spell disaster"
        },
        {
          "joke": "Why do you never play poker at the zoo?",
          "punchline": "There are too many cheetahs"
        }  
  ];
  
  export default jokes;
  