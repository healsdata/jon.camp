---
title: "Ralph's Chili aka Recipe of Theseus"
date: 2026-02-22T09:00:00-05:00
author: Jon
layout: post
slug: ralphs-chili
summary: "Combining the Ship of Theseus with the Ralph Loop, I ran an AI agent in a loop substituting one ingredient at a time in a chili recipe until the AI itself declared it was no longer chili."
tags:
  - vibe coding
---

## Recipe of Theseus

A while ago, I was looking for recipe substitutions and it made me think of the [Ship of Theseus](https://en.wikipedia.org/wiki/Ship_of_Theseus); namely, how many ingredients can you substitute in 
a recipe before it's no longer recognizable as the original dish? For example, if a carrot cake recipe calls for butter, you can substitute vegetable oil and things will turn out about the same. Conversely, though, although parsnips work as a good substitution for carrots most of the time, would it still be a *carrot* cake afterwards? 

That idea ultimately went nowhere like many fleeting thoughts. After all, it seemed like the number of substitutions wasn't as important as which ingredient was being substituted and the unique characteristics of each ingredient.

## Ralph Loop

Completely unrelated, I've been reading about the [ralph loop](https://ghuntley.com/ralph/) as it applies to software engineering and coding with an AI agent. At the basic level, this technique is feeding the same prompt to an AI agent over and over until it produces the verifiable output you want. Practically, this would mean until the tests pass, the UI matches the Figma design, the calculated output is the known good number, etc.

I wanted to toy with this idea but didn't have an ideal project that needed it. Most of my vibe coding has been just using Claude Code's planning mode followed by letting Claude execute the plan. Then I'd step in to make tweaks as necessary and run my standard lint and test scripts. I'd call this the "Captain Cold Loop".

> Make the plan, execute the plan, expect the plan to go off the rails, throw away the plan
>
> -- Leonard Snart (Captain Cold)

## Ralph's Chili

Last night, I got the silly idea to combine these two things! Use the ralph loop to continually apply a substitution to a recipe until the AI agent itself no longer considers it to be the original recipe. The last recipe I made for my extended family was Andrew Bernard's [apple chili](https://makeitdairyfree.com/vegan-apple-chili/), although I had already substituted ground pork for the lentils (while folks in my family are dairy-, everyone does still eat meat.)

So I loaded the recipe into a new repo and put together this prompt for Claude:

```markdown
You're an expert when it comes to making substitutions and swaps in recipes, allowing home cooks to make the recipe with smart ingredient swaps. 

## The Plan

You will take the highest numbered file in `revisions/` and select one ingredient at random from the recipe.

From there, you will pick new ingredient(s) that are an appropriate substitution for that ingredient.
However, the proposed substitution MUST NOT be in the **Banned Substitutions** section. Those are banned.

### Output 

1. You will create a new file in `revisions/`, one number higher than the existing highest number, and write the new recipe -- replace the ingredient with the substitution.
2. You will also add the original ingredient into the `Banned Substitutions` section. 

## Constraints

* You may never suggest a substitution from the **Banned Substitutions** section.
* You may never subtract an ingredient from the **Banned Substitutions** section.
```

Then I ran it in a loop with this command, after asking Claude to convert [Matt Pocock](https://www.aihero.dev/getting-started-with-ralph)'s bash script to powershell. 

```powershell
param(
    [Parameter(Mandatory=$true)]
    [int]$Iterations
)

$ErrorActionPreference = 'Stop'

$prompt = "@PRD.md " +
    "1. Read the PRD " +
    "2. Complete the task inside " +
    "3. Commit your changes. " +
    "4. Examine the recipe just created. If you can no longer, in good faith, call that a 'chili' recipe, output <promise>complete</promise>"

for ($i = 1; $i -le $Iterations; $i++) {
    $result = docker sandbox run claude --permission-mode acceptEdits -p $prompt

    Write-Output $result

    if ($result -like "*<promise>complete</promise>*") {
        Write-Output "PRD complete after $i iterations."
        exit 0
    }
}
```

### Iterations

The first swap was pretty straightforward: remove vegetable stock, add chicken stock. Still chili.

Things didn't get interesting / unusual until the 9th swap: chickpeas (garbanzo beans) instead of black beans. I can't say I've seen a chili with chickpeas before but I'm sure it would work. Claude agreed and kept on going.

The next swap brought in pear juice instead of apple juice. I don't actually know the difference in flavors in prepared dishes, so on we went. 

Round 13 (lucky number?) swapped roasted red peppers for fire roasted tomatoes and then Round 14 dropped tomato paste for tamarind paste. This is where I would have stopped as I've never had a chili without tomatoes but Claude pushed on. 

The next swap confused me -- coconut milk instead of mild green chilis? 

And the final swap before Claude bowed out? Add curry powder, remove chili powder. 

> This recipe has: no tomatoes, no chili powder, coconut milk, tamarind paste, ground lamb, and pear juice. It is far more accurately described as a lamb and bean curry than a chili. The word "chili" in the name is no longer justified by the ingredients or flavor profile.
>
> `<promise>complete</promise>`

### Final Recipe

Here's the final iteration's ingredient list that is not chili, according to Claude:

```
* 1 large red onion, diced
* 4 cloves garlic, minced
* 1 large red apple, diced
* 15 oz chickpeas (garbanzo beans), drained and rinsed
* 15 oz navy beans, drained and rinsed
* 15 oz roasted red peppers, drained and roughly chopped
* 2 cups mushroom broth
* 1 cup pear juice
* 1/2lb ground lamb
* 2 tablespoons tamarind paste
* 1 cup coconut milk
* ½ tablespoon curry powder
* ½ tablespoon smoked paprika (sub for regular, we just like the smoky flavor)
* ½ tablespoon cumin
* ½ tablespoon cinnamon
* ½ teaspoon salt
* ½ teaspoon pepper
```

## Conclusion

In general, I think this reinforced my previous thought that recipes will have necessary ingredients to keep being the "same" recipe and others that can be substituted as they play a supporting role. A chili recipe without chilis or chili powder seems a bridge too far.

At the same time, this helped me see a bit of the promise of the Ralph Loop. There's plenty of tasks I do in the course of normal development that are "do X until Y is true" and those are a good candidate for this approach. 