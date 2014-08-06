---
layout: post
title: "Switch Statements in Javascript"
category: "blog"
permalink: "switch-statements-in-javascript"
tags: ["javascript","switch"]
---

I'm writing this post because I never use switch statements whilst coding, prefering instead to use multiple if/else statements to achieve the same result. This is because I can never remember the syntax to write a switch statement. Well no more.

###Basic Switch in Javascript

        switch (expression) {
          case expression1:
            statement(s);
            break;
          case expression2:
            statement(s);
            break;
          case expressionN:
            statement(s);
            break;
          default:
            statement(s);
        }

The first line indicates which expression we're going to be matching the case clauses against. The resulting case clauses will list statements that will be executed if the case matches the initial expression. The expressions are compared using '===' strict equality, which means no type conversions.

Each case clause is expected to end with a break statement to end the switch. Omitting the break changes the behaviour of the switch.

The default case will execute if no other cases match the initial expression. This is why including the break statements in the preceding clauses is important. Although it's not required to have a default case, it's good coding practice to include one. It allows you to catch unexpected values and handle them appropriately.


###Omiting the break and switch fallthrough



