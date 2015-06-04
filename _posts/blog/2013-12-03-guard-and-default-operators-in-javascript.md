---
title: Guard and Default Operators in Javascript
layout: post
permalink: /guard-and-default-operators-in-javascript/
categories:
  - code
tags:
  - javascript
  - operators
---
We can use the logical ‘AND’ \(\&\&\) and the logical ‘OR’ \(\|\|\) when evaluating values. This can be useful for writing simple and concise return statements and variable assignments. 

###Logical AND - The Guard Operator

The logical AND operator works like a guard. Consider this common pattern: 

        var get_username = function() {
            if (loggedin) {
                return username;
            }
        };

This can be replaced by a simple one liner: 

        var get_username = function() { return loggedin && username; }

If A is true, then the username value will be returned. If A is false, then false is returned. A works like a guard protecting B and will only allow access if A itself is true. 

### Logical OR - The Default Operator 

The logical OR operator works the other way around. If A is true, then A is returned. If A is false, return B. This is often used to assign default values to variables, hence 'default operator' 

        var name = name || "no name assigned";

This is useful to set variable values when the intended value isn't reachable. This then prevents the programs breaking when trying to perform operations on an 'undefined' variable. 

### Why this works? 

It's important to note why this works, and why we don't just get boolean values returned. Javascript will evaluate the clauses of the statement in turn. In the case of AND, it will first look at A to see if it can proceed. If true, then the value of B is returned, otherwise false is returned. This is known as <a href="http://en.wikipedia.org/wiki/Short-circuit_evaluation" title="Short Circut Evaluation" target="_blank">Short Circut Evaluation</a>. Javascript doesn't perform any type coercion on any of these values, it just evaluates them as truthy or falsey for the purpose of evaluting the logical expression.
