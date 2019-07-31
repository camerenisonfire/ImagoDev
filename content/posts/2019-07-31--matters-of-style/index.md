---
title: Matters of Style
tags: ["style", "coding", "theory"]
cover: teo-duldulao-wood-pattern.jpg
author: cameren dolecheck
---

<re-img
    src="teo-duldulao-wood-pattern.jpg"
    title="Photo by Teo Duldulao on Unsplash"
    href="https://unsplash.com/photos/4op9_2Bt2Eg"
    >
</re-img>

What comes to your mind when you consider the word **style**? Have you considered your style? Most people limit their idea of style to the clothes on their backs or to some design trends. Maybe, if they have thought a little more about it, they consider a fuller picture of their style -- the way they communicate.

#Understanding Style
Our style is the conglomeration of all the ways we choose to reflect our inner-self to the outside world. This encompasses far more than simply what colors we pick or what words we use. Everything that expresses our values, emotions, interests, faith, knowledge, status, and skills adds up to the cumulative whole of style.

_Style matters a lot._ A well planned style can vastly improve your ability to communicate to others; however, how we communicate may need to be adjusted based on the context and audience. A white coat and stethoscope would likely help bring credibility to someone giving medical advice, but probably would seem strange for someone to wear while selling tractors. Writing an essay in Comic Sans while using slang and emojis probably will not earn a college scholorship, but that might be fun and enjoyable connect while texting your nephew.

##Coding
Writing software is, in large part, the art of communicating technical processes. It is no coicidence that software is written with programming _languages_. Often times, how you write your code can arguably be more important than the resulting instructions the computer actually performs.

It has been said that **software development is mostly reading, not writing, code.** Trying to figure out a bug or how the new feature will fit into the existing code base starts by reading the existing code. The easier that code is to understand, the quicker these tasks can be completed. Because of this, organizations and languages build up style guidelines to follow. These guidelines create consistent patterns that aid in creating a cohesive codebase.

Like the clothes or grooming of a person, a codebase's style can be a big indicator for the quality of the code and the ability of its creator. If you were a manager or a hiring agent looking at someone's work, who would you trust more:

<br>
Person A

```javascript
let Thing1 = p(1, 2, 3, 4, "Lego");
let thing2 = p(1, 2, 3, 4, "connect");
console.log(Thing1 + " as compared to " + thing2);
```

<br>
or Person B

```javascript
const houseSides = [1, 2, 3, 4]; //length of house to build in inches
let legoBricksNeeded = perimeterLego(houseSides);
let connectPiecesNeeded = perimeterConnect(houseSides);
printComparison(legoBricksNeeded, connectPiecesNeeded);
```

<br>
Person B has put much more effort and thought into thinking up useful names for their variables and functions, keeping the capitilization consitent, and using data structures. Taking time to simply give things consistent and understandable names goes a long way in connecting the reader to what problem is being solved. It also drasticly improves other people's perception of not only the codebase, but its author.

Maybe you, reader, at this point are thinking, "I am only writing these small personal projects for myself, no one else is even going to see my code." It is easy to see something as private and let that quality falter, but the small personal victories build up to the large public ones. When you do write code that others will use, your style will have matured from the private changes you implemented.

Even if it was true that you would only ever write something for themselves to read, you still need to understand it. The `p()` function in the Person A example might make sense to the creator in that moment, but will it imediately a year later? Sure, it is easy enough to go to the `p()` definition and read what it does, but that adds time, if even just a little. If that process needs to be done for every function written, hours have been added to making the change. Up-front time of crafting a clear and concise style would have saved hours later.

##Improving

> “On matters of style, swim with the current, on matters of principle, stand like a rock.”
> -Thomas Jefferson

When starting a new language, it can be difficult to know what good style looks like. There are some general rules that always apply, like consistent capitolization or well named functions. Languages like Python enforce white space styling while others will let you write just about how ever you please. [Google has a repositoy of style guides](https://google.github.io/styleguide/) for a wide variety of languages. Many of them even come with linters. Think of these as your personal stylist. They work as a set of rules that code editors use to autocorrect any styling issues.

There are also many excellent books that focus on style. [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-vivaldi-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0132350882) is a great resource, especially for object-oriented languages.

If you already are working on a project that maybe is... less than great in code style, it is never to late to fix that. Refactoring is the optimal time to do large fixes of code style; however, the very next line of code you write can begin putting that codebase on track. It might be the smallest bug, but every little change can be a victory.

Since this topic of style is such an vastly important one, there will certainly be more posts from Imago Dev on this matter. Stay tuned!
