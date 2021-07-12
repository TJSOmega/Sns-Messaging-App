const messageRandomizer = () => {
  let messagesArray = [
    'If you were a vegetable, you’d be a cute-cumber.',
    'My dog wants you to know that he/she misses you. Come over.',
    'I bet you smiled when you saw my name pop up on your phone just now.',
    'I envy your footwear. I want to be like them so I can be with you every step of the way.',
    'Roses are red. Violets are blue. Sugar is sweet...and so are you.',
    'My phone is in my hands, but I would rather be holding you.',
    'I haven’t seen you in forever. Have you been visiting your fellow angels in heaven?',
    'Send me your picture so I can show Santa what I want for Christmas.',
    'You’ve been running through my mind all day.',
    'If I was a stoplight, I would turn red every time you passed by just so I could stare at you a little longer.',
    'Let’s commit the perfect crime. You steal my heart, and I steal yours.',
    'Just so you know, I’m not flirting with you. I’m just being extra nice to you since you\'re extra attractive.',
    'I admit that you’re on my mind more than just sometimes.',
    'I don’t know what love potion you made me drink, but every time I think of you, I can’t stop smiling.',
    'Netflix and chill?',
    'You already know how much I really like you. So, what are you going to do about it?'


  ]
  let i = Math.floor(Math.random() * messagesArray.length)
  console.log(i)
  return messagesArray[i]
}


module.exports = messageRandomizer