let quotes = ["All our dreams can come true, if we have the courage to pursue them.",
    "The secret of getting ahead is getting started", "The best time to plant a tree was 20 years ago. The second best time is now",
    "It’s hard to beat a person who never gives up", "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE",
    "Whatever you are, be a good one.", "Hold the vision, trust the process.", "Don’t be afraid to give up the good to go for the great",
    "No one is to blame for your future situation but yourself. If you want to be successful, then become Successful.",
    "Things may come to those who wait, but only the things left by those who hustle", "Hustle in silence and let your success make the noise.",
    "Greatness only comes before hustle in the dictionary", "Invest in your dreams. Grind now. Shine later.",
    "Hustlers don’t sleep, they nap.", "Work hard, be kind, and amazing things will happen.", "The miracle is not that we do this work, but that we are happy to do it.",
    "Nothing will work unless you do.", "Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.",
    "Don’t limit your challenges. Challenge your limits.", "In the middle of every difficulty lies opportunity",
    "Start where you are. Use what you have. Do what you can", "Dreams don’t work unless you do", "Go the extra mile. It’s never crowded there.",
    "Keep your face always toward the sunshine – and shadows will fall behind you.", "Make each day your masterpiece",
    "Wherever you go, go with all your heart", "Turn your wounds into wisdom", "Begin anywhere", "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    "Every champion was once a contender that didn’t give up.","Don’t dream about success. Get out there and work for it",
    "If you obey all the rules, you miss all the fun.","Never regret anything that made you smile.","You must do the thing you think you cannot do.",
    "Doubt kills more dreams than failure ever will.","Today is your opportunity to build the tomorrow you want.",
    "Always say YES I CAN","Focus on being productive instead of busy","No one would have crossed the ocean if he could have gotten off the ship in the storm.",
    "Constantly learn new things, develop your skills and learn new ones, more knowledge equals more motivation.",
    "In any project, the important factor is your belief. Without belief there can be no successful outcome.",
    "I can give you a six-word formula for success: Think things through, then follow through.", "You can be rich and famous and still end up being unhappy",
    "You can be rich and famous and still end up being unhappy.","No man has a chance to enjoy permanent success until he begins to look in a mirror for the real cause of all his mistakes",
    "Thought is the strongest thing we have. Work done by true and profound thought - that is a real force.",
    "Compassion is the form that altruistic love takes when it is confronted with others' sufferings.",
    "Imagine all of us living in peace, it's too beautiful to just be a dream.","Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    "We are wired to be kind. It’s our deepest nature.","There's nothing in the world like the feeling you get when you perform a random act of kindness",
    "Maybe life is random, but I doubt it.","Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek",
    "It may seem funny to say that giving makes us feel happier. What about receiving, I hear you say, that's nice too! But, believe me, giving will make you feel ten times happier"
]
function genQuotes() {
    let anyNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("displayQuotes").innerHTML = quotes[anyNumber];
}